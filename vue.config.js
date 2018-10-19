const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [
        resolve("src/assets/styles/variables.styl"),
        resolve("src/assets/styles/mixins.styl")
      ]
    });
}

module.exports = {
  baseUrl: "",
  outputDir: "dist",

  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
    config.resolve.alias.set("styles", resolve("src/assets/styles"));

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

    if (process.env.npm_config_report) {
      config
        .plugin("webpack-bundle-analyzer")
        .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
    }
  },

  configureWebpack: {
    devServer: {
      open: true
    }
  }
};
