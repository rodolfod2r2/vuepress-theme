'use strict';

var escapeTable = {
  '|': '\\|', // pipe
  '\\': '\\\\' // backslash itself
};

/**
 * Escape special characters for the text part
 * @param {string} text to escape
 * @returns {string}
 */
module.exports = function (text) {
  return text.split('').map(function (character) {
    return escapeTable[character] || character;
  }).join('');
};