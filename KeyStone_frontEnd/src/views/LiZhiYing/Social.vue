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
    <div class="banner">
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
                  <div v-for="(item,index) in userId" :key="item.index"  class="section">
                    <div class="pro-img"  @click="handleClickDiaLog(index)">
                      <a href="javascript:;">
                        <i class="fa fa-4x fa-user-o"></i>
                      </a>
                    </div>
                    <div  class="userid">
                      <span > {{item}}</span>
                    </div>
                    <div class="btn" @click.prevent="handleClick(item)" >
                      <a href="">add</a>
                    </div>
                  </div>
                </div>
              </div>
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
              <span class="tips">{{ item.title }}{{index+1}}</span>
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



    <el-dialog
      title="Potential friends information"
      :visible.sync="dialogVisible"
      center
      close-on-click-modal="false"
      width="30%">
      <div  v-for="(item,index) in userName" :key="index">
        <el-form ref="form" label-width="100px">
          <el-form-item label="userid">
            <el-input size="small" v-model="item.userId"></el-input>
          </el-form-item>
          <el-form-item label="avatar">
            <el-input size="small" v-model="item.avatar"></el-input>
          </el-form-item>
          <el-form-item label="userName">
            <el-input size="small" v-model="item.userName"></el-input>
          </el-form-item>
          <el-form-item label="gender">
            <el-input size="small" v-model="item.gender"></el-input>
          </el-form-item>
          <el-form-item label=" birthday">
            <el-input size="small" v-model="item. birthday"></el-input>
          </el-form-item>
          <el-form-item label="school">
            <el-input size="small" v-model="item.school"></el-input>
          </el-form-item>
          <el-form-item label=" relaStat">
            <el-input size="small" v-model="item. relaStat"></el-input>
          </el-form-item>
          <el-form-item label=" height">
            <el-input size="small" v-model="item. height"></el-input>
          </el-form-item>
          <el-form-item label="weight">
            <el-input size="small" v-model="item.weight"></el-input>
          </el-form-item>
          <el-form-item label="perfer">
            <el-input size="small" v-model="item.perfer"></el-input>
          </el-form-item>
          <el-form-item label="introduction">
            <el-input size="small" v-model="item.introduction"></el-input>
          </el-form-item>
          <el-form-item label="sayHi">
            <el-input size="small" v-model="item.sayHi"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>


<script>
import '@/assets/LiZhiYing/css/style.css'
import axios from 'axios';
export default {
  name: "HomeView",
  data() {
    return {
      userName:[],
      getUid:'',
      dialogVisible: false,// 弹出框
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
      index: '',
      userId:[],
    };
  },
  mounted(){
    this.getUid = this.$route.query.uid
  },
  methods: {
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


    handleClickDiaLog(index){
      this.dialogVisible = true
      // 这里是假数据
      const res1 = [
        {
          userid:'用户id',
          avatar: "String用户头像串",
          userName: "String用户昵称",
          gender: "int性别",
          birthday: "Date生日",
          school: "String学校",
          relaStat: "int感情关系",
          height: "int身高",
          weight: "int体重",
          perfer: "int偏好掩码",
          introduction: "String自我介绍",
          sayHi: "String招呼语"
        }
      ]
      // this.userName = res
      // this.$router.push({path:'xxx',query:{user:'xxxx'}})
      // const userID = this.$route.query.user
      // 这里是请求接口获取真实数据 已经写好了 后台接口能通 等把url放进去
      let id = this.userId[index]
      console.log(id,`id`)
      axios({
        method: 'GET',
        url: 'user/basic/'+ id,
        dataType:'json',
        headers:{'Content-Type': "application/json;charset=utf-8"}
      }).then(res => {
        this.userName =[ res.data.ubi]
        console.log(this.userName,`username`)
        console.log(res1,`res1`)
        console.log(res.data.ubi,`res`)
      })
      // axios.get('user/basic/' + this.$route.query.uid).then(res => {
      // console.log(res) // 后台返回数据
      //  this.userName = res
      // })
    },
    open1() {
      this.$notify({
        title: "成功",
        message: "这是一条成功的提示消息",
        type: "success",
      });
    },

    handleClickMatch() {
      this.$confirm("You will match your friends. You have only one chance to match", "tips", {
        confirmButtonText: "Confirm",
        cancelButtonText: "Cancel",
        type: "info",
      })
        .then(() => {
          this.testGet();
          // 点击确认执行的
          this.$message({
            type: "success",
            message: "You have successfully matched your partners!" ,
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

    handleClick(item) {
      console.log(1234)
      this.$confirm("You will apply to add him/her", "tips", {
        confirmButtonText: "Confirm",
        cancelButtonText: "Cancel",
        type: "info",
      })
        .then(() => {
          axios({
            //请求类型
            method: 'POST',
            url: 'http://localhost:8081/rela/add1',
            //设置请求体
            data: JSON.stringify({
              "friendId": item,
              "userId": this.$route.query.uid,
            }),
            dataType: 'json',
            headers: {
              'Content-Type': "application/json;charset=utf-8"
            }
          }).then(response => {
            console.log(response);
          });
          // 点击确认执行的
          this.$message({
            type: "success",
            message: "You have successfully sent your application!" + item,
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
    testGet() {
      var that = this;
      axios.get('http://localhost:8081/match/'+ 1).then(response => {
        console.log(response.data);
        that.userId = response.data
      })
    },

  },
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
};
</script>

<style>
</style>

<style scoped>

</style>
