'use strict';

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _metadata = require('../metadata.min');

var _metadata2 = _interopRequireDefault(_metadata);

var _metadata3 = require('../source/metadata');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.should();

describe('metadata', function () {
	it('should return undefined for non-defined types', function () {
		type((0, _metadata3.get_type_fixed_line)(_metadata2.default.countries.FR)).should.equal('undefined');
	});

	it('should get country phone code', function () {
		(0, _metadata3.get_country_phone_code)('RU', _metadata2.default.countries).should.equal('7');
	});
});

function type(something) {
	return typeof something === 'undefined' ? 'undefined' : (0, _typeof3.default)(something);
}
//# sourceMappingURL=metadata.test.js.map