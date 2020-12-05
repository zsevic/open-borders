module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        jquery: true,
    },
    "extends": [
        "airbnb-base"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        'import/prefer-default-export': 'warn',
        'no-console': 'warn',
        'no-param-reassign': 'warn',
        'no-restricted-syntax': 'warn',
    }
};
