<template>
    <div class="container">

      <div class="header">
        <div class="header-c">
          <div class="header-container">
            <div class="logo">
              <img src="../../assets/LiZhiYing/images/logo2.png" alt="" />
            </div>
            <div class="inner">
              <div class="nav">
                <a v-on:click="passUidToHomepage">Home Page</a>
                <a v-on:click="passUidToSocial">Social Page</a>
                <a v-on:click="passUidToMessage">Message Page</a>
                <a v-on:click="passUidToMyAccount">My Account</a>
              </div>
              <div class="search">
                <i class="fa fa-search icon-search"></i>
                <input
                  type="text"
                  placeholder="Search for tags or chatting group"
                />
                <a href="">
                  <i class="fa-2x fa fa-user-o"></i>
                  <span>Account</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--轮播图-->
      <div class="block text-center">
        <el-carousel height="500px">
          <el-carousel-item v-for="(img,index) in imgList" :key="index">
            <img :src="img.url" width="100%" height="100%">
          </el-carousel-item>
        </el-carousel>
      </div>

      <!--function-->
      <div class="box">
        <div class="box-title">Keystone Services</div>
        <div class="box-body">
          <ul>
            <li>
              <img src="../../assets/LiZhiYing/images/R-C.43a5b2a3f84f8df17b5ec872834f749a.png" class="img">
              <h3>Matching</h3>
              <p>Our matching algorithm, find soul partners for you, through tags and your purpose~</p>
              <button><a v-on:click="passUidToSocial">More</a></button>
            </li>
            <li>
              <img src="../../assets/LiZhiYing/images/无标题.png" class="img">
              <h3>Private Chatting</h3>
              <p>Enjoy chatting with your new friends on message page~</p>
              <button><a v-on:click="passUidToMessage">More</a></button>
            </li>
            <li>
              <img src="../../assets/LiZhiYing/images/无标题2.png" class="img">
              <h3>Group Chatting</h3>
              <p>On Social Page, find intersting chatting groups and join them~</p>
              <button><a v-on:click="passUidToMessage">More</a></button>
            </li>
          </ul>
        </div>
      </div>
      <div class="clear"></div>

      <!--activity-->
      <div class="article">
        <div class="article-title">Previous activities</div>
        <br></br>
        <div class="article-list">
          <img src="../../assets/LiZhiYing/images/a1.jpg" class="img">
          <h4><a href="https://mp.weixin.qq.com/s/CAIWEFkfDjSNUWn6jzwqNA">The blind date script kills the middle game?! Encounter is the most romantic Christmas gift</a></h4>
        </div>
        <div class="article-list">
          <img src="../../assets/LiZhiYing/images/a2.jpg" class="img">
          <h4><a href="https://mp.weixin.qq.com/s/kP7PVShz5wSg18wnVWobyQ">You can make friends with Cupid!</a></h4>

        </div>
        <div class="article-list"> <img src="../../assets/LiZhiYing/images/a3.jpg" class="img">
          <h4><a href="https://mp.weixin.qq.com/s/b6L_DUNOIz2VjlyQ12C2Mw">Shock! Did Xipu really send other halves?</a></h4>
        </div>
      </div>


    <!--footer-->
    <div class="footer">
      <div class="footer-o">
        <div class="footer-o-left"><img src="../../assets/LiZhiYing/images/logo大.png">
          <p>Keystone——The most reliable campus social website<br> All rights reserved - © 2022 keystone.com</p>
        </div>
        <div class="footer-o-right">
          <dl>
            <dt onclick="dianji()">About us</dt>

            <div class="about" id='about'>
              <p>Jiajie Wang</p>
              <p>Zhiying Li</p>
              <p>Ruanxingchen Yao</p>
              <p>Chuanxin Zhai</p>
              <p>Xiaotian Li</p>
              <p>Cunhao You</p>
              <p>Jinyi Huang</p>
              <p>Ruixiang Zhao</p>
              <p>Yanrong Wu</p>
            </div>

          </dl>
          <dl>
            <dt onclick="dianji1()">Customer Service</dt>

            <div class="guide" id='guide'>
              <img src="../../assets/LiZhiYing/images/客服.jpg" class="img">
            </div>

          </dl>
          <dl>
            <dt onclick="dianji2()">Collaborator</dt>

            <div class="partner" id='partner'>
              <img src="../../assets/LiZhiYing/images/公众号.jpg" class="img">
            </div>
          </dl>
        </div>
      </div>

    </div>
    </div>
  </template>

<script>
    export default {
        data() {
            return {
                imgList: [{
                    url: require('@/assets/LiZhiYing/images/1.jpg')
                }, {
                    url: require('@/assets/LiZhiYing/images/2.png')
                }, {
                    url: require('@/assets/LiZhiYing/images/3.jpg')
                }, ],
            };
        },
      methods:{
        passUidToMyAccount(){
          this.$router.push(({path: '/XC/personal', query:{uid: this.$route.query.uid}}))
        },
        passUidToMessage(){
          this.$router.push(({path: '/JY/message', query:{uid: this.$route.query.uid}}))
        },
        passUidToSocial(){
          this.$router.push(({path: '/ZY/social', query:{uid: this.$route.query.uid}}))
        },
        passUidToHomepage(){
          this.$router.push(({path: '/YR/Homepage', query:{uid: this.$route.query.uid}}))
        },
      }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    * {
        margin: 0;
        padding: 0;
        margin: 0 auto;
    }
    /*header*/

    .container {
        width: 100%;
        margin: 0 auto;
    }

    .header-container {
        padding: 20px;
        display: flex;
        justify-content: space-around;
        font-size: larger;
        background-color: #eee;
    }

    .header-container .logo {
        flex: 0 0 10%;
    }

    .header-container .inner {
        flex: 0 0 90%;
        display: flex;
        justify-content: flex-end;
    }

    .header-container .inner .nav {
        flex: 0 0 60%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .header-container .inner .search {
        flex: 0 0 25%;
        display: flex;
        align-items: center;
    }

    .header-container .inner .search a {
        margin-left: 20px;
        text-align: center;
    }

    .header-container .inner .nav a {
        color: #000;
        padding: 2%;
        transition: 0.33s ease;
        border-bottom: 1px solid transparent;
    }

    .header-container .inner .nav a:first-child,
    .header-container .inner .nav a:hover {
        color: rgb(0, 132, 255);
        border-bottom-color: rgb(0, 132, 255);
    }

    .header-container .logo img {
        width: 118%;
    }

    .header-container .search {
        /* background: #f90; */
        position: relative;
    }

    .header-container .search .icon-search {
        position: absolute;
        top: 50%;
        left: 5%;
        transform: translateY(-50%);
    }

    .header-container .search input {
        border-radius: 10px;
        line-height: 30px;
        padding-left: 10%;
        border-color: rgb(0, 132, 255);
        outline: none;
    }
    /*home page*/

    li {
        list-style: none;
    }

    body {
        background: url(../../assets/LiZhiYing/images/cloud.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-attachment: fixed;
    }

    .el-carousel__item h3 {
        color: #475669;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
        text-align: center;
    }

    .box {
        width: 1400px;
        height: 450px;
        margin: 34px auto;
    }

    .box-title {
        height: 60px;
        font-family: monospace;
        font-size: xx-large;
        font-weight: bold;
        text-align: center;
        vertical-align: middle;
        top: 40px
    }

    .box-body ul {
        width: 1400px;
    }

    .box .box-body ul li {
        width: 450px;
        height: 400px;
        float: left;
        text-align: center;
        background-color: hsl(0deg 0% 100% / 0%);
        margin-right: 12.5px;
        margin-bottom: 15px;
        padding: 0 0px;
        position: relative;
        border: 2px solid rgb(0, 153, 255);
        box-shadow: 0 5px 10px rgb(175 175 175);
        border-radius: 15px;
    }

    .box .box-body ul li h3 {
        font-size: 20px;
        color: #050505;
        margin: 25px 20px 15px 25px;
    }

    .box-body ul {
        font-size: 12px;
        color: #999999;
        margin-left: 25px;
    }

    .box-body ul .box-body-div span {
        color: #ff7c2d;
    }

    .box-body ul li em img {
        position: absolute;
        top: 4px;
        right: -4px;
    }

    .box-body img {
        height: 50%;
    }

    .box-body button {
        position: absolute;
        bottom: 30px;
        left: 0;
        right: 0;
        margin: auto;
        width: 100px;
        background: rgb(255, 192, 169);
        border: 1px solid #ff9100;
        border-radius: 3px;
    }

    .article {
        width: 1400px;
    }

    .article-title {
        height: 50px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: xx-large;
        vertical-align: middle;
        text-align: center;
    }

    .article-list {
        width: 1400px;
        height: 150px;
        border: 2px;
        margin-bottom: 25px;
        border: 2px solid #999999;
        border-radius: 15px;
    }

    .article-list .img {
        float: left;
        position: relative;
        top: 10px;
    }

    .article-list h4 {
        position: relative;
        top: 10px;
        float: left;
        padding: 0 30px;
        font-size: larger;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }

    .footer {
        height: 250px;
        background-color: #f5f5f500;
        text-align: center;
    }

    .clear {
        clear: both;
    }

    .footer-o {
        width: 1250px;
        margin: 0 auto;
        padding-top: 35px;
    }

    .footer-o-left {
        float: left;
    }

    .footer-o-right {
        float: right;
    }

    .footer-o-left p {
        font-size: 12px;
        color: #666666;
        margin: 20px 0px 15px 0px;
    }

    dl {
        float: left;
    }

    .footer-o-right dt {
        font-size: 21px;
        color: #4838ff;
        margin-bottom: 5px;
        vertical-align: middle;
        text-decoration: underline;
    }

    .footer-o-right dl {
        margin-left: 160px;
    }

    .footer-o-right p {
        font-size: 10px;
        color: #333333;
    }

    .footer-o-right li {
        font-size: 10px;
        text-decoration: underline;
    }

    .footer-o-right img {
        width: 160px;
        height: 160px;
    }
</style>
