<template>
  <div>
    <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">Welcome to register</h3>

      <el-form-item label="Email" prop="email">
        <el-input type="email" placeholder="Please enter the email" v-model="form.email"/>
      </el-form-item>

      <el-form-item label="PhoneNum" prop="phone">
        <el-input type="text" placeholder="Please enter the phone num" v-model="form.phone"/>
      </el-form-item>

      <el-form-item label="Password" prop="password">
        <el-input type="password" placeholder="Please enter the password" v-model="form.password"/>
      </el-form-item>

      <el-form-item label="VerifyQuestion" prop="validatorQuestion">
        <el-input type="question" placeholder="Please enter the verify question" v-model="form.validatorQuestion"/>
      </el-form-item>

      <el-form-item label="VerifyAnswer" prop="validatorAnswer">
        <el-input type="answer" placeholder="Please enter the verify answer" v-model="form.validatorAnswer"/>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" v-on:click="onSubmit('loginForm')">register</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      msg: '',
      form: {
        email:'',
        phone: '',
        password: '',
        validatorQuestion:'',
        validatorAnswer:'',
      },

      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      rules: {
        phone: [{required: true, message: 'The phone number cannot be empty', trigger: 'blur'}, {
          len: 11,
          message: 'Please enter the correct mobile phone number format',
          trigger: 'blur'
        }],
        password: [{required: true, message: 'The password cannot be empty', trigger: 'blur'}, {
          min: 6,
          max: 16,
          message: 'The length of the error',
          trigger: 'blur'
        }],
        email: [{required: true, message: 'The mailbox cannot be empty', trigger: 'blur'}, {
          type: 'email',
          message: 'Please enter the correct email address',
          trigger: 'blur'
        }],
        validatorQuestion: [{required: true, message: 'Validation question cannot be empty', trigger: 'blur'}],
        validatorAnswer: [{required: true, message: 'Validation answer cannot be empty', trigger: 'blur'}],
      }

    }
  },
  methods: {
    onSubmit(formName) {
      // 为表单绑定验证功能

      console.log(this.$refs[formName])
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios({
            url: "/user/modify/account",
            method:'POST',
            data: JSON.stringify({
              "email": this.form.email,
              "phoneNum": this.form.phone,
              "password": this.form.password,
              "verifyQues": this.form.validatorQuestion,
              "verifyAns": this.form.validatorAnswer
            }),
            dataType: "json",
            headers:{'Content-Type': "application/json;charset=utf-8"}
          }).then(res => {
            console.log(res)
            console.log(res.data)
            axios({
              url:'/user/modify/basic',
              method:'POST',
              dataType:'json',
              data:JSON.stringify({
                "ubi":{
                  "userId": res.data
                },
                "tagIdSet":[]
              }),
              headers:{'Content-Type': "application/json;charset=utf-8"}
            }).then(res =>{
              console.log(res)
              this.$alert("ubi is set")
            }).catch(err => {
              console.log(err.message)
            })
            this.$alert("Registered successfully! " + "  User ID : " + res.data)
            //跳转功能
            this.$router.push({path: '/contain/login',query:{uid: res.data, email:this.form.email, phoneNum:this.form.phone, verifyQues:this.form.validatorQuestion, verifyAns:this.form.validatorAnswer}})
          }).catch(err => {

            console.log(err.message)
            this.$alert("Registration failed！ " + " The email already exists.。")
          })
        } else {
          this.$alert("Registration failed！！")
          return false;
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.login-box {
  border: 1px solid #DCDFE6;
  width: 350px;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}

.login-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;
}
</style>

