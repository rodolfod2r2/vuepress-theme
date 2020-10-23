'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var Schema = require('../models/schema');
var transformDataTypes = require('./dataTypes');
var textEscape = require('../lib/textEscape');

/**
 * Build responses table
 * @param {object} responses
 * @returns {null|string}
 */
module.exports = function (responses) {
  var res = [];
  // Check if schema somewhere
  var schemas = Object.keys(responses).reduce(function (acc, response) {
    return acc || 'schema' in responses[response];
  }, false);
  Object.keys(responses).forEach(function (responseCode) {
    var line = [];
    var response = responses[responseCode];
    // Response
    line.push(responseCode);

    // Description
    var description = '';
    if ('description' in response) {
      description += textEscape(response.description.replace(/[\r\n]/g, ' '));
    }
    if ('examples' in response) {
      description += Object.entries(response.examples).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            contentType = _ref2[0],
            example = _ref2[1];

        var formattedExample = typeof example === 'string' ? example : JSON.stringify(example, null, '  ');

        formattedExample = formattedExample.replace(/\r?\n/g, '<br>');

        return '<br><br>**Example** (*' + contentType + '*):<br><pre>' + formattedExample + '</pre>';
      }).join('');
    }
    line.push(description);
    // Schema
    if ('schema' in response) {
      var schema = new Schema(response.schema);
      line.push(transformDataTypes(schema));
    } else if (schemas) {
      line.push('');
    }
    // Combine all together
    res.push('|' + line.map(function (el) {
      return ' ' + el + ' ';
    }).join('|') + '|');
  });
  res.unshift('| ---- | ----------- |' + (schemas ? ' ------ |' : ''));
  res.unshift('| Code | Description |' + (schemas ? ' Schema |' : ''));
  res.unshift('##### Responses\n');

  return res.join('\n');
};