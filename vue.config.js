const path = require('path');

module.exports = {
  devServer: {
    // before: configureAPI
    port: 8000,
    proxy: 'http://localhost:3000',
  },
  //本番用ビルドファイルの出力先
  outputDir: './client/dist',
  configureWebpack: (config) => {
    config.entry =  {
      app: path.resolve(__dirname, './client/src/main.ts'),
    };
    config.resolve.alias = {
      '@': path.resolve(__dirname, './client/src/'),
    }
    config.devtool = 'source-map';
  },
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap( args => {
        args[0].template = path.resolve(__dirname, './client/public/index.html');
        return args;
      })
  }
}