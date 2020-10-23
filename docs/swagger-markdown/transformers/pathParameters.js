'use strict';

var transformDataTypes = require('./dataTypes');
var Schema = require('../models/schema');
var textEscape = require('../lib/textEscape');

module.exports = function (parameters, pathParameters) {
  var res = [];
  res.push('##### Parameters\n');
  res.push('| Name | Located in | Description | Required | Schema |');
  res.push('| ---- | ---------- | ----------- | -------- | ---- |');
  [].concat(pathParameters, parameters).forEach(function (keys) {
    if (keys) {
      var line = [];
      // Name first
      line.push(keys.name || '');
      // Scope (in)
      line.push(keys.in || '');
      // description
      if ('description' in keys) {
        line.push(textEscape(keys.description.replace(/[\r\n]/g, ' ')));
      } else {
        line.push('');
      }
      line.push(keys.required ? 'Yes' : 'No');

      // Prepare schema to be transformed
      var schema = null;
      if ('schema' in keys) {
        schema = new Schema(keys.schema);
      } else {
        schema = new Schema();
        schema.setType('type' in keys ? keys.type : null);
        schema.setFormat('format' in keys ? keys.format : null);
        schema.setReference('$ref' in keys ? keys.$ref : null);
        schema.setItems('items' in keys ? keys.items : null);
      }

      line.push(transformDataTypes(schema));
      // Add spaces and glue using pipeline
      var glued = line.map(function (el) {
        return ' ' + el + ' ';
      }).join('|');
      res.push('|' + glued + '|');
    }
  });
  return res.join('\n');
};