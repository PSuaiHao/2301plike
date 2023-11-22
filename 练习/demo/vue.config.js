const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy:'http://adminv2.happymmall.com/manage',
    open:true
  }
})
