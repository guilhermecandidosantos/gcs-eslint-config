import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
];

export default [
  ...eslintConfig,
  eslintPluginPrettierRecommended,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
          singleQuote: true,
          tabWidth: 2,
          jsxSingleQuote: true,
          arrowParens: 'always',
          bracketSpacing: true,
          printWidth: 80,
          proseWrap: 'always',
        },
      ],
      'import/no-anonymous-default-export': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'prefer-arrow-callback': 'off',
      'arrow-body-style': 'off',
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
];
