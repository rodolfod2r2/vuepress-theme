'use strict';

var typeResolver = {
  basic: 'Basic',
  apiKey: 'API Key',
  oauth2: 'OAuth 2.0'
};
var nameResolver = {
  description: 'Description',
  name: 'Name',
  in: 'In',
  flow: 'Flow',
  authorizationUrl: 'Authorization URL',
  tokenUrl: 'Token URL'
};

module.exports = function (securityDefinitions) {
  // Base block
  var res = [];
  Object.keys(securityDefinitions).forEach(function (type) {
    res.push('**' + type + '**  \n');
    res.push('|' + securityDefinitions[type].type + '|*' + typeResolver[securityDefinitions[type].type] + '*|');
    res.push('|---|---|');
    Object.keys(securityDefinitions[type]).forEach(function (value) {
      if (value === 'scopes') {
        res.push('|**Scopes**||');
        Object.keys(securityDefinitions[type][value]).forEach(function (scope) {
          res.push('|' + scope + '|' + (securityDefinitions[type][value][scope].replace(/[\r\n]/g, ' ') + '|'));
        });
        return;
      }
      if (value !== 'type' && securityDefinitions[type][value].replace) {
        var key = nameResolver[value];
        if (key === undefined) {
          if (!value.match(/^x-/i)) {
            return;
          }
          key = value;
        }
        res.push('|' + key + '|' + securityDefinitions[type][value].replace(/[\r\n]/g, ' ') + '|');
      }
    });
    res.push('');
  });

  // Create header
  // Only in case if there is any data
  if (res.length > 0) {
    res.unshift('### Security');
  }

  return res.length ? res.join('\n') : null;
};
module.exports.nameResolver = nameResolver;
module.exports.typeResolver = typeResolver;