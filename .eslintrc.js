module.exports = {
    parserOptions: {
        'sourceType': 'module',
        'ecmaVersion': 2020,
        
    },
    env: {
        browser: true,
        node: true
    },
    rules: {
        "semi": "error",
        "indent": ["warn", 4]
    },
    extends: [
        'eslint:recommended'
    ]
};