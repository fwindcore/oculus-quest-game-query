module.exports = {
  publicPath: '/oculus-quest-store-list/',
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Oculus Quest 游戏查询'
      return args
    })
  },
}
