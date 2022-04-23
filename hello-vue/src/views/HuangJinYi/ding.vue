<template>
  <div class="container">

  <div style="width: 70%;margin-left: 30px;margin-top: 30px;">
    <el-dropdown @command="handleCommand">
      <i class="el-icon-user-solid" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="password">修改密码</el-dropdown-item>
        <el-dropdown-item command="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>

  </div>
</template>

<script>
  export default {
    name: ""
  }
</script>

<style scoped>

  .el-dropdown i{
    display: inline-block;
    position: relative;
    color: #606266;
    font-size: 30px;
  }


  .container {
    background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg-blog.csdnimg.cn%2Fimg_convert%2F1d9db770dee9b4f1995222d7c8e32726.png&refer=http%3A%2F%2Fimg-blog.csdnimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650869018&t=7dc1b0b7e70398cffae9dceec9b953ed");
    margin-top: -60px;
    position: absolute;
    width: 1250px;
  }


  /*
  .el-dropdown-link {
    cursor: pointer;
  }
  .el-dropdown i{
    display: inline-block;
    position: relative;
    max-width: 0px;
  }
  .el-icon-arrow-down {
    font-size: 12px;

  }
  .ding{
    position: relative;
    margin-left: 1080px;
    margin-top: 20px;
    height: 0px;
  }*/



</style>
