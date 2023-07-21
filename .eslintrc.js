module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        "react/no-children-prop": "off",
        "react/no-unknown-property": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off",
        "react/jsx-props-no-spreading": "off",
        "unicorn/consistent-function-scoping": "off",
        "react/jsx-indent-props": "off",
        "import/prefer-default-export": "off",
        "react/jsx-filename-extension": "off",
        camelcase: "off",
        "comma-dangle": "off",
        "react/prop-types": "off",
        "react/jsx-one-expression-per-line": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        indent: "off",
        "unicorn/filename-case": "off",
        "multiline-ternary": "off",
        "react/jsx-indent": "off",
        "space-before-function-paren": "off",
        quotes: ["error", "double"],
        "react/react-in-jsx-scope": "off",
        semi: ["error", "always"],
    },
};
