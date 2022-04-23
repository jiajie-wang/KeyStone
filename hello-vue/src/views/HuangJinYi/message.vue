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
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main">
      <div class="content">
        <div class="subnevi-con">
          <div class="subnevi">
            <div class="sub-in">
              <div class="section">
                <div class="btn">
                  <div class="avatar"><img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fe8094109bc36663bf322f9eb929f5cdd1e494a331059d-ynwzmA_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650815282&t=cabd766eb68be8ae30744640986191b1" /></div>
                  <router-link class="link" to="/friend">friend</router-link>
                </div>
              </div>
            </div>
          </div>

          <div class="subnevi">
            <div class="sub-in">
              <div class="section">
                <div class="btn">
                  <div class="avatar"><img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F16%2F11%2F24%2Ff2e86c6532186daa66fc510fcdb46f59.jpg&refer=http%3A%2F%2Fku.90sjimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650815560&t=d882913e8561af403841839670e43782" /></div>
                  <router-link class="link" to="/group">group</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="fri-container">
          <div class="F">
            <div class="title"><em>My Friends</em></div>
            <div class="person-show">
              <div class="person-container" v-for="item of 20" :key="item">
                <div class="person">
                  <div class="star-delete">
                    <div class="star"><el-button type="text" @click="starRequest">
                      <svg t="1649926776995" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2661" width="15" height="15"><path d="M512 150.25664c7.1424 0 20.224 2.2272 27.59168 17.152l81.24416 164.61312a82.0224 82.0224 0 0 0 61.78816 44.91264l181.69344 26.40384c16.46592 2.39104 22.6304 14.14656 24.83712 20.9408 2.20672 6.79424 4.13184 19.92192-7.7824 31.5392l-131.48672 128.16384a82.03776 82.03776 0 0 0-23.58272 72.61184l31.03744 180.96128c1.6128 9.41568-0.54272 17.72032-6.40512 24.6784-6.08256 7.21408-15.01696 11.52-23.90016 11.52-4.83328 0-9.5232-1.2288-14.336-3.7632l-162.49856-85.43232a82.35008 82.35008 0 0 0-38.19008-9.43104c-13.25056 0-26.45504 3.26144-38.17984 9.42592L311.31648 869.9904c-4.75136 2.49856-9.5744 3.7632-14.336 3.7632-8.88832 0-17.8176-4.30592-23.90016-11.51488-5.8624-6.95808-8.01792-15.26272-6.40512-24.6784l31.03744-180.95104a82.03264 82.03264 0 0 0-23.59808-72.6272l-131.4816-128.16896c-11.91424-11.61728-9.99424-24.74496-7.7824-31.5392 2.20672-6.79424 8.36608-18.54464 24.83712-20.9408l181.69344-26.39872a81.9968 81.9968 0 0 0 61.7728-44.88192l81.25952-164.64384c7.36256-14.9248 20.44416-17.152 27.58656-17.152m0-71.79264c-36.57728 0-73.15968 19.05664-91.96544 57.16992L338.77504 300.27776a10.25536 10.25536 0 0 1-7.72096 5.61152L149.36064 332.288c-84.11648 12.22144-117.7088 115.59936-56.83712 174.92992l131.47648 128.15872c2.41664 2.3552 3.52256 5.74976 2.94912 9.07776l-31.03744 180.96128c-11.37152 66.29376 41.30304 120.12032 101.06368 120.12032 15.76448 0 32.04096-3.75296 47.744-12.0064l162.51392-85.43744a10.28096 10.28096 0 0 1 9.54368 0l162.51392 85.43744c15.70816 8.25856 31.96928 12.0064 47.744 12.0064 59.75552 0 112.43008-53.8368 101.06368-120.12032l-31.03744-180.96128a10.26048 10.26048 0 0 1 2.94912-9.07776l131.47648-128.15872c60.87168-59.33056 27.27936-162.70848-56.83712-174.92992l-181.69344-26.40384a10.25536 10.25536 0 0 1-7.72096-5.61152L603.97568 135.6288c-18.816-38.10816-55.3984-57.1648-91.97568-57.1648z" fill="#707070" p-id="2662"></path></svg>
                    </el-button></div>
                    <div class="delete"><el-button type="text" @click="delRequest">
                      <svg t="1649927560921" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3808" width="15" height="15"><path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512c281.6 0 512-230.4 512-512S793.6 0 512 0zM512 938.666334C273.066334 938.666334 85.333666 750.933666 85.333666 512S273.066334 85.333666 512 85.333666 938.666334 273.066334 938.666334 512 750.933666 938.666334 512 938.666334zM725.333666 298.666334c-17.066334-17.066334-42.667333-17.066334-59.733666 0L512 452.266334l-153.6-153.6c-17.066334-17.066334-42.666334-17.066334-59.732667 0-17.066334 17.066334-17.066334 42.666334 0 59.732667L452.266334 512l-153.6 153.6c-17.066334 17.066334-17.066334 42.667333 0 59.733666 17.066334 17.066334 42.666334 17.066334 59.732667 0L512 571.732667l153.6 153.600999c17.066334 17.066334 42.667333 17.066334 59.733666 0s17.066334-42.667333 0-59.733666L571.732667 512l153.600999-153.6C742.4 341.333666 742.4 315.733666 725.333666 298.666334z" p-id="3809" fill="#8a8a8a"></path></svg>
                    </el-button></div>
                  </div>
                  <div class="ava"><img src="https://img0.baidu.com/it/u=3380931527,2824189433&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400" /></div>
                  <div class="name"><b>1</b></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="gro-container">
          <div class="G">

            <div class="title"><em>My groups</em></div>
            <div class="person-show">
              <div class="group-container" v-for="item of 5" :key="item">
                <div class="group">
                  <div class="gro-ava"><img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp6.itc.cn%2Fimages01%2F20210906%2F81a52f9026b24916af886aa4e59c755f.jpeg&refer=http%3A%2F%2Fp6.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650867106&t=c26523a3c990d405c54374b586f1585c" /></div>
                  <div class="gro-chat">Good good study</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="blank"></div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ['1','2'],
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },

    open() {
      this.$confirm('Do you want to accept the request?', 'contact request', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: 'You have added the contact successfully!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'You have turned down the contact'
        });
      });
    },

    starRequest() {
      this.$confirm('Do you want to send the request?', 'contact request', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: 'You have sent the request successfully!'
        });
      })
    },

    delRequest() {
      this.$confirm('Do you want to delete the contact?', 'delete contact', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: 'You have deleted the contact successfully!'
        });
      })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* 框架 */
.container{
  background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg-blog.csdnimg.cn%2Fimg_convert%2F1d9db770dee9b4f1995222d7c8e32726.png&refer=http%3A%2F%2Fimg-blog.csdnimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650869018&t=7dc1b0b7e70398cffae9dceec9b953ed");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  top:0%;
  position: absolute;
}
.main {
  display: flex;
  justify-content: center;
}
.content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  background-color:rgba(255,255,255,0.5);
  margin-top: 20px;
  margin-bottom: 50px;
}

.title{
  position: relative;
  top: 10px;
  height: 40px;
  width:200px;
  font-size: 20px;
  text-decoration:none;
  color: #090909;
}
.blank{
  height: 40px;
}

/* 跳转聊天界面 */
.subnevi-con{
  display: flex;
  justify-content: center;
}
.subnevi{
  display: inline-block;
  width: 300px;
  margin-left: 50px;
  margin-top: 20px;
}
.sub-in{
  width: 280px;
  height: 100px;
  opacity: 0.9;
  transform: scale(1);
  transition: .33s ease-in-out;
}
.section{
  flex:  0 0 20%;
  height: 80px;
  border: 1px solid #1a1818;
  padding: 10px;
  box-shadow: 0 5px 5px 2px #d57070;
}
.btn{
  background-color: rgb(248, 249, 250);
  display: flex;
  width: 100%;
  height: 100%;
  color: #4876af;
  line-height: 60px;
  font-weight: 900;
}
.sub-in:hover{
  transform: none;
  opacity: 0.5;
}
.avatar img{
  display: inline-block;
  width: 100px;
  height: 80px;
}
.link{
  margin-left: 30px;
  width:20px;
  font-size: 30px;
  text-decoration:none;
  color: #d57070;
}

/* 朋友list */
.fri-container{
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.F{
  width: 80%;
  display: flex;
  flex-direction: column;
}
.person-show{

}
.person-container{
  display: inline-block;
  margin-left: 20px;
  height: 120px;
  width: 120px;
}
.person{
  background-image: linear-gradient(to top, white, #d5d5d5);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 90px;
  width: 90px;
  border: 2px solid #b4adad;
  padding: 10px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.star-delete{
  width: 100%;
  display: flex;
  justify-content: center;
}
.delete{
  margin-left: 50%;
}
.ava img{
  margin-top: -15px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.name{
  font-family: "Times New Roman";
  color: #807e7e;
  font-size: 20px;
}

/* 群聊list */
.gro-container{
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.G{
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.group-container{
  margin-left: 10px;
  width: 250px;
  height: 130px;
  display: inline-block;
}
.group{
  background: linear-gradient(to right, #b0afaf 1px,transparent 1px),
  linear-gradient(to bottom,#b0afaf 1px,transparent 1px);
  /*background: radial-gradient(circle , #5a5a5a .5px, transparent .5px);   点点*/
  background-repeat: repeat;
  background-size: 9px 9px;
  flex: 0 0 20%;
  height: 100px;
  width: 220px;
  padding: 10px;
  display: flex;
  flex-direction: row;
}
.gro-ava img{
  margin-top: 5px;
  margin-left: 20px;
  width: 110px;
  height: 90px;
}
.gro-chat{
  margin-top: 5px;
  margin-left: 30px;
  width:10px;
  line-height: 25px;
  font-size: 16px;
  text-decoration:none;
  color: #090909;
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
