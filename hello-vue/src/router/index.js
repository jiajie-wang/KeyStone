//导入vue
import Vue from 'vue';
import VueRouter from 'vue-router';
//导入组件
import Login from "../views/YouCunHao/Login";
import Contain from "../views/YouCunHao/container"
import message from '../views/HuangJinYi/message'
import friend from '../views/HuangJinYi/friend'
import group from '../views/HuangJinYi/group'
import test from '../views/HuangJinYi/test'
import ding from '../views/HuangJinYi/ding'
import Social from "../views/LiZhiYing/Social";
import register from "../views/YouCunHao/register";
import personal from "../views/YaoRuanXingChen/Personal";
import changePassword from "../views/YouCunHao/ChangePassword";
import infoVerify_ForgetPassword from "../views/YouCunHao/infoVerify_ForgetPassword";

//使用
Vue.use(VueRouter);
//导出
export default new VueRouter({
  mode:"history",
  routes: [
    {path:'/contain', component:Contain, children:[{path:'/contain/register', component: register},{path: '/contain/login', component: Login}, {path: "/XC/personal", component:personal}]},
    {path: '/changePassword', component: changePassword},
    {path: '/verifyForgetPassword', component:infoVerify_ForgetPassword},


    //JinYi
    {path: '/JY/message', component: message},
    {path: '/JY/friend', component: friend},
    {path: '/JY/group', component: group},
    {path: '/JY/test', component: test},
    {path: '/JY/ding', component: ding},

    //Zhiying

    {path: "/ZY/social", name: "social", component: Social,},
    {path: "/ZY/AboutView", name: "about", component: () => import("../views/LiZhiYing/AboutView.vue"),},
    {path: "/ZY/elementView", name: "elementView", component: () => import("../views/LiZhiYing/elementView.vue"),}

    //Xingchen

  ]



})
