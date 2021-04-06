import $ from 'jquery';
import './css/1.css';
import './css/1.less';
//import './css/1.scss';

$(function() {
    $('li:odd').css('backgroundColor', 'orange')
    $('li:even').css('backgroundColor', 'lightblue')
});

class Person {
    static info = "aaa"
}
console.log('Person.info');


import Vue from 'vue';
// 1. 导入 Vue 构造函数
//2.导入单文件组件
import App from './temponent/app.vue'
const vm = new Vue({
    // 3. 指定 vm 实例要控制的页面区域
    el: '#app',
    // 4. 通过 render 函数，把指定的组件渲染到 el 区域中
    render: h => h(App)
})