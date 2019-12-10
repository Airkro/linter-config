'use strict';

module.exports = {
  htmlWhitespaceSensitivity: 'ignore',
  overrides: [
    {
      files: ['.babelrc', '*.json'],
      options: {
        parser: 'json-stringify'
      }
    },
    {
      files: ['*.tpl', '*.xml', '*.svg'],
      options: {
        parser: 'html'
      }
    }
  ]
};