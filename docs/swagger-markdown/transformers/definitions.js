'use strict';

var dataTypeTransformer = require('./dataTypes');
var inArray = require('../lib/inArray');
var Schema = require('../models/schema');
var textEscape = require('../lib/textEscape');

/**
 * If Property field is present parse them.
 * @param name of the definition
 * @param definition definition object
 */
var parseProperties = function parseProperties(name, definition) {
  var required = 'required' in definition ? definition.required : [];
  var res = [];
  Object.keys(definition.properties).forEach(function (propName) {
    var prop = definition.properties[propName];
    var typeCell = dataTypeTransformer(new Schema(prop));
    var descriptionParts = [];
    if ('description' in prop) {
      descriptionParts.push(textEscape(prop.description.replace(/[\r\n]/g, ' ')));
    }
    if ('enum' in prop) {
      var enumValues = prop.enum.map(function (val) {
        return '`' + JSON.stringify(val) + '`';
      }).join(', ');
      descriptionParts.push('_Enum:_ ' + enumValues);
    }
    if ('example' in prop) {
      descriptionParts.push('_Example:_ `' + JSON.stringify(prop.example) + '`');
    }
    var descriptionCell = descriptionParts.join('<br>');
    var requiredCell = inArray(propName, required) ? 'Yes' : 'No';
    res.push('| ' + propName + ' | ' + typeCell + ' | ' + descriptionCell + ' | ' + requiredCell + ' |');
  });
  return res;
};

/**
 * Parse allOf definition
 * @param name of the definition
 * @param definition definition object
 */
var parsePrimitive = function parsePrimitive(name, definition) {
  var res = [];
  var typeCell = 'type' in definition ? definition.type : '';
  var descriptionCell = ('description' in definition ? definition.description : '').replace(/[\r\n]/g, ' ');
  var requiredCell = '';
  res.push('| ' + name + ' | ' + typeCell + ' | ' + descriptionCell + ' | ' + requiredCell + ' |');
  return res;
};

/**
 * @param {type} name
 * @param {type} definition
 * @return {type} Description
 */
var processDefinition = function processDefinition(name, definition) {
  var res = [];
  var parsedDef = [];
  res.push('');
  res.push('#### ' + name);
  res.push('');
  if (definition.description) {
    res.push(definition.description);
    res.push('');
  }
  res.push('| Name | Type | Description | Required |');
  res.push('| ---- | ---- | ----------- | -------- |');

  if ('properties' in definition) {
    parsedDef = parseProperties(name, definition);
  } else {
    parsedDef = parsePrimitive(name, definition);
  }
  res = res.concat(parsedDef);

  if (definition.example) {
    var formattedExample = typeof definition.example === 'string' ? definition.example : JSON.stringify(definition.example, null, '  ');
    res.push('');
    res.push('**Example**');
    res.push('<pre>' + formattedExample + '</pre>');
  }

  return res.length ? res.join('\n') : null;
};
module.exports.processDefinition = processDefinition;

/**
 * @param {type} definitions
 * @return {type} Description
 */
module.exports = function (definitions) {
  var res = [];
  Object.keys(definitions).map(function (definitionName) {
    return res.push(processDefinition(definitionName, definitions[definitionName]));
  });
  if (res.length > 0) {
    res.unshift('### Models\n');
    return res.join('\n');
  }
  return null;
};