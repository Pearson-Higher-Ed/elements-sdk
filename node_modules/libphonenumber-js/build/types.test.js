'use strict';

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _metadata = require('../metadata.min');

var _metadata2 = _interopRequireDefault(_metadata);

var _types = require('../source/types');

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.should();

function get_number_type() {
	for (var _len = arguments.length, parameters = Array(_len), _key = 0; _key < _len; _key++) {
		parameters[_key] = arguments[_key];
	}

	parameters.push(_metadata2.default);
	return _types2.default.apply(this, parameters);
}

describe('get_number_type', function () {
	it('should infer phone number types', function () {
		get_number_type('88005553535', 'RU', _metadata2.default).should.equal('TOLL_FREE');
		get_number_type('8005553535', 'RU', _metadata2.default).should.equal('TOLL_FREE');
		get_number_type('4957777777', 'RU', _metadata2.default).should.equal('FIXED_LINE');
		get_number_type('9150000000', 'RU', _metadata2.default).should.equal('MOBILE');
		get_number_type('8030000000', 'RU', _metadata2.default).should.equal('PREMIUM_RATE');

		get_number_type('2133734253', 'US', _metadata2.default).should.equal('FIXED_LINE_OR_MOBILE');
		get_number_type('5002345678', 'US', _metadata2.default).should.equal('PERSONAL_NUMBER');
	});

	it('should return FIXED_LINE_OR_MOBILE when there is ambiguity', function () {
		// (no such country in the metadata, therefore no unit test for this `if`)
	});

	it('should work in edge cases', function () {
		// No arguments
		type(get_number_type(undefined)).should.equal('undefined');

		// No metadata
		var thrower = function thrower() {
			return get_number_type();
		};
		thrower.should.throw('Metadata');

		// Invalid phone number
		type(get_number_type('123', 'RU')).should.equal('undefined');

		// Numerical `value`
		get_number_type(89150000000, 'RU').should.equal('MOBILE');
	});
});

function type(something) {
	return typeof something === 'undefined' ? 'undefined' : (0, _typeof3.default)(something);
}
//# sourceMappingURL=types.test.js.map