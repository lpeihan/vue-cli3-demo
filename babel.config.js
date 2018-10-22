module.exports = {
  presets: ["@vue/app"],
  plugins: [
    // https://github.com/ElementUI/babel-plugin-component/issues/30
    // mint-ui 按需加载
    [
      "component",
      {
        libraryName: "mint-ui",
        style: true
      }
    ]
  ]
};
