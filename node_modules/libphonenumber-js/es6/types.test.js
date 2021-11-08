import _typeof from 'babel-runtime/helpers/typeof';
import chai, { expect } from 'chai';
chai.should();

import metadata from '../metadata.min';
import get_number_type_custom from '../source/types';

function get_number_type() {
	for (var _len = arguments.length, parameters = Array(_len), _key = 0; _key < _len; _key++) {
		parameters[_key] = arguments[_key];
	}

	parameters.push(metadata);
	return get_number_type_custom.apply(this, parameters);
}

describe('get_number_type', function () {
	it('should infer phone number types', function () {
		get_number_type('88005553535', 'RU', metadata).should.equal('TOLL_FREE');
		get_number_type('8005553535', 'RU', metadata).should.equal('TOLL_FREE');
		get_number_type('4957777777', 'RU', metadata).should.equal('FIXED_LINE');
		get_number_type('9150000000', 'RU', metadata).should.equal('MOBILE');
		get_number_type('8030000000', 'RU', metadata).should.equal('PREMIUM_RATE');

		get_number_type('2133734253', 'US', metadata).should.equal('FIXED_LINE_OR_MOBILE');
		get_number_type('5002345678', 'US', metadata).should.equal('PERSONAL_NUMBER');
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
	return typeof something === 'undefined' ? 'undefined' : _typeof(something);
}
//# sourceMappingURL=types.test.js.map