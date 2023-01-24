const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "smtsps",
    projectName: "sps-ui",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    watchOptions: {
      ignored: /node_modules/,
    },
  });
};
