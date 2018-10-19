const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [resolve("src/assets/styles/variables.styl")]
    });
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
      .include.add(resolve("src/assets/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .end()
      .use("svgo-loader")
      .loader("svgo-loader");

    ["vue-modules", "vue", "normal-modules", "normal"].forEach(type =>
      addStyleResource(config.module.rule("stylus").oneOf(type))
    );
  },

  configureWebpack: {
    devServer: {
      open: true
    }
  }
};
