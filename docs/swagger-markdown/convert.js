'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var SwaggerParser = require('swagger-parser');
var fs = require('fs');
var markdownlint = require('markdownlint');
var markdownlintRuleHelpers = require('markdownlint-rule-helpers');

var transformInfo = require('./transformers/info');
var transformPath = require('./transformers/path');
var transformSecurityDefinitions = require('./transformers/securityDefinitions');
var transformExternalDocs = require('./transformers/externalDocs');
var transformDefinition = require('./transformers/definitions');
var markdownlintConfig = require('./.markdownlint.json');

// replace all $refs except model definitions as these have their own section in the doc
function partiallyDereference(node, $refs) {
  if ((typeof node === 'undefined' ? 'undefined' : _typeof(node)) !== 'object') return node;
  var obj = {};
  // Issue related to babel (I beleive) as it won't build it when just spreading
  // eslint-disable-next-line prefer-object-spread
  var nodeAsObject = Object.assign({}, node);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.entries(nodeAsObject)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref = _step.value;

      var _ref2 = _slicedToArray(_ref, 2);

      var key = _ref2[0];
      var value = _ref2[1];

      if (Array.isArray(value)) {
        obj[key] = value.map(function (item) {
          return partiallyDereference(item, $refs);
        });
      } else if (key === '$ref' && !value.startsWith('#/definitions/')) {
        return partiallyDereference($refs.get(value), $refs);
      } else {
        obj[key] = partiallyDereference(value, $refs);
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

  return obj;
}

function transformSwagger(inputDoc) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var document = [];

  // Collect parameters
  var parameters = 'parameters' in inputDoc ? inputDoc.parameters : {};

  // Process info
  if (!options.skipInfo && 'info' in inputDoc) {
    document.push(transformInfo(inputDoc.info));
  }

  if ('externalDocs' in inputDoc) {
    document.push(transformExternalDocs(inputDoc.externalDocs));
  }

  // Security definitions
  if ('securityDefinitions' in inputDoc) {
    document.push(transformSecurityDefinitions(inputDoc.securityDefinitions));
  } else if (inputDoc.components && inputDoc.components.securitySchemas) {
    document.push(transformSecurityDefinitions(inputDoc.components.securityDefinitions));
  }

  // Process Paths
  if ('paths' in inputDoc) {
    Object.keys(inputDoc.paths).forEach(function (path) {
      return document.push(transformPath(path, inputDoc.paths[path], parameters));
    });
  }

  // Models (definitions)
  if ('definitions' in inputDoc) {
    document.push(transformDefinition(inputDoc.definitions));
  } else if (inputDoc.components && inputDoc.components.schemas) {
    document.push(transformDefinition(inputDoc.components.schemas));
  }

  // Glue all pieces down
  var plainDocument = document.join('\n');

  // Fix markdown issues
  var fixOptions = {
    resultVersion: 3,
    strings: { plainDocument: plainDocument },
    config: markdownlintConfig
  };
  var fixResults = markdownlint.sync(fixOptions);
  var fixes = fixResults.plainDocument.filter(function (error) {
    return error.fixInfo;
  });
  if (fixes.length > 0) {
    return markdownlintRuleHelpers.applyFixes(plainDocument, fixes);
  }

  return plainDocument;
}

function transformFile(options) {
  var swaggerParser = new SwaggerParser();
  return swaggerParser.resolve(options.input).then(function () {
    var dereferencedSwagger = partiallyDereference(swaggerParser.api, swaggerParser.$refs);
    var markdown = transformSwagger(dereferencedSwagger, options);

    if (options.output) {
      fs.writeFileSync(options.output, markdown);
    }

    return markdown;
  });
}

module.exports = {
  transformFile: transformFile,
  transformSwagger: transformSwagger,
  partiallyDereference: partiallyDereference
};
