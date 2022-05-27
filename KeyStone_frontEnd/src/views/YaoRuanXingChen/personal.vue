
<template>
  <!--展示视图-->

  <div class="bg">

    <el-container class = "container1">
      <el-header class="header1">

        <div class="header-container">
          <div class="logo">
            <img src="src/assets/LiZhiYing/images/logo2.png" alt="" />
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
      </el-header>
      <el-main class = "main1">
        <router-link to="/login" class="login-box">Login</router-link>
        <router-link to="/register" class="login-box">Register</router-link>
      </el-main >
    </el-container>

    <el-container class = "container2">
      <el-aside width="50px"></el-aside>
      <el-main class="main5">
        <i class="el-icon-location-information"></i>
        <i class="intro">Dear Keystone users, this is where you can customize your interface and profile to suit your preferences</i>
      </el-main>
      <el-aside width="50px"></el-aside>
    </el-container>

    <el-container>
      <el-aside width="50px"></el-aside>
      <el-main class="main2">

      </el-main>
      <el-aside width="50px"></el-aside>
    </el-container>

    <el-container>
      <el-aside width="50px"></el-aside>
      <el-main class="main3">
        <router-view></router-view>
      </el-main>
      <el-aside width="50px"></el-aside>
    </el-container>

    <el-container class="container6" id="containertest">
      <el-aside width="50px"></el-aside>
      <el-main class = "main6" v-if="Uid_return != null">

        <div class="person-wrapper">
          <div class="personalinfoboard">
            <el-form :model="personData">
              <el-form-item>
                <el-upload
                  class="avatar-uploader"
                  action="http://localhost:8081/user/toUploadAvatar?id=1"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :on-change="handleAvatarChange"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="personData.avatar" :src="personData.avatar" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>


              <el-form ref="BasicInfo" :model="personData"  class="login-box">
                <el-form ref="BasicInfo1" :model="private_right"  class="login-box">


                  <el-form-item>
                    <label>ID</label>
                    <el-input v-bind:readonly="true" v-model="personData.userId"></el-input>
                  </el-form-item>

                  <el-form-item>
                    <label>Nickname</label>
                    <el-input style="display:inline" placeholder="Enter nickname" v-model="personData.userName"></el-input>
                  </el-form-item>

                  <el-form-item>
                    <label>Gender</label>
                    <el-select placeholder="Please choose" v-model="personData.gender" style="width:100%">
                      <el-option label="male" :value="1"/>
                      <el-option label="female" :value="2"/>
                      <el-option label="privacy" :value="0"/>
                    </el-select>
                  </el-form-item>

                  <el-form-item>
                    <label>Birthday</label>
                    <el-input placeholder="Enter your birthday date" v-model="personData.birthday"></el-input>
                    <el-select placeholder="Please choose" v-model="private_right.BirthdayPrivacy" style="width:100%">
                      <el-option label="For all people" :value="0"/>
                      <el-option label="For all friends" :value="1"/>
                      <el-option label="For close friends" :value="2"/>
                      <el-option label="Secret" :value="3"/>
                    </el-select>
                  </el-form-item>

                  <el-form-item>
                    <label>School</label>
                    <el-input placeholder="Enter your school name" v-model="personData.school"></el-input>
                    <el-select placeholder="Please choose" v-model="private_right.SchoolPrivacy" style="width:100%">
                      <el-option label="For all people" :value="0"/>
                      <el-option label="For all friends" :value="1"/>
                      <el-option label="For close friends" :value="2"/>
                      <el-option label="Secret" :value="3"/>
                    </el-select>
                  </el-form-item>

                  <el-form-item>
                    <label>Relation ship</label>
                    <el-select placeholder="Please choose" v-model="personData.relaStat" style="width:100%">
                      <el-option label="unknown" :value="0"/>
                      <el-option label="single" :value="1"/>
                      <el-option label="in a relationship" :value="2"/>
                    </el-select>
                    <el-select placeholder="Please choose" v-model="private_right.RelaStatPrivacy" style="width:100%">
                      <el-option label="For all people" :value="0"/>
                      <el-option label="For all friends" :value="1"/>
                      <el-option label="For close friends" :value="2"/>
                      <el-option label="Secret" :value="3"/>
                    </el-select>
                  </el-form-item>

                  <el-form-item>
                    <label>Int in girl</label>
                    <el-select placeholder="Please choose" v-model="personData.girl" style="width:100%">
                      <el-option label="No" :value="0"/>
                      <el-option label="Yes" :value="4"/>
                    </el-select>
                  </el-form-item>

                  <el-form-item>
                    <label>look for friends</label>
                    <el-select placeholder="Please choose" v-model="personData.friend" style="width:100%">
                      <el-option label="No" :value="0"/>
                      <el-option label="Yes" :value="1"/>
                    </el-select>
                  </el-form-item>

                  <el-form-item>
                    <label>Height</label>
                    <el-input placeholder="please enter your height" v-model="personData.height"></el-input>
                    <el-select placeholder="Please choose" v-model="private_right.HeightPrivacy" style="width:100%">
                      <el-option label="For all people" :value="0"/>
                      <el-option label="For all friends" :value="1"/>
                      <el-option label="For close friends" :value="2"/>
                      <el-option label="Secret" :value="3"/>
                    </el-select>
                  </el-form-item>

                  <el-form-item>
                    <label>Weight</label>
                    <el-input placeholder="please enter your weight" v-model="personData.weight"></el-input>
                    <el-select placeholder="Please choose" v-model="private_right.WeightPrivacy" style="width:100%">
                      <el-option label="For all people" :value="0"/>
                      <el-option label="For all friends" :value="1"/>
                      <el-option label="For close friends" :value="2"/>
                      <el-option label="Secret" :value="3"/>
                    </el-select>
                  </el-form-item>

                  <el-form-item>
                    <label>Int in boy</label>
                    <el-select placeholder="Please choose" v-model="personData.boy" style="width:100%">
                      <el-option label="no" :value="0"/>
                      <el-option label="yes" :value="2"/>

                    </el-select>
                  </el-form-item>

                  <el-form-item>
                    <label>SayHi</label>
                    <el-input placeholder="Say hello to people" v-model="personData.sayHi"></el-input>
                  </el-form-item>

                </el-form>
              </el-form>
              <el-form-item>
                <el-button type="primary" @click="onSubmit('BasicInfo')">save</el-button>
                <el-button type="primary" @click="onSubmit_private('BasicInfo1')">save_privateRight</el-button>

              </el-form-item>
            </el-form>

          </div>
          <div class="tagboard">
            <div style="display:flex;margin-bottom:10px">
              <el-button @click="pushChangePassword" class="changepassword">change password</el-button>
              <el-button @click="logout" class="logout">log out</el-button>
            </div>
            <h1 class="about-title">About me</h1>
            <el-input
              type="textarea"
              :rows="4"
              placeholder="this is you introduction"
              v-model="personData.introduction">
            </el-input>

            <el-tag
              v-for="(tag,index) in tagList"
              :key="index"
              class="tag-item"
              closable
              @click="clickTag(index)"
              @close="closeTag(index)"
              :type="tagColor[index]">
              {{tag}}
            </el-tag>

            <el-button  v-if="!inputVisible" class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
            <div v-else>
              <el-tag
                v-for="tag in tagOptions.sport.filter(item => !tagList.find(child=>child===item))"
                :key="tag"
                class="tag-item"
                @click="addTag(tag)"
                type="info">
                {{tag}}
              </el-tag>
              <el-tag
                v-for="tag in tagOptions.music.filter(item => !tagList.find(child=>child===item))"
                :key="tag"
                class="tag-item"
                @click="addTag(tag)"
                type="info">
                {{tag}}
              </el-tag>
              <el-tag
                v-for="tag in tagOptions.entertainment.filter(item => !tagList.find(child=>child===item))"
                :key="tag"
                class="tag-item"
                @click="addTag(tag)"
                type="info">
                {{tag}}
              </el-tag>
              <el-tag
                v-for="tag in tagOptions.food.filter(item => !tagList.find(child=>child===item))"
                :key="tag"
                class="tag-item"
                @click="addTag(tag)"
                type="info">
                {{tag}}
              </el-tag>
              <el-tag
                v-for="tag in tagOptions.game.filter(item => !tagList.find(child=>child===item))"
                :key="tag"
                class="tag-item"
                @click="addTag(tag)"
                type="info">
                {{tag}}
              </el-tag>
              <el-tag
                v-for="tag in tagOptions.constellation.filter(item => !tagList.find(child=>child===item))"
                :key="tag"
                class="tag-item"
                @click="addTag(tag)"
                type="info">
                {{tag}}
              </el-tag>
              <el-popover
                placement="top"
                width="160"
                v-model="visible">
                <div>
                  <el-radio-group v-model="MBTI.one">
                    <el-radio label="e">e</el-radio>
                    <el-radio label="i">i</el-radio>
                  </el-radio-group>
                  <el-radio-group v-model="MBTI.two">
                    <el-radio label="n">n</el-radio>
                    <el-radio label="s">s</el-radio>
                  </el-radio-group>
                  <el-radio-group v-model="MBTI.three">
                    <el-radio label="t">t</el-radio>
                    <el-radio label="f">f</el-radio>
                  </el-radio-group>
                  <el-radio-group v-model="MBTI.four">
                    <el-radio label="j">j</el-radio>
                    <el-radio label="p">p</el-radio>
                  </el-radio-group>
                  <el-button type="primary" size="mini" style="float:right;margin-top:10px" @click="addMPTI">ok</el-button>
                </div>
                <el-tag type="success" slot="reference"> MBTI </el-tag>
              </el-popover>
              <div>
                <el-button type="primary" @click="inputVisible=false">close tag</el-button>
              </div>
            </div>
          </div>
          <audio controls="controls" hidden src="../../../ststic/sound1.mp3"></audio>
        </div>

      </el-main>
      <el-aside width="50px"></el-aside>
    </el-container>

  </div>

</template>







<script>
import axios from "axios";
export default{
  components: {},

  data(){
    axios({
      url:'/user/basic/'+ this.$route.query.uid,
      method:'GET',
      dataType:'json',
      headers:{'Content-Type': "application/json;charset=utf-8"}
    }).then(res =>{
      console.log(res.data)
      this.Uid_return = this.$route.query.uid
      this.personData.avatar = res.data.ubi.avatar
      this.personData.userId = this.$route.query.uid
      this.personData.userName = res.data.ubi.userName
      this.personData.gender = res.data.ubi.gender
      this.personData.birthday =res.data.ubi.birthday
      this.personData.school =res.data.ubi.school
      this.personData.relaStat =res.data.ubi.relaStat
      this.personData.height =res.data.ubi.height
      this.personData.weight =res.data.ubi.weight
      this.personData.friend =res.data.ubi.perfer%2
      this.personData.boy =(((res.data.ubi.perfer-this.personData.friend)/2)%2)*2
      this.personData.girl =((((res.data.ubi.perfer-this.personData.friend)/2-this.personData.boy/2)/2)%2)*4
      this.personData.sayHi =res.data.ubi.sayHi
      this.personData.introduction =res.data.ubi.introduction
      // this.tagList = res.data.ubi.tagSet
    }).catch(err => {
      console.log(err.message)
    })

    axios({
      url:'/user/uip/'+ this.$route.query.uid,
      method:'GET',
      dataType:'json',
      headers:{'Content-Type': "application/json;charset=utf-8"}
    }).then(res =>{
      console.log(res.data)
      this.Uid_return = this.$route.query.uid
      this.private_right.BirthdayPrivacy = res.data.birthdayPrivacy
      this.private_right.SchoolPrivacy = res.data.schoolPrivacy
      this.private_right.RelaStatPrivacy = res.data.relaStatPrivacy
      this.private_right.HeightPrivacy = res.data.heightPrivacy
      this.private_right.WeightPrivacy = res.data.weightPrivacy
      // this.tagList = res.data.ubi.tagSet
    }).catch(err => {
      console.log(err.message)
    })

    return {
      Uid_return:null,
      value0:'',
      value1:'',
      value2:'',
      value3:'',
      value4:'',
      private_right:{
        BirthdayPrivacy:'',
        SchoolPrivacy:'',
        RelaStatPrivacy:'',
        HeightPrivacy:'',
        WeightPrivacy:'',
      },


      value: '',
      visible:false,
      MBTI:{
        one:'e',
        two:'n',
        three:'t',
        four:'j'
      },
      personData:{
        avatar:'',
        userId:'',
        userName:'',
        gender:'',
        birthday:'',
        school:'',
        relaStat:'',
        height:'',
        weight:'',
        girl:'',
        boy:'',
        friend:'',
        sayHi:'',
        prefer:'',
        introduction:'',
      },
      tagList:[
      ],
      tagColor:[],
      inputVisible: false,
      inputValue: '',
      tagOptions:{
        sport:[ 'gym','high intensity exercise','basketball/football','tennis','badminton','yoga','dance'],
        music:['hippop','jazz','rock','countryside','rap','electronicmusic','classical music'],
        entertainment:['movie','KTV','script murder','escape room','travel','bar','disco dancing','eating','Werewolf','UNO'],
        food:['Chinese food','korean food','Japanese food','Thai food','On a diet'],
        game:['games','MOBA','FPS','RPG','ACT','FTG','AVG','SLG','RTS','Online game','EDU','LOL','Fortnite','Genshin Impact','DOTA2','Arcade games'],
        constellation:['Aries','Taurus','Gemini','Cacer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricom','Aquarius','Pisces'],
        xg:['e','i','n','s','t','f','j','p']
      }
    }
  },
  created(){
    this.initTagColor()
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
    pushChangePassword(){
      this.$router.push({path: '/changePassword',query:{uid: this.$route.query.uid, email:this.$route.query.email, phoneNum:this.$route.query.phoneNum, verifyQues:this.$route.query.verifyQues, verifyAns:this.$route.query.verifyAns}})
    },
    logout(){
      this.$router.push({path : '/XC/personal', query: {uid: null}})
    },
    click(){
      this.$alert(this.$route.query.uid)
    },
    initTagColor(){
      this.tagColor=new Array(this.tagList.length).fill('')
    },
    handleAvatarSuccess(res, file) {
      this.personData.avatar = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    test(formName){
      this.$alert(this.personData.perfer)
    },
    method1(){
      axios({
        url: "user/uip/modify",
        method:'POST',
        data: JSON.stringify({
          "userId": this.$route.query.uid,
          "birthdayPrivacy": this.private_right.BirthdayPrivacy,
          "schoolPrivacy": this.private_right.SchoolPrivacy,
          "relaStatPrivacy": this.private_right.RelaStatPrivacy,
          "heightPrivacy": this.private_right.HeightPrivacy,
          "weightPrivacy": this.private_right.WeightPrivacy
        }),
        dataType: "json",
        headers:{'Content-Type': "application/json;charset=utf-8"}
      })
    },
    method2(){
      axios({
        url: "user/modify/basic",
        method:'POST',
        data: JSON.stringify({
          "ubi":{
            "userId": this.$route.query.uid,
            "avatar": this.personData.avatar,
            "userName": this.personData.userName,
            "gender": this.personData.gender,
            "birthday": this.personData.birthday,
            "school": this.personData.school,
            "relaStat": this.personData.relaStat,
            "height": this.personData.height,
            "weight": this.personData.weight,
            "perfer": this.personData.boy + this.personData.girl + this.personData.friend,
            "introduction": this.personData.introduction,
            "sayHi": this.personData.sayHi
          },
          "tagIdSet":this.tagList
        }),
        dataType: "json",
        headers:{'Content-Type': "application/json;charset=utf-8"}
      })
    },
    onSubmit(formName){

      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios({
            url: "user/modify/basic",
            method:'POST',
            data: JSON.stringify({
              "ubi":{
                "userId": this.$route.query.uid,
                "avatar": this.personData.avatar,
                "userName": this.personData.userName,
                "gender": this.personData.gender,
                "birthday": this.personData.birthday,
                "school": this.personData.school,
                "relaStat": this.personData.relaStat,
                "height": this.personData.height,
                "weight": this.personData.weight,
                "perfer": this.personData.boy + this.personData.girl + this.personData.friend,
                "introduction": this.personData.introduction,
                "sayHi": this.personData.sayHi
              },
              "tagIdSet":this.tagList
            }),
            dataType: "json",
            headers:{'Content-Type': "application/json;charset=utf-8"}
          }).then(res => {

            this.$alert("successfully changed! " + "  User ID : " + this.$route.query.uid)
            //跳转功能
            this.$router.push({path: '/XC/personal',query:{uid: this.$route.query.uid}})
          })
        }
      });
    },
    onSubmit_private(formName){

      axios({
        url: "user/uip/modify",
        method:'POST',
        data: JSON.stringify({

          "userId": this.$route.query.uid,
          "birthdayPrivacy": this.private_right.BirthdayPrivacy,
          "schoolPrivacy": this.private_right.SchoolPrivacy,
          "relaStatPrivacy": this.private_right.RelaStatPrivacy,
          "heightPrivacy": this.private_right.HeightPrivacy,
          "weightPrivacy": this.private_right.WeightPrivacy
        }),
        dataType: "json",
        headers:{'Content-Type': "application/json;charset=utf-8"}
      })

    },
    clickTag(index){
      const colorArr=['success','warning','danger']
      const temp=Math.round(Math.random()*2)
      this.tagColor[index]=colorArr[temp]
      this.$set(this.tagColor,index,colorArr[temp])
    },
    closeTag(index){
      this.tagList.splice(index,1)
      this.tagColor.splice(index,1)
      this.$refs.audio.currentTime = 0;
      this.$refs.audio.play(); // ???
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {

      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.tagList.push(inputValue);
        this.tagColor.push('')
      }
      this.inputVisible = false;
      this.inputValue = '';
    },
    // 添加tag
    addTag(tag){
      this.tagList.push(tag)
      this.initTagColor()

    },
    // 添加性格标签
    addMPTI(){
      this.tagList.push(Object.values(this.MBTI).join(''))
      this.initTagColor()
      this.visible=false
    }
  }
}
</script>
<style >
@import "../../assets/css/font.css";

.header1{
  text-align: left;
  font-weight: bold;
  font-size: 20px;
  line-height:1px

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

  text-align: center;
  line-height: 160px;

}
.main1{
  line-height: 20px;
  font-family: "newFont2";
  font-size: 25px;

}
.main2{

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

  font-family: "newFont2";
  font-size: 25px;
  height: 200px;
  margin-left: 250px;
  border-radius: 30px;

}
.main6{

  font-family: "newFont2";
  font-size: 25px;
  height: 1000px;
  margin-left: 200px;
  margin-right: 200px;
}
.main7{

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


.bg{
}


.login-box {
  font-size: 20px;
}
.intro{
  text-align: left;
}
/* XC css */


.logout{
  display: block;
  width: 150px;

}

.changepassword{
  display: block;
  text-align: right;

}

.person-wrapper{
  display: flex;
}
.personalinfoboard{
  border: 2px solid #000;
  background-image: linear-gradient(45deg, rgb(210, 232, 248) 10% , rgb(178, 250, 248) , rgb(182, 173, 182));
  width:32%;
  border-radius: 20px;
  padding: 10px;
}
.tagboard{
  flex: 1;
  border: 2px solid #000;
  background-image: linear-gradient(0deg, rgb(202, 241, 230) 10% , rgb(196, 229, 237) , rgb(166, 247, 190));
  border-radius: 20px;
  padding: 10px;
}
.about-title{
  background-color: cyan;
  border-radius: 20px;
  line-height: 40px;
}
.avatar{
  width: 60%;
  height: 60%;
  border-radius: 50%;
  margin: 10px auto;
}
.tag-item{
  margin: 10px;
  cursor: pointer;
}


</style>
