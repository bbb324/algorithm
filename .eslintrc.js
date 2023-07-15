module.exports = {
    parserOptions: {
        'sourceType': 'module',
        'ecmaVersion': 2020
        
    },
    env: {
        "es6": true,
        browser: true,
        node: true
    },
    rules: {
        "semi": "error",
        "indent": ["warn", 4],
        "eqeqeq": [2, "allow-null"],
        "comma-dangle": [2, "never"]
    },
    extends: [
        'eslint:recommended'
    ]
};