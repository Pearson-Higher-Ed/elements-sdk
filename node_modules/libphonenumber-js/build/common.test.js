'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _common = require('../source/common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.should();

describe('common', function () {
	it('`matches_entirely` should work in edge cases', function () {
		// No text
		(0, _common.matches_entirely)(undefined, /^$/).should.equal(true);
	});
});
//# sourceMappingURL=common.test.js.map