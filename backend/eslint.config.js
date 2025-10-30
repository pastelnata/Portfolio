import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import globals from "globals";
import js from "@eslint/js";
// Place ignores in a standalone config object so ESLint skips these paths early
export default [
  {
    ignores: [
      'dist/**',
      '**/dist/**',
      '**/tests/*',
      'tsconfig.json',
      '**/node_modules/**',
      '**/prisma/migrations/**',
      '**/prisma/generated/**'
    ]
  },
  eslint.configs.recommended,
    ...tseslint.configs.recommended,
  {
    // Only target TypeScript source files under src
    files: ['src/**/*.ts'],
    plugins: { js },
    languageOptions: { globals: globals.browser },
  }
];
