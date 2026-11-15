import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { configs as wdioConfigs } from 'eslint-plugin-wdio';
import prettier from 'eslint-config-prettier';

export default tseslint.config(
  { ignores: ['node_modules/', 'allure-results/', 'allure-report/', 'logs/'] },
  js.configs.recommended,
  {
    files: ['**/*.ts'],
    extends: [tseslint.configs.recommended],
    languageOptions: {
      parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname },
    },
  },
  { files: ['test/**/*.ts'], ...wdioConfigs['flat/recommended'] },
  { files: ['**/*.{js,mjs,ts}'], languageOptions: { globals: globals.node } },
  prettier,
);
