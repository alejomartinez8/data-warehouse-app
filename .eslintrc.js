module.exports = {
  root: true, // Make sure eslint picks up the config at the root of the directory
  env: {
    browser: true, // Enables browser globals like window and document
    es2021: true,
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the react version
    },
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens',
        assignment: 'parens',
        return: 'parens',
        arrow: 'parens',
        condition: 'ignore',
        logical: 'ignore',
        prop: 'ignore',
      },
    ],
    '@typescript-eslint/no-var-requires': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    'no-confusing-arrow': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/jsx-indent': 'off',
    'function-paren-newline': 'off',
    'no-useless-escape': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
