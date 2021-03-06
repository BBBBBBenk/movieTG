import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式
import './assets/css/global.css'
import './assets/css/common.css'
import './assets/css/common2.css'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入表格树
import TreeTable from 'vue-table-with-tree-grid'
// 导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
// 导入富文本编辑器样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min'

Vue.use(BootstrapVue)
// 导入NProgress, 包对应的JS和CSS
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import store from './store/'
import axios from 'axios'
// 配置请求根路径
// 本机地址
// axios.defaults.baseURL = 'http://104.233.163.217:9000/'
// 远程后台地址
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 600000

// 在request 拦截器中, 展示进度条 NProgress.start()
// 请求在到达服务器之前，先会调用use中的这个回调函数来添加请求头信息
//请求拦截器
axios.interceptors.request.use(
  function(config) {
    let token = localStorage.getItem("token");
    config.headers['token'] = token
    return config;
  },
  function(error) {
    // 请求出错做什么
    return Promise.reject(error);
  }
);
// 响应拦截器
axios.interceptors.response.use(
  function(response) {
    console.log(response);
    let responseStatus = response.data.status;
    if (responseStatus === 3) {
      window.location.href = "/#/login";
      window.localStorage.setItem('token', '');
      window.sessionStorage.setItem('token', '');
    } else if (responseStatus === 1 || responseStatus === 2 || response.status == 200) {
      if(responseStatus === 4) {
        alert(response.data.message);
      }
      return response;
    }

  },
  function(error) {
    return Promise.reject(error);
  }
);
// response 拦截器中,  隐藏进度条NProgress.done()
axios.interceptors.response.use(config => {
  NProgress.done()
  return config
})
// 挂在到Vue实例，后面可通过this调用
Vue.prototype.$http = axios

Vue.config.productionTip = false
// 组件全局注册 表格树
Vue.component('tree-table', TreeTable)
// 全局注册富文本编辑器
Vue.use(VueQuillEditor)
Vue.filter('dataFormat', function (originVal) {
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')
  // yyyy-mm-dd hh:mm:ss
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
