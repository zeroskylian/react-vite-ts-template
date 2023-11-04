import globals from 'globals';

import eslint from '@eslint/js';
// config
import configPrettier from 'eslint-config-prettier';

// plugin
import pluginTs from  '@typescript-eslint/eslint-plugin'
import pluginImport from 'eslint-plugin-import';
import pluginjsxa11y from 'eslint-plugin-jsx-a11y';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import pluginReactHook from 'eslint-plugin-react-hooks';
import pluginReactRefresh from "eslint-plugin-react-refresh";

// parser
import parserInstance from '@typescript-eslint/parser';
export default [
  {
    ignores: ['node_modules/**', 'dist/**', '.prettierrc.js', 'env.d.ts'],
    languageOptions: {
      // parser: '@typescript-eslint/parser',
      parser: parserInstance,
      /*
      env: {
        browser: true,
        es2021: true,
        node: true
      }
       */
      globals: {
        ...globals.commonjs,
        ...globals.browser,
        ...globals.es2021,
        ...globals.node
      },
      // parserOptions
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    // plugins: ['react', '@typescript-eslint', 'prettier']
    plugins: {
      prettier: pluginPrettier,
      react: pluginReact,
      '@typescript-eslint': pluginTs
    },
    // extends需要写在rules 中
    rules: {
      // extends: 'eslint:recommended',
      ...eslint.configs.recommended,
      // extends: eslint-config-prettier
      ...configPrettier.rules,
      // extends: plugin:@typescript-eslint/recommended'
      ...pluginTs.configs.recommended.rules,
      // extends: plugin:import/recommended
      ...pluginImport.configs.recommended.rules,
      // extends: plugin:jsx-a11y/recommended
      ...pluginjsxa11y.configs.recommended.rules,
      // extends: plugin:prettier/recommended
      ...pluginPrettier.configs.recommended.rules,
      // extends: 'plugin:react/recommended'
      ...pluginReact.configs.recommended.rules,
      // eslint-plugin-react-hooks
      ...pluginReactHook.configs.recommended.rules,
      // eslint-plugin-react-refresh
      ...pluginReactRefresh.configs.recommended.rules,
      // plugin:react/jsx-runtime
      ...reactPlugin.configs['jsx-runtime'].rules,

      // 自定义规则
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          parser: 'typescript',
          semi: true
        }
      ],
      quotes: ['error', 'double'],
      semi: [1, 'always'],
      'no-extra-semi': 1,
      'react/jsx-no-target-blank': 0,
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error'
    },
    settings: {
      react: {
        version: 'detect'
      },
      'import/resolver': {
        node: {
          paths: ['src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        },
        alias: {
          map: [['@', './src']]
        }
      }
    }
  }
];
