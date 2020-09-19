module.exports = function override(config, env) {
  //do stuff with the webpack config...
//   console.log(config);
  const conf = {
    optimization: {
      splitChunks: {
        cacheGroups: {
          // 其次: 打包业务中公共代码
          common: {
            name: "common",
            chunks: "all",
            minSize: 1,
            priority: 0,
          },
          // 首先: 打包node_modules中的文件
          vender: {
            name: "vendor",
            test: /[\\/]node_modules[\\/]/,
            chunks: "all",
            priority: 10,
          },
        },
      },
    },
  };
  return Object.assign(config,conf );
};
