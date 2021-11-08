"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

exports.count_occurences = count_occurences;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Counts all occurences of a symbol in a string
function count_occurences(symbol, string) {
	var count = 0;

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = (0, _getIterator3.default)(string), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var character = _step.value;

			if (character === symbol) {
				count++;
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

	return count;
}
//# sourceMappingURL=helpers.js.map