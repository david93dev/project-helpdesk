// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // ignore global
  globalIgnores(['dist']),

  {
    files: ['**/*.{js,jsx}'],

    // herda regras base
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      // já inclui react-refresh/only-export-components
      reactRefresh.configs.vite,
    ],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },

    rules: {
      // seu ajuste
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

      // sobrescreve a regra do Fast Refresh para aceitar constantes
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
])
