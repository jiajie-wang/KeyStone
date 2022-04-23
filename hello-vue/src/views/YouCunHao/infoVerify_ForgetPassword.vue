<template>
  <div>
    <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">Refind your password</h3>

      <el-form-item label="VerifyQuestion" prop="validatorQuestion">
        <el-input type="answer" placeholder="Click the button to get the validation question" v-bind:readonly="true" v-model="form.validatorQuestion"/>
      </el-form-item>

      <el-form-item label="eamil"   prop="email">
        <el-input type="email"  placeholder="Enter the mailbox to get the validation question" v-model="form.email"/>
      </el-form-item>


      <el-form-item label="VerifyAns" prop="validatorAnswer">
        <el-input type="answer" placeholder="Please enter a verification answer" v-model="form.validatorAnswer"/>
      </el-form-item>


      <el-form-item label="New password" prop="password">
        <el-input type="password" placeholder="Please enter your password" v-model="form.password"/>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" v-on:click="onSubmit('loginForm')">Verify</el-button>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" v-on:click='GetQuestion'>Get validation issues</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "infoVerify_ForgetPassword",
  data() {



    return {
      msg: '',
      form: {
        email:'',
        validatorQuestion:'',
        validatorAnswer:'',
        password:'',
      },

      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      rules: {
        email: [{required: true, message: '邮箱不能为空', trigger: 'blur'}, {
          type: 'email',
          message: '请输入正确的邮箱',
          trigger: 'blur'
        }],
        password: [{required: true, message: '密码不能为空', trigger: 'blur'}, {
          min: 6,
          max: 16,
          message: '长度错误',
          trigger: 'blur'
        }],
        validatorAnswer: [{required: true, message: '验证答案不能为空', trigger: 'blur'}],
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
            url:'/user/forgetPassword/verifyAns',
            method:'POST',
            data:JSON.stringify({
              "email":  this.form.email,
              "verifyAns": this.form.validatorAnswer
            }),
            dataType:'json',
            headers:{'Content-Type': "application/json;charset=utf-8"}
          }).then(res =>{
            console.log(res.data.userId)
            console.log(res.status)
            if (res.status==200){
              axios({
                url:'/user/password',
                method:'POST',
                data:JSON.stringify({
                  "userId": res.data.userId,
                  "password": this.form.password
                }),
                dataType:'json',
                headers:{'Content-Type': "application/json;charset=utf-8"}
              }).then(res =>{
                this.$alert("密码更改成功！！")
                this.$router.push({path:'/contain/login'})
              }).catch(err => {
                console.log(err.message)
              })
            }
          }).catch(err => {
            console.log(err.message)
          })
        } else {
          console.log("请输入完整的信息")
          return false;
        }
      });
    },

    GetQuestion:function () {
      axios({
      url:'user/forgetPassword/'+ this.form.email,
      method:'GET',
      dataType:'json',
      headers:{'Content-Type': "application/json;charset=utf-8"}
    }).then(res =>{
      console.log(res.data)
      this.form.validatorQuestion = res.data
      this.$alert("get the question successfully")
    }).catch(err => {
      console.log(err.message)
        this.$alert("请输入正确的邮箱")
    })
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

