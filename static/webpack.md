1.多个JS文件不合并打包
const path = require("path");
module.exports = {
  mode: "development", // 打包为开发模式
  // 入口配置的对象中，属性为输出的JS文件名，属性值为入口文件
  entry: { // 入口文件，从项目根目录设定
    main1: "./src/main1",
    main2: "./src/main2"
  },
  output: { // 输出路径和文件名，使用path模块resolve方法将输出路径解析为绝对路径
    path: path.resolve(__dirname, "../dist/js"), // 将JS文件打包到dist/js的目录
    filename: "[name].js" // 使用[name]打包出来的JS文件会分别按照入口配置的属性来命名
  }
};

2.多个JS打包成一个JS文件
const path = require("path");
module.exports = {
  mode: "development", // 打包模式为开发模式
  entry: ["./src/main1", "./src/main2"......],
  output: {
    path: path.resolove(__dirname, "../dist/js"),
    filename: "main.js"
  }
};

3.多个JS文件一部分打包成一个JS
const path = require("path");
module.export = {
  mode: "development",
  entry: {
    main: "./src/main",
    main1: ["./src/main1", "./src/main2"......]
  },
  
  output: {
    path: path.resolve(__dirname, "../dist/js")
    filename: "[name].js"
  }
}
