'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

exports.default = function (input, included_countries, extended, included_phone_number_types) {
	// Validate `included_phone_number_types`
	if (included_phone_number_types) {
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = (0, _getIterator3.default)(included_phone_number_types), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var type = _step.value;

				if (phone_number_types.indexOf(type) < 0) {
					return _bluebird2.default.reject('Unknown phone number type: ' + type);
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	}

	// Parse the XML metadata
	return _bluebird2.default.promisify(_xml2js.parseString)(input).then(function (xml) {
		// https://github.com/googlei18n/libphonenumber/blob/master/resources/PhoneNumberMetadata.xml
		// https://github.com/googlei18n/libphonenumber/blob/master/resources/phonemetadata.proto
		// https://github.com/googlei18n/libphonenumber/blob/master/javascript/i18n/phonenumbers/phonenumberutil.js
		// https://github.com/googlei18n/libphonenumber/blob/master/javascript/i18n/phonenumbers/asyoutypeformatter.js

		var country_phone_code_to_countries = {};
		var countries = {};

		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			var _loop = function _loop() {
				var territory = _step2.value;

				// A two-letter country code
				var country_code = territory.$.id;

				// Skip this country if it has not been explicitly included
				if (included_countries && !included_countries.has(country_code)) {
					return 'continue';
				}

				// Country metadata
				var country = {
					// Phone code related fields:

					// Phone code for phone numbers in this country.
					//
					// E.g. `1` for both USA and Canada.
					//
					phone_code: territory.$.countryCode,

					// In case of several countries
					// having the same country phone code,
					// these leading digits are the means
					// of classifying an international phone number
					// whether it belongs to a certain country.
					//
					// E.g. for Antigua and Barbuda
					// country phone code is `1` (same as USA)
					// and leading digits are `268`.
					//
					leading_digits: territory.$.leadingDigits,

					// The regular expression of all possible
					// national (significant) numbers for this country.
					national_number_pattern: territory.generalDesc[0].nationalNumberPattern[0].replace(/\s/g, ''),

					// National prefix related fields:

					// aka "trunk code".
					// This is the prefix prepended to a
					// national (significant) phone number
					// when dialed from within the country.
					// E.g. `0` for UK.
					national_prefix: territory.$.nationalPrefix,

					// In some (many) countries the national prefix
					// is not just a constant digit (like `0` in UK)
					// but can be different depending on the phone number
					// (and can be also absent for some phone numbers).
					//
					// So `national_prefix_for_parsing` is used when parsing
					// a national-prefixed (local) phone number
					// into a national significant phone number
					// extracting that possible national prefix out of it.
					//
					national_prefix_for_parsing: territory.$.nationalPrefixForParsing ? territory.$.nationalPrefixForParsing.replace(/\s/g, '') : undefined,

					// If `national_prefix_for_parsing` regular expression
					// contains "captured groups", then `national_prefix_transform_rule`
					// defines how the national-prefixed (local) phone number is
					// parsed into a national significant phone number.
					//
					// Pseudocode:
					//
					// national_prefix_pattern = regular_expression('^(?:' + national_prefix_for_parsing + ')')
					// national_significant_number = all_digits.replace(national_prefix_pattern, national_prefix_transform_rule)
					//
					// E.g. if a country's national numbers are 6-digit
					// and national prefix is always `0`,
					// then `national_prefix_for_parsing` could be `0(\d{6})`
					// and the corresponding `national_prefix_transform_rule` would be `$1`
					// (which is the default behaviour).
					//
					// Currently this feature is only used in
					// Argentina, Brazil, Mexico and San Marino
					// due to their messy telephone numbering plans.
					//
					// For example, mobile numbers in Argentina are written in two completely
					// different ways when dialed in-country and out-of-country
					// (e.g. 0343 15 555 1212 is exactly the same number as +54 9 343 555 1212).
					// Therefore for Argentina `national_prefix_transform_rule` is `9$1`.
					//
					national_prefix_transform_rule: territory.$.nationalPrefixTransformRule,

					// Controls how national prefix is written
					// in a formatted local phone number.
					//
					// E.g. in Armenia national prefix is `0`
					// and `national_prefix_formatting_rule` is `($NP$FG)`
					// which means that a national significant phone number `xxxxxxxx`
					// matching phone number pattern `(\d{2})(\d{6})` with format `$1 $2`
					// is written as a local phone number `(0xx) xxxxxx`.
					//
					national_prefix_formatting_rule: national_prefix_formatting_rule(territory.$.nationalPrefixFormattingRule, territory.$.nationalPrefix),

					// Is it possible that a national (significant)
					// phone number has leading zeroes?
					//
					// E.g. in Gabon some numbers start with a `0`
					// while the national prefix is also `0`
					// which is optional for mobile numbers.
					//
					national_prefix_is_optional_when_formatting: territory.$.nationalPrefixOptionalWhenFormatting ? Boolean(territory.$.nationalPrefixOptionalWhenFormatting) : undefined,

					// I suppose carrier codes can be omitted.
					// They are required only for Brazil and Columbia,
					// and only when calling to fixed line numbers
					// from mobile phones within those countries.
					// I guess people living in those countries
					// would know that they need to add carrier codes.
					// Other people don't need to know that.
					// Anyway, if someone sends a Pull Request
					// implementing carrier codes as Google's `libphonenumber` does
					// then such Pull Request will likely be merged.
					//
					// // In some countries carrier code is required
					// // to dial certain phone numbers.
					// //
					// // E.g. in Colombia calling to fixed line numbers
					// // from mobile phones requires a carrier code when called within Colombia.
					// // Or, for example, Brazilian fixed line and mobile numbers
					// // need to be dialed with a carrier code when called within Brazil.
					// // Without that, most of the carriers won't connect the call.
					// // These are the only two cases when "carrier codes" are required.
					// //
					// carrier_code_formatting_rule: territory.$.carrierCodeFormattingRule,

					// These `types` will be purged later,
					// if they're not needed (which is most likely).
					// See `country_phone_code_to_countries` ambiguity for more info.
					//
					types: get_phone_number_types(territory),

					// Will be filtered out during compression phase
					examples: get_phone_number_examples(territory)

					// Check that national (significant) phone number pattern
					// is set for this country (no "default" value here)
				};if (!country.national_number_pattern) {
					throw new Error('"generalDesc.nationalNumberPattern" is missing for country ' + country_code + ' metadata');
				}

				// Some countries don't have `availableFormats` specified,
				// because those formats are inherited from the "main country for region".
				if (territory.availableFormats) {
					country.formats = territory.availableFormats[0].numberFormat.map(function (number_format) {
						return {
							pattern: number_format.$.pattern,
							leading_digits_patterns: number_format.leadingDigits ? number_format.leadingDigits.map(function (leading_digits) {
								return leading_digits.replace(/\s/g, '');
							}) : undefined,
							national_prefix_formatting_rule: national_prefix_formatting_rule(number_format.$.nationalPrefixFormattingRule, territory.$.nationalPrefix),
							national_prefix_is_optional_when_formatting: number_format.$.nationalPrefixOptionalWhenFormatting,
							format: number_format.format[0],
							international_format: number_format.intlFormat ? number_format.intlFormat[0] : undefined
						};
					})
					// Screw local-only formats
					.filter(function (format) {
						return format.international_format !== 'NA';
					});

					// Sanity check (using no "default" for this field)
					var _iteratorNormalCompletion5 = true;
					var _didIteratorError5 = false;
					var _iteratorError5 = undefined;

					try {
						for (var _iterator5 = (0, _getIterator3.default)(country.formats), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
							var format = _step5.value;

							// Never happens
							if (!format.format) {
								throw new Error('No phone number format "format" supplied for pattern ' + format.pattern + ' for ' + country_code);
							}

							// Never happens
							if (format.format.indexOf(_AsYouType.DIGIT_PLACEHOLDER) >= 0) {
								throw new Error('Phone number format "' + format.format + '" contains a reserved "' + _AsYouType.DIGIT_PLACEHOLDER + '" symbol for pattern ' + format.pattern + ' for ' + country_code);
							}
						}
					} catch (err) {
						_didIteratorError5 = true;
						_iteratorError5 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion5 && _iterator5.return) {
								_iterator5.return();
							}
						} finally {
							if (_didIteratorError5) {
								throw _iteratorError5;
							}
						}
					}
				}

				// Add this country's metadata
				// to the metadata map.
				countries[country_code] = country;

				// Register this country's "country phone code"

				if (!country_phone_code_to_countries[country.phone_code]) {
					country_phone_code_to_countries[country.phone_code] = [];
				}

				// In case of several countries
				// having the same country phone code.
				//
				// E.g. for USA and Canada, USA is the
				// "main country for phone code 1".
				//
				// (maybe this field is not used at all
				//  in which case this field is to be removed)
				//
				if (territory.$.mainCountryForCode === "true") {
					country_phone_code_to_countries[country.phone_code].unshift(country_code);
				} else {
					country_phone_code_to_countries[country.phone_code].push(country_code);
				}
			};

			for (var _iterator2 = (0, _getIterator3.default)(xml.phoneNumberMetadata.territories[0].territory), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var _ret = _loop();

				if (_ret === 'continue') continue;
			}

			// Some countries don't have `availableFormats` specified,
			// because those formats are meant to be copied
			// from the "main country for region".
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}

		var _iteratorNormalCompletion3 = true;
		var _didIteratorError3 = false;
		var _iteratorError3 = undefined;

		try {
			for (var _iterator3 = (0, _getIterator3.default)((0, _keys2.default)(countries)), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
				var _country_code = _step3.value;

				var _country = countries[_country_code];

				var main_country_for_region_code = country_phone_code_to_countries[_country.phone_code][0];
				var main_country_for_region = countries[main_country_for_region_code];
				_country.formats = main_country_for_region.formats;

				// Some countries like Saint Helena and Falkland Islands
				// ('AC', 'FK', 'KI', 'NU', 'SH', 'TA', ...)
				// don't have any phone number formats
				// and phone numbers are formatted as a block in those countries.
				if (!_country.formats) {
					_country.formats = [];
				}
			}

			// Turns out that `<generalDesc><nationalNumberPattern/></generalDesc>`
			// is not preemptive at all: it's too unspecific for the cases
			// when several countries correspond to the same country phone code
			// (e.g. NANPA: US, Canada, etc — all correspond to the same `1` country phone code).
			// For these cases all those bulky `<fixedLine/>`, `<mobile/>`, etc
			// patterns are required. Therefore retain them for these rare cases.
			//
			// This increases metadata size by 5 KiloBytes.
			//
		} catch (err) {
			_didIteratorError3 = true;
			_iteratorError3 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion3 && _iterator3.return) {
					_iterator3.return();
				}
			} finally {
				if (_didIteratorError3) {
					throw _iteratorError3;
				}
			}
		}

		var _iteratorNormalCompletion4 = true;
		var _didIteratorError4 = false;
		var _iteratorError4 = undefined;

		try {
			for (var _iterator4 = (0, _getIterator3.default)((0, _keys2.default)(country_phone_code_to_countries)), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
				var country_phone_code = _step4.value;

				var country_codes = country_phone_code_to_countries[country_phone_code];

				// Purge `types` regular expressions (they are huge)
				// when they're not needed for resolving country phone code
				// to country phone number matching.
				// E.g. when there's a one-to-one correspondence
				// between a country phone code and a country code
				var all_types_required = country_codes.length > 1;

				if (!extended && !included_phone_number_types && !all_types_required) {
					delete countries[country_codes[0]].types;
					continue;
				}

				var _iteratorNormalCompletion6 = true;
				var _didIteratorError6 = false;
				var _iteratorError6 = undefined;

				try {
					var _loop2 = function _loop2() {
						var country_code = _step6.value;

						// Leading digits for a country are sufficient
						// to resolve country phone code ambiguity.
						// So retaining all phone number type regular expressions
						// is not required in this case.
						if (!extended && !included_phone_number_types) {
							if (countries[country_code].leading_digits) {
								delete countries[country_code].types;
								return 'continue';
							}
						}

						var types = countries[country_code].types;

						// Find duplicate regular expressions for types
						// and just discard such duplicate types
						// to reduce metadata size (by 5 KiloBytes).
						// Or retain regular expressions just for the
						// specified phone number types (if configured).
						var _iteratorNormalCompletion7 = true;
						var _didIteratorError7 = false;
						var _iteratorError7 = undefined;

						try {
							var _loop3 = function _loop3() {
								var type = _step7.value;

								if (!types[type]) {
									return 'continue';
								}

								// Retain regular expressions just for the
								// specified phone number types (if configured).
								if (included_phone_number_types) {
									if (!all_types_required && !included_phone_number_types.has(type)) {
										delete types[type];
									}
								}
								// Remove redundant types
								// (other types having the same regular expressions as this one)
								else {
										phone_number_types.filter(function (key) {
											return key !== type && types[key] === types[type];
										}).forEach(function (key) {
											return delete types[key];
										});
									}
							};

							for (var _iterator7 = (0, _getIterator3.default)(phone_number_types), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
								var _ret3 = _loop3();

								if (_ret3 === 'continue') continue;
							}
						} catch (err) {
							_didIteratorError7 = true;
							_iteratorError7 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion7 && _iterator7.return) {
									_iterator7.return();
								}
							} finally {
								if (_didIteratorError7) {
									throw _iteratorError7;
								}
							}
						}
					};

					for (var _iterator6 = (0, _getIterator3.default)(country_codes), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
						var _ret2 = _loop2();

						if (_ret2 === 'continue') continue;
					}
				} catch (err) {
					_didIteratorError6 = true;
					_iteratorError6 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion6 && _iterator6.return) {
							_iterator6.return();
						}
					} finally {
						if (_didIteratorError6) {
							throw _iteratorError6;
						}
					}
				}
			}
		} catch (err) {
			_didIteratorError4 = true;
			_iteratorError4 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion4 && _iterator4.return) {
					_iterator4.return();
				}
			} finally {
				if (_didIteratorError4) {
					throw _iteratorError4;
				}
			}
		}

		return { countries: countries, country_phone_code_to_countries: country_phone_code_to_countries };
	});
};

var _xml2js = require('xml2js');

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _AsYouType = require('../AsYouType');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var phone_number_types = ['premium_rate', 'toll_free', 'shared_cost', 'voip', 'personal_number', 'pager', 'uan', 'voice_mail', 'fixed_line', 'mobile'];

// Excessive fields from "PhoneNumberMetadata.xml"
// aren't included to reduce code complexity and size:
//
// * `<references>` — a link to ITU (International Telecommunication Union)
//                    document describing phone numbering plan for a country
//
// * `<noInternationalDialling>` — who needs to input non-internationally-dialable phones
//
// * `<areaCodeOptional>` — we aren't in the XXth century,
//                          it's a globalized world, so write your
//                          phone numbers with area codes.
//
// * `<fixedLine>`, `<mobile>`, `<pager>`,
//   `<tollFree>`, `<premiumRate>`,
//   `<sharedCost>`, `<personalNumber>`,
//   `<voip>`, `<uan>`, `<voicemail>` — who needs that in the XXIst century.
//                                      just go mobile and stop talking nonsense.
//
// * `internationalPrefix`,
//   `preferredInternationalPrefix` — who needs to parse (or format) those weird
//                                    "internationally dialed" phone numbers
//                                    like "011 ..." in the USA.
//                                    this isn't XXth century, just use mobile phones.
//
// * `preferredExtnPrefix` — screw phone number extensions
//
// * `leadingZeroPossible` — (aka "italian leading zero")
//                           who needs to parse a phone number into an integer.
//                           just keep it as a string.
//
// * `carrierCodeFormattingRule` — only used in Brazil and Colombia
//                                 when dialing from within those countries
//                                 from mobile phones to fixed line phone numbers.
//                                 i guess brazilians and colombians
//                                 already know when to add those carrier codes
//                                 by themselves (and when not to add them)
//
// * `mobileNumberPortableRegion` — is only used to disable phone number type detection
//
// * `<possibleLengths>` — is a redundant field to speed up testing of
//                         whether a phone number format can be used to format
//                         a particular national (significant) phone number.
//
// `libphonenumber/BuildMetadataFromXml.java` was used as a reference.
// https://github.com/googlei18n/libphonenumber/blob/master/tools/java/common/src/com/google/i18n/phonenumbers/BuildMetadataFromXml.java
//
// There are three Xml metadata files in Google's `libphonenumber`:
//
//  * PhoneNumberMetadata.xml — core data, used both for parse/format and "as you type"
//
//  * PhoneNumberAlternateFormats.xml — alternative phone number formats.
//                                      is presumably used for parsing phone numbers
//                                      written in "alternative" formats.
//                                      is not used by "as you type"
//                                      presumably because of formats ambiguity
//                                      when combined with the core data.
//                                      this metadata is not used in this library
//                                      as there's no clear description on what to do with it
//                                      and how it works in the original `libphonenumber` code.
//
//  * ShortNumberMetadata.xml — emergency numbers, etc. not used in this library.
//
// @returns
//
// {
// 	country_phone_code_to_countries:
// 	{
// 		'7': ['RU', 'KZ', ...],
// 		...
// 	},
// 	countries:
// 	{
// 		RU:
// 		{
// 			phone_code: "7",
// 			national_number_pattern: "[347-9]\\d{9}",
// 			national_prefix: "8",
// 			national_prefix_formatting_rule: "8 ($1)",
// 			national_prefix_is_optional_when_formatting: true,
// 			types:
// 			{
// 				fixed_line: "(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}",
// 				mobile: "9\\d{9}",
// 				...
// 			},
// 			examples:
// 			{
// 				fixed_line: '4955553535',
// 				mobile: '9991234567',
// 				...
// 			},
// 			formats:
// 			[{
// 				pattern: "([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})",
// 				leading_digits_patterns: ["[3489]"],
// 				format: "$1 $2-$3-$4"
// 			},
// 			...]
// 		},
// 		...
// 	}
// }
//
// `country_phone_code_to_countries` map is kinda redundant.
// Not sure why did I choose to place country phone codes
// into a separate structure inside metadata instead of generating it in runtime.
// One extra feature it gives though is it tells what's the
// "default" country for a given country phone code.
// E.g. for country phone code `1` the "default" country is "US"
// and therefore "US" is the first country code in the
// `country_phone_code_to_countries["1"]` list.
// The "default" country is the one holding metadata for a country phone code
// so, for example, when "CA" (Canada) country is chosen
// then it uses the metadata for the "default" country ("US").
//
// `country_phone_code_to_countries` data takes about 3 KiloBytes
// so it could kinda make sense to drop it from the metadata file
// replacing it with a "default" country flag (something like `1` for "yes").
// In that scenario `country_phone_code_to_countries` would be generated on startup.
// It would have to also provide an exported `getCountryPhoneCodes()` function
// which would take `metadata` and return `country_phone_code_to_countries` map
// because some people use that `country_phone_code_to_countries` map in their projects.
//
// On the other hand, having `country_phone_code_to_countries`
// prepopulated yields more elegance to the exports
// because if `country_phone_code_to_countries` wasn't part of metadata
// it would have to be computed somewhere in global scope
// therefore the modules wouldn't be strictly "pure"
// so maybe `country_phone_code_to_countries` stays as part of metadata.
//


// Replaces $NP with national prefix and $FG with the first group ($1)
function national_prefix_formatting_rule(rule, national_prefix) {
	if (!rule) {
		return;
	}

	// Replace $NP with national prefix and $FG with the first group ($1)
	return rule.replace('$NP', national_prefix).replace('$FG', '$1');
}

// Extracts various phone number type patterns from country XML metadata
function get_phone_number_types(territory) {
	return phone_number_types.reduce(function (output, type) {
		var camel_cased_type = underscore_to_camel_case(type);
		var pattern = territory[camel_cased_type] && territory[camel_cased_type][0].nationalNumberPattern[0].replace(/\s/g, '');

		if (pattern) {
			output[type] = pattern;
		}

		return output;
	}, {});
}

// Extracts various phone number type examples from country XML metadata
function get_phone_number_examples(territory) {
	return phone_number_types.reduce(function (output, type) {
		var camel_cased_type = underscore_to_camel_case(type);
		var example = territory[camel_cased_type] && territory[camel_cased_type][0].exampleNumber[0];

		if (example) {
			output[type] = example;
		}

		return output;
	}, {});
}

function underscore_to_camel_case(string) {
	return string.replace(/(\_\w)/g, function (match) {
		return match[1].toUpperCase();
	});
}
//# sourceMappingURL=generate.js.map