const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  baseUrl: "",
  outputDir: "dist",

  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));

    config.module.rules.delete("svg");
    config.module
      .rule("svg")
      .test(/\.svg$/)
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader");
  }
};
