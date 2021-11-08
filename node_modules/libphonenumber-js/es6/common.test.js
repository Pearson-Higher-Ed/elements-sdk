import chai, { expect } from 'chai';
chai.should();

import { matches_entirely } from '../source/common';

describe('common', function () {
	it('`matches_entirely` should work in edge cases', function () {
		// No text
		matches_entirely(undefined, /^$/).should.equal(true);
	});
});
//# sourceMappingURL=common.test.js.map