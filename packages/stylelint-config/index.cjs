module.exports = {
  reportNeedlessDisables: true,
  reportInvalidScopeDisables: true,
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-css-modules',
    require.resolve('./lib/prefix.json'),
    require.resolve('./lib/scss.cjs'),
    require.resolve('./lib/ignore.cjs'),
  ],
  plugins: ['stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'color-hex-length': null,
    'declaration-block-no-redundant-longhand-properties': true,
    'font-family-name-quotes': 'always-where-recommended',
    'function-url-quotes': 'always',
    'max-nesting-depth': 5,
    'number-max-precision': 4,
    'plugin/declaration-block-no-ignored-properties': true,
    'selector-max-compound-selectors': 5,
    'selector-max-universal': 1,
    'selector-no-qualifying-type': true,
    'shorthand-property-no-redundant-values': true,
    'time-min-milliseconds': 250,
    'font-family-no-missing-generic-family-keyword': [
      true,
      {
        ignoreFontFamilies: [
          /^icon-/,
          /^iconfont-/,
          /^icon-font-/,
          /^fonticon-/,
          /^font-icon-/,
        ],
      },
    ],
    'selector-pseudo-element-colon-notation': [
      'double',
      { severity: 'warning' },
    ],

    // ---- handle by prettier -------------
    'at-rule-name-space-after': null,
    'at-rule-semicolon-space-before': null,
    'comment-whitespace-inside': null,
    'declaration-bang-space-after': null,
    'declaration-bang-space-before': null,
    'function-whitespace-after': null,
    'media-feature-colon-space-after': null,
    'media-feature-colon-space-before': null,
    'media-feature-parentheses-space-inside': null,
    'media-feature-range-operator-space-after': null,
    'media-feature-range-operator-space-before': null,
    'selector-attribute-brackets-space-inside': null,
    'selector-attribute-operator-space-after': null,
    'selector-attribute-operator-space-before': null,
    'selector-pseudo-class-parentheses-space-inside': null,

    // ---- handle by garou -------------
    'comment-empty-line-before': null,
    'custom-property-empty-line-before': null,
    'declaration-empty-line-before': null,
  },
};
