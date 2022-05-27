<template>
  <div class="container">

    <div class="header">
      <div class="header-c">
        <div class="header-container">
          <div class="logo">
            <img src="../../assets/LiZhiYing/images/logo2.png" alt=""/>
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

    <div class="main-container">
      <div class="main">
        <div class="left">
          <!-- 通讯录 -->
          <div class="left-title">
            <div class="title-image"><img src="https://img2.baidu.com/it/u=343850545,2320437498&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" /></div>
            <router-link class="gro-link" to="/JY/friend"><b>Friend&nbsp</b><svg t="1648314160931" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5621" width="20" height="20"><path d="M47.104 453.632q0-43.008 20.992-57.856t66.048-14.848q20.48 0 64.512 0.512t93.696 0.512 96.768 0.512 74.752 0.512q38.912 1.024 61.44-6.656t22.528-35.328q0-20.48 1.536-48.64t1.536-48.64q1.024-35.84 20.48-45.568t49.152 14.848q30.72 24.576 71.68 58.368t84.992 69.12 86.016 69.632 74.752 59.904q29.696 24.576 30.208 46.592t-28.16 45.568q-29.696 24.576-70.144 56.32t-83.968 65.536-85.504 67.072-74.752 58.88q-35.84 28.672-58.88 21.504t-22.016-44.032l0-24.576 0-29.696q0-15.36-0.512-30.208t-0.512-27.136q0-25.6-15.36-32.256t-41.984-6.656q-29.696 0-77.824-0.512t-100.352-0.512-101.376-0.512-79.872-0.512q-13.312 0-27.648-2.56t-26.112-9.728-18.944-20.992-7.168-37.376q0-27.648-0.512-53.248t0.512-57.344z" p-id="5622" fill="#ffffff"></path></svg></router-link>
          </div>

          <div class="fri-search">
            <div class="my-groups"><b>My groups</b></div>
            <div class="search">
              <el-input v-model="input" placeholder="search for group"></el-input>
            </div>
          </div>

          <div class="namelist-container">
            <dl id="namesList">
              <div class="singlenamelist" v-for="item of 20" :key="item">
                <div class="ava"><img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp6.itc.cn%2Fimages01%2F20210906%2F81a52f9026b24916af886aa4e59c755f.jpeg&refer=http%3A%2F%2Fp6.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650867106&t=c26523a3c990d405c54374b586f1585c" /></div>
                <dd>Good Good Study</dd>
              </div>

            </dl>
          </div>
        </div>

        <div class="right">
          <!-- 聊天界面 -->
          <div class="right-title">Good Good Study</div>
          <div class="content">
            <div class="item item-center"><span>昨天 12:35</span></div>
            <div class="item item-center"><span>你已加入Good Good Study，现在可以开始聊天了。</span></div>
            <div class="item item-left"><div class="avatar"><img src="https://img1.baidu.com/it/u=1347531805,2873397537&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" /></div><div class="bubble bubble-left">你好呀！<br/>一起图书馆吗？</div></div>
            <div class="item item-right"><div class="bubble bubble-right">hello<br/>好呀</div><div class="avatar"><img src="https://img2.baidu.com/it/u=343850545,2320437498&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" /></div></div>
            <div class="item item-center"><span>昨天 13:15</span></div>
            <div class="item item-left"><div class="avatar"><img src="https://img2.baidu.com/it/u=3905645349,1403294080&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400" /></div><div class="bubble bubble-left">也许 周末？</div></div>
            <div class="item item-left"><div class="avatar"><img src="https://img1.baidu.com/it/u=1347531805,2873397537&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" /></div><div class="bubble bubble-left">我可</div></div>
            <div class="item item-right"><div class="bubble bubble-right">可以 我也没问题</div><div class="avatar"><img src="https://img2.baidu.com/it/u=343850545,2320437498&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" /></div></div>
          </div>
          <div class="input-area">
            <textarea name="text" id="textarea"></textarea>
            <div class="button-area">
              <button id="send-btn" onclick="send()">发 送</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    this.open()
    return {
      input: ''
    }
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
    open() {
      this.$alert('Chatting function is temporarily unavailable and will be developed in the future', 'Reminder', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${ action }`
          });
        }
      });
    }
  }
  }

</script>


<style scoped>

/* 框架 */
.container{
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  height: 100%;
  width: 99%;
  position: absolute;
  top:0%;
}
.main-container{
  height: 80%;
  margin-top: 0.5%;
  display: flex;
  justify-content: center;
}
.main{
  width: 80%;
  display: flex;
  flex-direction: row;
}
.left{
  width: 33%;
  border: 0.5px solid #e0e0e0;
  background-color: #e3dbdb;
  border-radius: 4px;
  display: flex;
  flex-flow: column;
  overflow: hidden;
}
.right{
  width: 67%;
  border-radius: 4px;
  border: 0.5px solid #e0e0e0;
  display: flex;
  flex-flow: column;
  overflow: hidden;
}

/* 通讯录 */
.left-title{
  padding-top: 2%;
  padding-bottom: 2%;
  background-color: #b4b3b3;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.title-image img{
  margin-left: 10%;
  width: 55px;
  height: 55px;
  border-radius: 50%;
}
.gro-link{
  margin-left: 60%;
  text-decoration: none;
  display: flex;
  height: 40px;
  width: 120px;
  font-size: 12px;
  color: #fdfcfc;
  align-items: center;
}
.left-title svg{
  width: 20px;
}
.fri-search{
  padding-top: 2%;
  padding-bottom: 2%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.my-groups{
  margin-left: 5%;
  display: inline;
}
.search{
  margin-left: 5%;
  width: 50%;
}
.namelist-container{
  display: flex;
  flex-flow: column;
  overflow: hidden;
  overflow-y: scroll;
}
.namelist-container:hover::-webkit-scrollbar-thumb{
  background:rgba(0,0,0,0.1);
}
.singlenamelist{
  border: 0.5px solid #cec8c8;
  display: flex;
  flex-flow: row;
  align-items: center;
  line-height: 4rem;
}
.namelist-container #namesList dd {
  display: flex;
  margin-left: 20%;
  font-size: 0.9rem;
  color: #090909;
}
.singlenamelist .ava img{
  display: flex;
  width: 50px;
  height: 50px;
  margin-left: 10%;
}

/* 聊天界面 */
*{
  padding: 0;
  margin: 0;
}
body{
  display: flex;
  align-items: center;
  justify-content: center;
}

.right-title{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7%;
  background-color: #f3f2f2;
  border: 0.5px solid #a4a4a4;
}
.content{
  padding: 20px;
  overflow-y: scroll;
  flex: 1;
  background-color: #f3f2f2;
}
.content:hover::-webkit-scrollbar-thumb{
  background:rgba(0,0,0,0.1);
}
.bubble{
  max-width: 400px;
  padding: 10px;
  border-radius: 5px;
  position: relative;
  color: #000;
  word-wrap:break-word;
  word-break:normal;
}
.item-left .bubble{
  margin-left: 15px;
  background-color: #fff;
}
.item-left .bubble:before{
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-top: 10px solid transparent;
  border-right: 10px solid #fff;
  border-bottom: 10px solid transparent;
  left: -20px;
}
.item-right .bubble{
  margin-right: 15px;
  background-color: #6396d2;
}
.item-right .bubble:before{
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-left: 10px solid #6396d2;
  border-top: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid transparent;
  right: -20px;
}
.item{
  margin-top: 15px;
  display: flex;
  width: 100%;
  font-size: 10px;
}
.item.item-right{
  justify-content: flex-end;
}
.item.item-center{
  justify-content: center;
}
.item.item-center span{
  font-size: 12px;
  padding: 2px 4px;
  color: #fff;
  background-color: #dadada;
  border-radius: 3px;
  -moz-user-select:none; /*火狐*/
  -webkit-user-select:none; /*webkit浏览器*/
  -ms-user-select:none; /*IE10*/
  -khtml-user-select:none; /*早期浏览器*/
  user-select:none;
}
.avatar img{
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.input-area{
  border-top:0.5px solid #e0e0e0;
  height: 30%;
  display: flex;
  flex-flow: column;
  background-color: #fff;
}
textarea{
  flex: 1;
  padding: 5px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  overflow-y: auto;
  overflow-x: hidden;
  outline:none;
  resize:none;
}
.button-area{
  display: flex;
  height: 40px;
  margin-right: 10px;
  line-height: 40px;
  padding: 5px;
  justify-content: flex-end;
}
.button-area button{
  width: 80px;
  border: none;
  outline: none;
  border-radius: 4px;
  float: right;
  cursor: pointer;
}

/* 导航 */
.header-c {
  width: 90%;
  margin: 0 auto;
}
.header-container {
  padding: 20px;
  display: flex;
  justify-content: space-around;
  font-size: larger;
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
  border-bottom-color:rgb(0, 132, 255) ;
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
</style>
