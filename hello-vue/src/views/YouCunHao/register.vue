<template>
  <div>
    <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">欢迎注册</h3>

      <el-form-item label="邮箱" prop="email">
        <el-input type="email" placeholder="请输入邮箱" v-model="form.email"/>
      </el-form-item>

      <el-form-item label="电话" prop="phone">
        <el-input type="text" placeholder="请输入电话号码" v-model="form.phone"/>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
      </el-form-item>

      <el-form-item label="验证问题" prop="validatorQuestion">
        <el-input type="question" placeholder="请输入验证问题" v-model="form.validatorQuestion"/>
      </el-form-item>

      <el-form-item label="验证答案" prop="validatorAnswer">
        <el-input type="answer" placeholder="请输入验证答案" v-model="form.validatorAnswer"/>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" v-on:click="onSubmit('loginForm')">注册</el-button>
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
        phone: [{required: true, message: '电话号不能为空', trigger: 'blur'}, {
          len: 11,
          message: '请输入正确的手机号格式',
          trigger: 'blur'
        }],
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
        }],
        validatorQuestion: [{required: true, message: '验证问题不能为空', trigger: 'blur'}],
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
            this.$alert("注册成功! " + "  User ID : " + res.data)
            //跳转功能
            this.$router.push({path: '/contain/login',query:{uid: res.data, email:this.form.email, phoneNum:this.form.phone, verifyQues:this.form.validatorQuestion, verifyAns:this.form.validatorAnswer}})
          }).catch(err => {

            console.log(err.message)
            this.$alert("注册失败！ " + " 邮箱已存在。")
          })
        } else {
          this.$alert("注册失败！！")
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

