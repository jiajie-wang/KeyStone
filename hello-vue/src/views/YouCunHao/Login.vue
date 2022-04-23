<template>
  <div>
    <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">Welcome to Login</h3>
      <el-form-item label="email" prop="email">
        <el-input type="text" placeholder="Please enter your account number" v-model="form.email"/>
      </el-form-item>
      <el-form-item label="password" prop="password">
        <el-input type="password" placeholder="Please enter your password" v-model="form.password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="forget">forget password？</el-button>
        <el-button type="primary" v-on:click="onSubmit('loginForm')">login</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import axios from "axios";
export default {

  name: "Login",

  data() {
    return {
      msg: '',
      form: {
        email: '',
        password: ''
      },

      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      rules: {
        password: [{required: true, message: '密码不能为空', trigger: 'blur'}, {
          min: 6,
          max: 16,
          message: '长度错误',
          trigger: 'blur'
        }],
        email: [{required: true, message: '邮箱不能为空', trigger: 'blur'}, {
          type: 'email',
          message: '请输入正确的邮箱',
          trigger: 'blur'
        }]

      }

    }
  },
  methods: {
    onSubmit(formName) {
      // 为表单绑定验证功能 这里是个人信息修改 先不做与后端链接

      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios({
            url: "/sign",
            method:'POST',
            data: JSON.stringify({
              "email": this.form.email,
              "password": this.form.password,
            }),
            dataType: "json",
            headers:{'Content-Type': "application/json;charset=utf-8"}
          }).then(res => {
            console.log(res)
            console.log(res.status)
            console.log(res.data)
            if(res.status==200){
              if (res.data.userId!=0){
                this.$alert("登录成功! " + "  User ID : " + res.data.userId)
                //跳转功能
                this.$router.push({path: '/XC/personal',query:{uid: res.data.userId, email:this.$route.query.email, phoneNum:this.$route.query.phoneNum, verifyQues:this.$route.query.verifyQues, verifyAns:this.$route.query.verifyAns}})
              }else{
                this.$alert("密码错误！！")
              }
            }else{
              this.$alert("不存在的邮箱！！")
            }

          }).catch(err => {

            console.log(err.message)
            this.$alert("登录失败！" )
          })
        }
        else {
          console.log("错误")
          this.dialogVisible = true;
          return false;
        }
      })
    },

    forget(){
      this.$router.push({path:'/verifyForgetPassword'})
    }
  }
}
</script>

<style lang="scss" scoped>

.forget{
  display: block;
  text-align: right;
}

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

