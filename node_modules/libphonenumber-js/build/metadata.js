'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.get_phone_code = get_phone_code;
exports.get_national_number_pattern = get_national_number_pattern;
exports.get_formats = get_formats;
exports.get_national_prefix = get_national_prefix;
exports.get_national_prefix_formatting_rule = get_national_prefix_formatting_rule;
exports.get_national_prefix_for_parsing = get_national_prefix_for_parsing;
exports.get_national_prefix_transform_rule = get_national_prefix_transform_rule;
exports.get_national_prefix_is_optional_when_formatting = get_national_prefix_is_optional_when_formatting;
exports.get_leading_digits = get_leading_digits;
exports.get_format_pattern = get_format_pattern;
exports.get_format_format = get_format_format;
exports.get_format_leading_digits_patterns = get_format_leading_digits_patterns;
exports.get_format_national_prefix_formatting_rule = get_format_national_prefix_formatting_rule;
exports.get_format_national_prefix_is_optional_when_formatting = get_format_national_prefix_is_optional_when_formatting;
exports.get_format_national_prefix_is_mandatory_when_formatting = get_format_national_prefix_is_mandatory_when_formatting;
exports.get_format_uses_national_prefix = get_format_uses_national_prefix;
exports.get_format_international_format = get_format_international_format;
exports.get_metadata_by_country_phone_code = get_metadata_by_country_phone_code;
exports.get_types = get_types;
exports.get_type_fixed_line = get_type_fixed_line;
exports.get_type_mobile = get_type_mobile;
exports.get_type_toll_free = get_type_toll_free;
exports.get_type_premium_rate = get_type_premium_rate;
exports.get_type_personal_number = get_type_personal_number;
exports.get_type_voice_mail = get_type_voice_mail;
exports.get_type_uan = get_type_uan;
exports.get_type_pager = get_type_pager;
exports.get_type_voip = get_type_voip;
exports.get_type_shared_cost = get_type_shared_cost;
exports.get_country_phone_code = get_country_phone_code;
function get_phone_code(country_metadata) {
	return country_metadata[0];
}

function get_national_number_pattern(country_metadata) {
	return country_metadata[1];
}

function get_formats(country_metadata) {
	return country_metadata[2] || [];
}

function get_national_prefix(country_metadata) {
	return country_metadata[3];
}

function get_national_prefix_formatting_rule(country_metadata) {
	return country_metadata[4];
}

function get_national_prefix_for_parsing(country_metadata) {
	var national_prefix_for_parsing = country_metadata[5];

	// If `national_prefix_for_parsing` is not set explicitly,
	// then infer it from `national_prefix` (if any)
	if (!national_prefix_for_parsing) {
		national_prefix_for_parsing = get_national_prefix(country_metadata);
	}

	return national_prefix_for_parsing;
}

function get_national_prefix_transform_rule(country_metadata) {
	return country_metadata[6];
}

function get_national_prefix_is_optional_when_formatting(country_metadata) {
	return country_metadata[7];
}

function get_leading_digits(country_metadata) {
	return country_metadata[8];
}

function get_format_pattern(format_array) {
	return format_array[0];
}

function get_format_format(format_array) {
	return format_array[1];
}

function get_format_leading_digits_patterns(format_array) {
	return format_array[2] || [];
}

function get_format_national_prefix_formatting_rule(format_array, country_metadata) {
	return format_array[3] || get_national_prefix_formatting_rule(country_metadata);
}

function get_format_national_prefix_is_optional_when_formatting(format_array, country_metadata) {
	return format_array[4] || get_national_prefix_is_optional_when_formatting(country_metadata);
}

function get_format_national_prefix_is_mandatory_when_formatting(format_array, country_metadata) {
	var national_prefix_formatting_rule = get_format_national_prefix_formatting_rule(format_array, country_metadata);

	// National prefix is omitted if there's no national prefix formatting rule
	// set for this country, or when the national prefix formatting rule
	// contains no national prefix itself, or when this rule is set but
	// national prefix is optional for this phone number format
	// (and it is not enforced explicitly)
	return national_prefix_formatting_rule &&
	// Check that national prefix formatting rule is not a dummy one.
	// Check that national prefix formatting rule actually has national prefix digit(s).
	get_format_uses_national_prefix(national_prefix_formatting_rule) &&
	// Or maybe national prefix is optional for this format
	!get_format_national_prefix_is_optional_when_formatting(format_array, country_metadata);
}

// Checks whether national prefix formatting rule contains national prefix
function get_format_uses_national_prefix(national_prefix_formatting_rule) {
	// Check that national prefix formatting rule is not a dummy one
	return national_prefix_formatting_rule !== '$1' &&
	// Check that national prefix formatting rule actually has national prefix digit(s)
	/\d/.test(national_prefix_formatting_rule.replace('$1', ''));
}

function get_format_international_format(format_array) {
	return format_array[5] || get_format_format(format_array);
}

// Formatting information for regions which share
// a country calling code is contained by only one region
// for performance reasons. For example, for NANPA region
// ("North American Numbering Plan Administration",
//  which includes USA, Canada, Cayman Islands, Bahamas, etc)
// it will be contained in the metadata for `US`.
function get_metadata_by_country_phone_code(country_phone_code, metadata) {
	var country_code = metadata.country_phone_code_to_countries[country_phone_code][0];
	return metadata.countries[country_code];
}

function get_types(country_metadata) {
	return country_metadata[9];
}

function get_type(country_metadata, index) {
	return get_types(country_metadata) ? get_types(country_metadata)[index] : undefined;
}

function get_type_fixed_line(country_metadata) {
	return get_type(country_metadata, 0);
}

function get_type_mobile(country_metadata) {
	return get_type(country_metadata, 1);
}

function get_type_toll_free(country_metadata) {
	return get_type(country_metadata, 2);
}

function get_type_premium_rate(country_metadata) {
	return get_type(country_metadata, 3);
}

function get_type_personal_number(country_metadata) {
	return get_type(country_metadata, 4);
}

function get_type_voice_mail(country_metadata) {
	return get_type(country_metadata, 5);
}

function get_type_uan(country_metadata) {
	return get_type(country_metadata, 6);
}

function get_type_pager(country_metadata) {
	return get_type(country_metadata, 7);
}

function get_type_voip(country_metadata) {
	return get_type(country_metadata, 8);
}

function get_type_shared_cost(country_metadata) {
	return get_type(country_metadata, 9);
}

function get_country_phone_code(country, country_metadata) {
	return get_phone_code(country_metadata[country]);
}
//# sourceMappingURL=metadata.js.map