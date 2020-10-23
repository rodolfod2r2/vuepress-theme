'use strict';

/**
 * Make camel case format
*/
module.exports = function (input) {
  return input.replace(/\s+/g, '-').replace(/^-*/ig, '').replace(/-*$/ig, '').replace(/\./g, '').toLowerCase();
};