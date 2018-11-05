module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  // 具体文档请看 https://eslint.org/docs/rules/ "off": 0 "warn": 1 "error": 2
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
