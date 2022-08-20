const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false  //是否在开发环境下每次保存代码时都启用 eslint验证
})




// // 跨域配置代理服务器
// module.exports={
//   devServer:{
//     proxy: {
//       '/api': {
//         target: "",   //如果为空不填的话 项目启动会报错  Invalid URL  无效的网址
//         // target: process.env.VUE_APP_BASE_URL,   //配置完环境变量后  获取环境变量的格式  再结合启动命令 切换模式
//         changeOrigin: true,
//         pathRewrite: {   //路径重写
//           '^/api': ''
//         }
//       }
//     }
//   }
// }