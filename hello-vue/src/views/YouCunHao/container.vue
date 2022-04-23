<script src="../../../../../vue/vue/vue/src/router/index.js"></script>
<template>
    <!--展示视图-->

    <div class="bg">

      <el-container class = "container1">
        <el-header class="header1">
          Keystone: Meet your destined stone
        <input type="text" placeholder="more..." class="input1"></input>
          <input type="submit" class="input2" ></input>

          <i class="el-icon-user" v-on:click="getwow"></i>
          <router-link to="/contain/login" class="login-box">Login</router-link>
          <router-link to="/contain/register" class="login-box">Register</router-link>

        </el-header>
        <el-main class = "main1">
          <el-row :gutter="20" >

            <el-col :span="6">
              <div class="grid-content bg-purple">
              <i class="el-icon-s-tools"></i>
              <a href="/ZY/social">Social Page</a>
              </div>
            </el-col>

            <el-col :span="6">
              <div class="grid-content bg-purple">
              <i class="el-icon-camera"></i>
              <a href="http://localhost:8080/JY/friend">Message</a>
            </div>
            </el-col>

            <el-col :span="6"><div class="grid-content bg-purple">
              <i class="el-icon-turn-off"></i>
              <a href="http://localhost:63342/hello-vue/src/views/WuRanRong/home%20page-%E5%90%B4%E5%A6%8D%E8%93%89/%E4%B8%BB%E9%A1%B5/%E8%83%BD%E5%8A%A8%E7%9A%84%E4%B8%BB%E9%A1%B5.html?_ijt=5c84kkanh9ukt2pd6992gl2f1k&_ij_reload=RELOAD_ON_SAVE">Home page</a>
            </div>
            </el-col>

            <el-col :span="6">
              <div class="grid-content bg-purple">
              <i class="el-icon-s-check"></i>
              <a href="/contain">My Account</a>
            </div>
            </el-col>

          </el-row>
        </el-main >
      </el-container>

      <el-container class = "container2">
          <el-aside width="100px"></el-aside>
        <el-main class="main5">
          <i class="el-icon-location-information"></i>
          <i>Dear Keystone users, this is where you can customize your interface and profile to suit your preferences</i>
        </el-main>
          <el-aside width="100px"></el-aside>
      </el-container>

      <el-container>
        <el-aside width="100px"></el-aside>
        <el-main class="main2">
        <div>
        </div>
        </el-main>
        <el-aside width="100px"></el-aside>
      </el-container>

      <el-container>
        <el-aside width="100px"></el-aside>
        <el-main class="main3">
        <router-view></router-view>
        </el-main>
        <el-aside width="100px"></el-aside>
      </el-container>

      <el-container class="container6" id="containertest">
        <el-aside width="100px"></el-aside>
        <el-main class = "main6" id="maintest">
        </el-main>
        <el-aside width="100px"></el-aside>
      </el-container>





    </div>

</template>

<script>


// 复制粘贴
export default {
  name: "",
  data() {
    return {
      subUrl: "C://Users/Nyle/Desktop/hello-vue(1)/hello-vue/static/html/personalpage.html",
      // iframe: ""
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.iframe = this.$refs["iframeId"].contentWindow;
      window.addEventListener("message", this.sendMessage);
    });
  },
  destroyed() {
    window.removeEventListener("message", this.sendMessage);
  },
  methods: {
    sendMessage() {
      this.iframe.postMessage({
        data: "传给你个值呀"
      },'*');
    }
  }
}
</script>

<script>
export default {
  name: 'Container',
  data() {

    return {
      LoginAllowed:false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',

      },
      radio:'1'
    }
  },
  methods: {
    onSubmit() {
      const url = window.location.href;
      if (url === 'http://localhost:8080/contain'){
        this.$alert('信息已创建')
      }
      else {
        this.$alert("需要先登录才能编写信息")
      }

    },
    getwow(){
      this.$alert('wow!')
    },



  }

}

</script>
<style >
@import "../../assets/css/font.css";

.header1{
  text-align: left;
  font-family: newFont;
  font-weight: bold;
  font-size: 50px;
  background-color: rgba(252, 202, 209, 0.4);
  color: #333;
  line-height: 60px;
  color: #050505;

}

.input1,.input2{
  position: relative;
  right: -1000px;
}

.el-icon-user{
  position: relative;
  right: -1100px;
}

.ChangePassword{
  font-size: 20px;
}

.el-main {
  background-color: rgba(250, 236, 236, 0.4);
  color: #333;
  text-align: center;
  line-height: 160px;

}
.main1{
  line-height: 50px;
  font-family: "newFont2";
  font-size: 25px;
  color: #000000;
}
.main2{
  background-color: rgba(253, 253, 253, 0.4);
  line-height: 200px;
  font-family: "newFont2";
  font-size: 25px;
  text-align: center;
  margin-left: 200px;
  margin-right: 200px;
}
.main3{
  line-height: 20px;
  font-family: "newFont2";
  font-size: 25px;
  margin-left: 200px;
  margin-right: 200px;
}
.main4{

  height: 200px;
  font-family: "newFont2";
  font-size: 25px;
  margin-left: 200px;
  margin-right: 200px;
}
.main5{
  background-color: rgba(253, 253, 253, 0);
  font-family: "newFont2";
  font-size: 25px;
  height: 200px;
  margin-left: 200px;
  margin-right: 200px;
  border-radius: 30px;
  color: #000000;
}
.main6{
  background-color: rgba(255, 255, 255, 0.4);
  font-family: "newFont2";
  font-size: 25px;
  height: 1000px;
  margin-left: 200px;
  margin-right: 200px;
}
.main7{
  background-color: rgba(253, 253, 253, 0.4);
  line-height: 200px;
  font-family: "newFont2";
  font-size: 25px;
  text-align: center;
  margin-left: 200px;
  margin-right: 200px;
}
.el-icon-location-information{
  font-size: 100px;
  margin-left: -500px;
}

body > .el-container {
  margin-bottom: 40px;
}

.sex1{
  margin-left: -1200px;
}

.single{
  margin-left: -1280px;
}

.group1{
  text-align: left;
}
.radio1{
  margin-left: -1150px;
}
.el-aside{
  background-color: rgba(253, 253, 253, 0);
}

.bg{
  background: url("../../assets/imgs/background.png");
}

.el-form-item__label{
  color: #000000;
}
.el-checkbox__label{
  color: #000000;
}
.el-radio__label{
  color: #000000;
}
.login-box {
  font-size: 20px;
}



</style>
