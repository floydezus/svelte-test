module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['import', 'node', 'security'],
  extends: ['standard'],
  rules: {
    'security/detect-possible-timing-attacks': 'error',
    'security/detect-eval-with-expression': 'error',
    'security/detect-non-literal-regexp': 'error',
    'security/detect-pseudoRandomBytes': 'error',
    'security/detect-buffer-noassert': 'error',
    'security/detect-unsafe-regex': 'error',
    'security/detect-new-buffer': 'error',

    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index']
        ],
        'newlines-between': 'always'
      }
    ],

    'prefer-promise-reject-errors': [
      'error',
      {
        allowEmptyReject: true,
      },
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'comma-dangle': ['off', 'only-multiline'],

    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-undef': 'error',
    'no-unused-expressions': 'error',
    'no-mixed-operators': 'error',
    'no-return-await': 'error',
    'camelcase': 'error',
    'no-return-assign': 'error',
    'no-control-regex': 'error',
    'nonblock-statement-body-position': 'error',
    'prefer-exponentiation-operator': 'error',
    'no-misleading-character-class': 'error',
    'prefer-arrow-callback': 'error',
    'no-this-before-super': 'error',
    'func-name-matching': 'error',
    'prefer-rest-params': 'error',
    'no-useless-return': 'error',
    'consistent-return': 'error',
    'multiline-ternary': ['error', 'never'],
    'no-nested-ternary': 'error',
    'constructor-super': 'error',
    'block-scoped-var': 'error',
    'object-shorthand': 'error',
    'no-setter-return': 'error',
    'getter-return': 'error',
    'no-invalid-this': 'error',
    'no-dupe-else-if': 'error',
    'require-yield': 'error',
    'no-new-symbol': 'error',
    'for-direction': 'error',
    'no-lonely-if': 'error',
    'no-shadow': 'error',
    'prefer-const': 'error',
    'no-tabs': 'error',
    'no-whitespace-before-property': 'off',
    'computed-property-spacing': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'array-bracket-spacing': 'off',
    'no-trailing-spaces': 'off',
    'space-infix-ops': 'off',
    'space-in-parens': 'off',
    'no-extra-parens': 'off',
    'space-unary-ops': 'off',
    'spaced-comment': 'off',
    'comma-spacing': 'off',
    'arrow-spacing': 'off',
    'brace-style': 'off',
    'quote-props': 'off',
    'max-len': 'off',
    'no-new': 'off',
    'semi': 'off'
  },
};
