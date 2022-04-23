<template>
  <div>
    <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">Change password</h3>

      <el-form-item label="Old password" prop="password">
        <el-input type="password" placeholder="Please enter your old password" v-model="form.password"/>
      </el-form-item>

      <el-form-item label="New password" prop="new_password">
        <el-input type="password" placeholder="Please enter a new password" v-model="form.new_password"/>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" v-on:click="onSubmit('loginForm')">Change it</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ChangePassword",
  data() {


    return {
      msg: '',
      form: {
        password:'',
        new_password: ''
      },

      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      rules: {
        password: [{required: true, message: 'The old password cannot be empty', trigger: 'blur'},{min:6, max:16, message:'The length of the error', trigger: 'blur'}],
        new_password: [{required: true, message: 'The new password cannot be empty', trigger: 'blur'},{min:6, max:16, message:'The length of the error', trigger: 'blur'}]
      }

    }
  },
  methods: {
    onSubmit(formName) {

      /*alert(this.$route.query.uid)
      alert(this.$route.query.phoneNum)
      alert(this.$route.query.verifyQues)
      alert(this.$route.query.verifyAns)
      alert(this.$route.query.email)*/

      // 为表单绑定验证功能
      console.log(this.$refs[formName])
      this.$refs[formName].validate((valid) => {
        if (valid) {
          /*var data1 = {
            'password':this.form.password,
          }*/
          axios({
            url:'/user/verify',
            method:'POST',
            data: JSON.stringify({
              "userID": this.$route.query.uid,
              "password": this.form.password
            }),
            dataType:'json',
            headers:{'Content-Type': "application/json;charset=utf-8"}
          }).then(res =>{
            this.$alert("Authentication is successful！")
            console.log(res)
            axios({
              url:'/user/password',
              method:'POST',
              data: JSON.stringify({
                "userId": this.$route.query.uid,
                "email": this.$route.query.email,
                "phoneNum": this.$route.query.phoneNum,
                "password": this.form.new_password,
                "verifyQues": this.$route.query.verifyQues,
                "verifyAns": this.$route.query.verifyAns
              }),
              dataType:'json',
              headers:{'Content-Type': "application/json;charset=utf-8"}
            }).then(res =>{
              console.log(res)
              this.$alert("Password changed successfully！")
              this.$router.push({path: '/contain/login'})
            }).catch(err => {
              console.log(err.message)
              this.$alert("Unknown error！！")
            })

          }).catch(err => {
            console.log(err.message)
            this.$alert("Old password incorrect！")
          })
          /*console.log(data1)
          this.$alert("修改成功")
          this.$router.push('/contain/login')*/
        } else {
          console.log("error")
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

