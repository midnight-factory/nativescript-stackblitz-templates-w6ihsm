const webpack = require('@nativescript/webpack');

module.exports = (env) => {
  webpack.init(env);

  // Learn how to customize:
  // https://docs.nativescript.org/webpack
  //   webpack.chainWebpack((config, env) => {
  //     config.resolve.set('fallback', {
  //       https: require.resolve('https-browserify'),
  //       'stream-http': require.resolve('stream-http'),
  //       stream: require.resolve('stream-browserify'),
  //       http: require.resolve('stream-http'),
  //       url: require.resolve('url'),
  //       crypto: require.resolve('crypto-browserify'),
  //       assert: require.resolve('assert'),
  //       fs: false,
  //       net: false,
  //       tls: false,
  //       child_process: false,
  //       util: require.resolve('util/'),
  //     });
  //   });

  return webpack.resolveConfig();
};
