import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginTs from '@typescript-eslint/eslint-plugin'
import parserTs from '@typescript-eslint/parser'

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        ecmaVersion: 2016,
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': pluginTs
    },
    rules: {}
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs'
    },
    plugins: {
      '@typescript-eslint': pluginTs
    },
    rules: {}
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }
    },
    ...pluginJs.configs.recommended
  }
]
