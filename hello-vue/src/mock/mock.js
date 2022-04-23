// 引入mockjs
const Mock = require('mockjs');

// 假数据：假设这个返出假数据名为“areaHotGroup ”
const areaHotGroup = function () {

  return
//接口文档中的模拟数据直接整个复制到这个位置
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/area/hot', 'GET', areaHotGroup);
