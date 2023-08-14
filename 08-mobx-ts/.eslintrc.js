module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['mobx'],
    extends: ['plugin:mobx/recomended', 'react-app', 'react-app/jest'],
    rules: {
        'mobx/missing-observer': 'off',
    },
};
