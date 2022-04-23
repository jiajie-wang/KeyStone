import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router";
//扫描路由配置
import router from "./router"
//导入elementUI
import ElementUI from "element-ui"
//导入element css
import 'element-ui/lib/theme-chalk/index.css'

import axios from "axios";

//使用
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  render: h => h(App),//ElementUI规定这样使用
}).$mount("#app");



axios({
  url:'http://123.207.32.32:8000/home/multidata'
}).then(res =>{
  console.log(res.data.data.banner.list[0])
  if (res.data.data.banner.list[0].title.includes("焕新女装节")){
    console.log("true")
  }
})

