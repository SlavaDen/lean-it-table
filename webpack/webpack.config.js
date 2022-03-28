const { merge } = require("webpack-merge");
const webpackCommon = require("./webpack.common");

module.exports = (envVars) => {
  const envConfig = require(`./webpack.${envVars.env}.js`);
  const webpackConfig = merge(webpackCommon, envConfig);

  return webpackConfig;
};
