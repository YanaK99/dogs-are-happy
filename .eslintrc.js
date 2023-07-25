module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    parserOptions: {
        parser: "@babel/eslint-parser",
        requireConfigFile: false,
        ecmaVersion: 2020,
        sourceType: "module",
    },
    extends: [
        "eslint-config-airbnb",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
        },
    ],

    plugins: ["react", "react-hooks", "jsx-a11y", "import"],
    rules: {
        "react/jsx-no-constructed-context-values": "off",
        "react/function-component-definition": "off",
        "arrow-body-style": "off",
        "react/jsx-no-useless-fragment": "off",
        "linebreak-style": "off",
        "consistent-return": "off",
        "operator-linebreak": "off",
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
