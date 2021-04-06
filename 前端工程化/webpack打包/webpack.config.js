const path = require('path');
//VUE组件加载
const VueLoaderPlugin = require('vue-loader/lib/plugin');


//生成预览页面
const HtmlWebpackPlugin = require('html-webpack-plugin');
//创建插件实例对象
const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html', //指定要用到的模板文件
    filename: 'index.html' //指定生成文件名称，该文件存在于内存中，在目录中不显示

})
module.exports = {
    //构建模式
    mode: 'development',
    //打包入口
    entry: path.join(__dirname, './src/index.js'),
    //打包出口
    output: {
        path: path.join(__dirname, './dist'), //输出文件的存放路径
        filename: 'bundle.js', //输出文件名称
    },
    plugins: [htmlPlugin, new VueLoaderPlugin()], //plugins数组是webpack打包期间会用到的一些插件列表
    module: {
        rules: [{
                // 匹配文件类型
                test: /\.css$/,
                // 对应要调用的loader
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, use: 'url-loader?limit=16940' },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, loader: 'vue-loader' },
        ]
    }
}