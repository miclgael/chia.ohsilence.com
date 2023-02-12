module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'extends': [
        'plugin:vue/base',
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-strongly-recommended',
        'plugin:vue/vue3-recommended'
    ],
    'overrides': [
    ],
    'parser': 'vue-eslint-parser',
    'parserOptions': {
        'parser': '@typescript-eslint/parser',
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'vue',
        '@typescript-eslint'
    ],
    'rules': {
        'quotes': ['error', 'single'],
        'no-extra-semi': 'error',
        'no-console': 'warn',
        'no-debugger': 'warn',
        'no-var': 'error',
        'no-unused-vars': 'off',
        'no-constant-condition': 'warn',
        'no-empty': 'warn',
        'comma-dangle': ['error', 'never'],
        'no-undef': 'off',
        'vue/multi-word-component-names': ['error', {
            'ignores': [
                'index', 'default', 'home', 'about', 'contact', 'login', 'register', 'profile', 'error', '[id]', '[slug]'
            ]
        }],
        '@typescript-eslint/no-unused-vars': [
            'warn', // or "error"
            {
                'argsIgnorePattern': '^_',
                'varsIgnorePattern': '^_',
                'caughtErrorsIgnorePattern': '^_'
            }
        ]
    }
}
