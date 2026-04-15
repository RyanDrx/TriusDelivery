import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import astroPlugin from 'eslint-plugin-astro';

export default [
    // Base JS rules
    eslint.configs.recommended,

    // TypeScript rules
    ...tseslint.configs.recommended,

    // Astro rules
    ...astroPlugin.configs.recommended,

    // Global ignores
    {
        ignores: ['dist/**', 'node_modules/**', '.astro/**', 'public/**', 'studio/**']
    },

    // JavaScript data files - allow Node globals
    {
        files: ['src/data/**/*.js'],
        languageOptions: {
            globals: {
                console: 'readonly',
                process: 'readonly',
                __dirname: 'readonly',
                __filename: 'readonly'
            }
        }
    },

    // TypeScript file overrides
    {
        files: ['**/*.ts', '**/*.tsx'],
        rules: {
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
            '@typescript-eslint/no-empty-object-type': 'off'
        }
    },

    // Astro file overrides (including inline <script> blocks)
    {
        files: ['**/*.astro', '**/*.astro/*.ts', '**/*.astro/*.js'],
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
            '@typescript-eslint/no-empty-object-type': 'off'
        }
    },

    // Config files (JS/CJS)
    {
        files: ['*.config.js', '*.config.ts', 'tailwind.config.js', 'stackbit.config.ts'],
        rules: {
            '@typescript-eslint/no-require-imports': 'off'
        }
    }
];
