module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  // eslint https://eslint.org/docs/rules/
  // prettier https://prettier.io/docs/en/options.html
  // "off": 0 "warn": 1 "error": 2
  rules: {
    semi: [2, "always"],
    "prettier/prettier": [
      "error",
      {
        singleQuote: false
      }
    ],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  }
};
