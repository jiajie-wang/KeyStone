<template>
  <div class="person-wrapper">
    <div class="personalinfoboard">
      <el-form :model="personData">
        <el-form-item>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="personData.avatar" :src="personData.avatar" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>

        <el-form ref="BasicInfo" :model="personData"  class="login-box">
          <el-form-item>
            <label>ID</label>
            <el-input v-model="personData.userId" v-bind:readonly="true" placeholder="Enter your ID"></el-input>
          </el-form-item>
          <el-form-item>
            <label>Nickname</label>
            <el-input v-model="personData.userName" placeholder="Enter your NickName"></el-input>
          </el-form-item>
          <el-form-item>
            <label>Gender</label>
            <el-input v-model="personData.gender" placeholder="Enter your gender"></el-input>
          </el-form-item>
          <el-form-item>
            <label>Birthday</label>
            <el-input v-model="personData.birthday" placeholder="Enter your Birthday"></el-input>
          </el-form-item>
          <el-form-item>
            <label>School</label>
            <el-input v-model="personData.school" placeholder="Enter your School"></el-input>
          </el-form-item>
          <el-form-item>
            <label>RelaStat</label>
            <el-input v-model="personData.relaStat" placeholder="Enter your relaStat"></el-input>
          </el-form-item>
          <el-form-item>
            <label>Height</label>
            <el-input v-model="personData.height" placeholder="Enter your Height"></el-input>
          </el-form-item>
          <el-form-item>
            <label>Weight</label>
            <el-input v-model="personData.weight" placeholder="Enter your Weight"></el-input>
          </el-form-item>
          <el-form-item>
            <label>Perfer</label>
            <el-input v-model="personData.perfer" placeholder="Enter your Perfer"></el-input>
          </el-form-item>
          <el-form-item>
            <label>SayHi</label>
            <el-input v-model="personData.sayHi" placeholder="Enter your Introduction"></el-input>
          </el-form-item>

        </el-form>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('BasicInfo')">save</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="tagboard">
      <el-button @click="pushChangePassword" class="changepassword">change password</el-button>
      <el-button @click="logout" class="logout">log out</el-button>
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
      <el-input
        class="input-new-tag"
        style="width: 100px;"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
    </div>
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

      this.personData.avatar = res.data.ubi.avatar
      this.personData.userId = this.$route.query.uid
      this.personData.userName = res.data.ubi.userName
      this.personData.gender =res.data.ubi.gender
      this.personData.birthday =res.data.ubi.birthday
      this.personData.school =res.data.ubi.school
      this.personData.relaStat =res.data.ubi.relaStat
      this.personData.height =res.data.ubi.height
      this.personData.weight =res.data.ubi.weight
      this.personData.perfer =res.data.ubi.perfer
      this.personData.sayHi =res.data.ubi.sayHi
      this.personData.introduction =res.data.ubi.introduction
    }).catch(err => {
      console.log(err.message)
    })

    return {
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
        perfer:'',
        sayHi:'',
        introduction:'',
      },
      tagList:[
        'first tag',
        'first tag',
        'first tag',
        'first tag',
        'first tag',
        'first tag',
        'first tag',
        'first tag',
        'first tag',
        'first tag',
        'first tag',
        'first tag',
        'first tag',
        'first tag',
        'first tag',
        'first tag',
        'first tag',
      ],
      tagColor:[],
      inputVisible: false,
      inputValue: ''
    }
  },
  created(){
    this.initTagColor()
  },
  methods:{
    pushChangePassword(){
      this.$router.push({path: '/changePassword',query:{uid: this.$route.query.uid, email:this.$route.query.email, phoneNum:this.$route.query.phoneNum, verifyQues:this.$route.query.verifyQues, verifyAns:this.$route.query.verifyAns}})
    },
    logout(){
      this.$router.push('/contain')
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
    onSubmit(formName){
      console.log(this.$refs[formName])
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios({
            url: "user/modify/basic",
            method:'POST',
            data: JSON.stringify({
              "ubi":{"userId": this.$route.query.uid,
                "avatar": this.personData.avatar,
                "userName": this.personData.userName,
                "gender": this.personData.gender,
                "birthday": this.personData.birthday,
                "school": this.personData.school,
                "relaStat": this.personData.relaStat,
                "height": this.personData.height,
                "weight": this.personData.weight,
                "perfer": this.personData.perfer,
                "introduction": this.personData.introduction,
                "sayHi": this.personData.sayHi
              },
              "tagIdSet":[]
            }),
            dataType: "json",
            headers:{'Content-Type': "application/json;charset=utf-8"}
          }).then(res => {
            console.log(res)
            console.log(res.data)
            this.$alert("修改成功! " + "  User ID : " + res.data)
            //跳转功能
            this.$router.push({path: '/XC/personal',query:{uid: res.data}})
          }).catch(err => {

            console.log(err.message)
            this.$alert("修改失败！ " + " 未知报错")
          })
        } else {
          this.$alert("修改失败！！")
          return false;
        }
      });
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
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
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
    }
  }
}
</script>
<style>

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
