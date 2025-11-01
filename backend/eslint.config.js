import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import globals from "globals";

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
    files: ['src/**/*.ts'],
    plugins: { eslint },
    languageOptions: { globals: globals.node },
  }
];
