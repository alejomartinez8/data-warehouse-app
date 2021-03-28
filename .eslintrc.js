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
  },
  globals: {
    React: 'writable',
  },
};
