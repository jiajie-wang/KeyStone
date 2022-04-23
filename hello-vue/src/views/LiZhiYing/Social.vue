<template>
  <div class="home">
    <div class="header">
      <div class="container">
        <div class="header-container">
          <div class="logo">
            <img :src="logo" alt="" />
          </div>
          <div class="inner">
            <div class="nav">
              <a href="http://localhost:63342/hello-vue/src/views/WuRanRong/home%20page-%E5%90%B4%E5%A6%8D%E8%93%89/%E4%B8%BB%E9%A1%B5/%E8%83%BD%E5%8A%A8%E7%9A%84%E4%B8%BB%E9%A1%B5.html?_ijt=el7iddm3a4rolp2sk5c6cpo3pl&_ij_reload=RELOAD_ON_SAVE">Home Page</a>
              <a href="/ZY/social">Social Page</a>
              <a href="/JY/message">Message Page</a>
              <a href="/contain">My Account</a>
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

                <!-- <div class="ding">
                  <el-dropdown>
                    <span class="el-dropdown-link">
                      <svg
                        t="1648971836670"
                        class="svg-ring"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="2459"
                        width="45"
                        height="40"

                      >
                        <path
                          d="M660.48 872.448q6.144 0-3.584 15.36t-29.696 33.792-47.104 33.792-57.856 15.36q-27.648 0-53.248-15.36t-45.056-33.792-29.696-33.792-6.144-15.36l272.384 0zM914.432 785.408q7.168 9.216 6.656 17.92t-4.608 14.848-10.24 9.728-12.288 3.584l-747.52 0q-14.336 0-20.992-11.776t4.608-29.184q17.408-30.72 40.96-68.608t44.544-81.408 36.352-92.16 15.36-101.888q0-51.2 14.336-92.16t37.376-71.68 53.248-52.224 62.976-32.768q-16.384-26.624-16.384-55.296 0-41.984 28.672-70.656t70.656-28.672 70.656 28.672 28.672 70.656q0 14.336-4.096 28.16t-11.264 25.088q34.816 11.264 66.048 32.768t54.272 53.248 36.864 72.704 13.824 91.136q0 51.2 15.36 100.864t36.864 94.208 45.568 81.408 43.52 63.488zM478.208 142.336q0 16.384 11.264 28.16t27.648 11.776l2.048 0q16.384-1.024 27.648-12.288t11.264-27.648q0-17.408-11.264-28.672t-28.672-11.264-28.672 11.264-11.264 28.672z"
                          p-id="2460"
                          fill="#707070"
                        ></path>
                      </svg>
                      <span>Message</span>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item
                        ><router-link to="/friend"
                          ><div class="ding-nothing">
                            new message from FRIEND
                          </div></router-link
                        ></el-dropdown-item
                      >
                      <el-dropdown-item
                        ><router-link to="/group"
                          ><div class="ding-nothing">
                            new message from GROUP
                          </div></router-link
                        ></el-dropdown-item
                      >
                      <el-dropdown-item
                        ><div class="ding-nothing">
                          contact has been added successfully
                        </div></el-dropdown-item
                      >
                      <el-dropdown-item
                        ><div class="ding-nothing">
                          contact has been turned down
                        </div></el-dropdown-item
                      >
                      <el-dropdown-item
                        ><el-button type="text" @click="open"
                          ><div class="ding-nothing">
                            receive a contact request
                          </div></el-button
                        ></el-dropdown-item
                      >
                    </el-dropdown-menu>
                  </el-dropdown>
                </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="banner">
      <!-- <div class="photo">
        <img width="100%" height="500px" :src="photo" alt="" />
      </div> -->
    </div>
    <div class="tab">
      <div class="container">
        <div class="title">
          <h3>Matching</h3>
        </div>
        <div class="tab-inner">
          <div class="choice">
            <div class="block-wraper">
              <div class="block-hover">
                <div class="block">
                  <div class="left">
                    <i class="fa fa-4x fa-users"></i>
                  </div>
                  <div class="info">
                    <h4>Friends and or Lovers</h4>
                    <p>search your potential friends and or lovers here</p>
                  </div>
                  <div class="Mbtn">
                    <a @click.prevent="handleClickMatch(index)" href="">match</a>
                  </div>
                </div>
                <div class="photo-list">
                  <div v-for="(item, index) in 3" :key="item" class="section">
                    <div class="pro-img">
                      <a href="">
                        <i class="fa fa-4x fa-user-o"></i>
                      </a>
                    </div>
                  <div class="userId">
                    <span > userId </span>
                  </div>
                    <div class="btn">
                      <a @click.prevent="handleClick(index)" href="">add</a>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="block-hover">
                <div class="block">
                  <div class="left">
                    <i class="fa fa-4x fa-child"></i>
                  </div>
                  <div class="info">
                    <h4>Love.</h4>
                    <p>Look for your soul partner here!</p>
                  </div>
                  <div class="Mbtn">
                    <a @click.prevent="handleClickMatch(index)" href="">match</a>
                  </div>
                </div>
                <div class="photo-list">
                  <div v-for="(item, index) in 3" :key="item" class="section">
                    <div class="pro-img">
                      <a href="">
                        <i class="fa fa-4x fa-user-o"></i>
                      </a>
                    </div>
                    <div class="userId">
                    <span > userId </span>
                    </div>
                    <div class="btn">
                      <a @click.prevent="handleClick(index)" href="">add</a>
                    </div>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Chatting -->
    <div class="chat">
      <div class="container">
        <div class="title">
          <h3>Grouping</h3>
        </div>
        <div class="chat-list">
          <div v-for="(item, index) in list" :key="index" class="room">
            <div class="left">
              <i class="fa fa-2x fa-circle-o"></i>
              <span class="tips">{{ item.title }}</span>
            </div>
            <div class="right">
              <div class="photo">
                <img width="100%" :src="item.img" alt="" />
              </div>
              <a href="" @click.prevent="handleClickGroup"
                ><span class="name">{{ item.info }}</span></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import '@/assets/LiZhiYing/css/style.css'

export default {
  name: "HomeView",
  data() {
    return {
      /*userId="12343",*/
      logo: require("@/assets/LiZhiYing/images/logo2.png"),
      photo: require("@/assets/LiZhiYing/images/hand-long.png"),
      list: [
        {
          title: "彩虹小马enfp找intj啦",
          img: require("@/assets/LiZhiYing/images/enfp.png"),
          info: "enfp聚集地",
          url: "http://www.baidu.com",
        },
        {
          title: "二手闲置、拼单速来！",
          img: require("@/assets/LiZhiYing/images/chat-pin.png"),
          info: "西浦拼单小圈子",
          url: "http://www.baidu.com",
        },
        {
          title: "文萃卷大饼，cb卷自习",
          img: require("@/assets/LiZhiYing/images/chat-study.png"),
          info: "约自习的来这",
          url: "http://www.baidu.com",
        },
        {
          title: "苏州剧本杀、密室逃脱，飞机勿入",
          img: require("@/assets/LiZhiYing/images/chat-script.png"),
          info: "爱玩圈",
          url: "http://www.baidu.com",
        },
      ],
    };
  },
  async created() {
    const res = await this.axios({
      url: "http://jsonplaceholder.typicode.com/posts",
      data: {},
    });
    console.log(res);
  },
  methods: {

    // open() {
    //     this.$confirm('Do you want to accept the request?', 'contact request', {
    //       confirmButtonText: 'Yes',
    //       cancelButtonText: 'No',
    //       type: 'warning'
    //     }).then(() => {
    //       this.$message({
    //         type: 'success',
    //         message: 'You have added the contact successfully!'
    //       });
    //     }).catch(() => {
    //       this.$message({
    //         type: 'info',
    //         message: 'You have turned down the contact'
    //       });
    //     });
    //   },

    open1() {
      this.$notify({
        title: "成功",
        message: "这是一条成功的提示消息",
        type: "success",
      });
    },

    handleClickMatch(index) {
      this.$confirm("You will match your friends. You have only one chance to match", "tips", {
        confirmButtonText: "Confirm",
        cancelButtonText: "Cancel",
        type: "info",
      })
        .then(() => {
          // 点击确认执行的
          this.$message({
            type: "success",
            message: "You have successfully matched your partners!" + index,
          });
        })
        .catch(() => {
          // 点击取消执行的
          this.$message({
            type: "info",
            message: "You have failed to match your partners!",
          });
        });
    },

    handleClick(index) {
      this.$confirm("You will apply to add him/her", "tips", {
        confirmButtonText: "Confirm",
        cancelButtonText: "Cancel",
        type: "info",
      })
        .then(() => {
          // 点击确认执行的
          this.$message({
            type: "success",
            message: "You have successfully sent your application!" + index,
          });
        })
        .catch(() => {
          // 点击取消执行的
          this.$message({
            type: "info",
            message: "You have successfully cancelled the order",
          });
        });
    },
    /*getUserid:function(){
      axios.get("").then
      (function(response){
        console.log(response.data);
        console.log(this.userId);
      },function(err){})
    },*/
    handleClickGroup() {
      this.$confirm("You will apply to add him/her", "tips", {
        confirmButtonText: "Confirm",
        cancelButtonText: "Cancel",
        type: "info",
      })
        .then(() => {
          // 点击确认执行的
          this.$message({
            type: "success",
            message: "You have successfully sent your application!",
          });
        })
        .catch(() => {
          // 点击取消执行的
          this.$message({
            type: "info",
            message: "You have successfully cancelled the order",
          });
        });
    },
  },
};
</script>

 <style>
</style>

<style scoped>
@import "../../assets/font-awesome-4.7.0/css/font-awesome.min.css";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
body{
  font-family: newFont2;
  background: url(../../assets/LiZhiYing/images/cloud.png);
  /* background-attachment:fixed; */
  animation: identifier 800s linear infinite;
}
@keyframes identifier {
  from{
    background-position-x: 0;
  }
  to{
    background-position-x: -5000%;
  }
}




.container {
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

.el-dropdown {
  display: inline-block;
  position: relative;
  color: #82868f;
  font-size: 50px;
  marigin: top 30%;
}


.el-dropdown-link {
  /* cursor: pointer;
   margin-left: 300%; */
  flex: 0 0 200;


}

.svg-ring {
  fill:#eee
}

.ding-nothing{
  display: inline-block;
  position: relative;
  color: #7f8899;
  font-size: 14px;
  width: 270px;
  text-align:center;
}
.header-container .nav .ding{
  position: relative;
  margin-left: 1080px;
  margin-top: 1000px;
  height: 9px;
}

/* banner  */

.banner .photo {
  text-align: center;
}

/* table */
.title h3 {
  font-size: 32px;
  padding: 40px 0;
}
.choice .block-wraper{
  /* display: flex; */
  /* justify-content: space-between; */
}
.block-wraper > div{
  /* flex: 0 0 49%; */
}
.choice .block{
  display: flex;
  border: 1px solid #333;
  border-radius: 10px;
  padding: 20px;
  justify-content: space-around;
}

.choice .block .left{
  /* flex: 0 0 40%; */
  padding: 20px;
}
.choice .block .info h4{
  font-weight: 400;
}

.choice .block .info p{
  color: #666;
  font-size: 20px;
}
.choice .block .Mbtn {
  color:#000;
  padding: 30px;

}
.choice .photo-list{
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}
.choice .photo-list .section{
  flex:  0 0 30%;
  text-align: center;
  border: 1px solid #ccc;
  padding: 40px;
  box-shadow: 0 5px 5px 2px #ccc;
}
.choice .photo-list .btn{
  background-color: rgb(225, 242, 245);
  color: #fff;
  line-height: 31px;
  font-weight: 400;
  margin-top: 20px;
}
.block-hover .photo-list{
  opacity: .5;
  transform: scale(.9);
  transition: .33s ease-in-out;
}
.block-hover .photo-list .fa-user-o{
  transition: .33s ease;
  transform: translateY(-20%);
}
.block-hover:hover .photo-list .fa-user-o{
  transform: none;
}
.block-hover:hover .photo-list{
  transform: none;
  opacity: 1;
}

/* Chatting */

.chat-list .room{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 0 5px 2px #eee;
  margin-bottom: 20px;
}
.chat-list .room .left{
  flex: 0 0 60%;
  display: flex;
  align-items: center;
}
.chat-list .room .left .fa{
  margin-right: 10px;
}
.chat-list .room .right{
  flex: 0 0 30%;
  text-align: center;
}
.chat-list .room .right .name{
  margin: 10px 0;
  font-weight: bold;
  font-size: 20px;
}
.chat-list .room .right .photo img{
  width: 50%;
}
.chat-list .room .right>a{
  color: #000;
}
.chat-list .room .right>a:hover{
  color: rgb(0, 132, 255);
}

</style>
