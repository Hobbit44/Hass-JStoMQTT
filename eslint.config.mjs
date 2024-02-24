// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import jest from "eslint-plugin-jest";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: [
      "src/**/*.ts",
    ],
    ignores: [ "src/**/*.test.ts" ],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "comma-dangle": ["error", "always-multiline"],
      quotes: ["error", "double"],
    },
  },
  {
    files: [
      "src/**/*.test.ts",
    ],
    ...jest.configs['flat/recommended'],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);
