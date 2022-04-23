<template>
  <div id="app">
    <div>
      <div>
        <a href="/ZY/social">click it to jump to social page</a>
        <router-view></router-view>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  data(){
    return{
      dialogVisible:false
    }
  },
  methods: {
    onSubmit(formName) {
      // 为表单绑定验证功能
      console.log(this.$refs[formName])
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios({
              url :"/user/modify/account",
              data : JSON.stringify({
                "email":this.form.email,
                "phoneNum": this.form.phone,
                "password": this.form.password,
                "verifyQues": this.form.validatorQuestion,
                "verifyAns": this.form.validatorAnswer
              }),
              dataType: "json",
              contentType: "application/json;charset=utf-8".then(res => {alert(res)})
            })
            this.$alert("注册成功")
        } else {
          console.log("错误")
          return false;
        }
      });
    }
  }
}
</script>
<style scoped>

</style>
