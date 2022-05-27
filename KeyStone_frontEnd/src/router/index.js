//导入vue
import Vue from 'vue';
import VueRouter from 'vue-router';
//导入组件
import Login from "../views/YouCunHao/Login";
import personal from "../views/YaoRuanXingChen/personal"
import message from '../views/HuangJinYi/message'
import friend from '../views/HuangJinYi/friend'
import group from '../views/HuangJinYi/group'
import Social from "../views/LiZhiYing/Social";
import register from "../views/YouCunHao/register";
import changePassword from "../views/YouCunHao/ChangePassword";
import infoVerify_ForgetPassword from "../views/YouCunHao/infoVerify_ForgetPassword";

import homepage from "../views/WuRanRong/homepage";

//使用
Vue.use(VueRouter);
//导出
export default new VueRouter({
  mode:"history",
  routes: [
    {path:'/XC/personal', component:personal, children:[{path:'/register', component: register},{path: '/login', component: Login}]},
    {path: '/changePassword', component: changePassword},
    {path: '/verifyForgetPassword', component:infoVerify_ForgetPassword},


    //JinYi
    {path: '/JY/message', component: message},
    {path: '/JY/friend', component: friend},
    {path: '/JY/group', component: group},


    //Zhiying

    {path: "/ZY/social", name: "social", component: Social,},
    {path: "/ZY/AboutView", name: "about", component: () => import("../views/LiZhiYing/AboutView.vue"),},
    {path: "/ZY/elementView", name: "elementView", component: () => import("../views/LiZhiYing/elementView.vue"),},


    {path: "/YR/homepage",component: homepage,},


  ]



})
