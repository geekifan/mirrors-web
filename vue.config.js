const { defineConfig } = require('@vue/cli-service')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    i18n: {
      locale: 'zh',
      fallbackLocale: 'zh',
      localeDir: 'locales',
      enableInSFC: false,
      enableBridge: false
    },
    
  },
  configureWebpack: {
    plugins: [
      // Or: To strip all locales except “en”, “zh-cn”
      // (“en” is built into Moment and can’t be removed)
      new MomentLocalesPlugin({
          localesToKeep: ['zh-cn'],
      }),
  ],
  }
})
