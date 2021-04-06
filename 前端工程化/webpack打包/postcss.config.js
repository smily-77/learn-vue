//解决浏览器兼容问题  自动添加兼容前缀
//导入自动添加前缀插件
const autoprefixer = require('autoprefixer');
module.exports = {
    //挂载插件
    plugins: [autoprefixer]
}