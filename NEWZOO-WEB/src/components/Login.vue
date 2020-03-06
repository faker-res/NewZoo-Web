<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">

      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>

      <el-form-item label="密码" inline="true" :disable="true">
        <el-input v-model="form.password"></el-input>
      </el-form-item>

      <el-form-item label="记住我">
        <el-switch v-model="form.rememberMe"></el-switch>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="primary" @click="register">注册</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        form: {
          username: '',
          password: '',
          rememberMe: ''
        }
      }
    },
    methods: {
      login() {
        // this.$axios({
        //   method: "post",
        //   url: "http://10.10.100.129:10005/user/login", // 接口地址
        //   data: {
        //     account: this.form.username,
        //     password: this.form.password
        //   }
        // }).then(response => {
        //   let data = response.data;
        //     console.log("我的1",response.data);   // 成功的返回
        //   if (data.code == 200) {
        //     this.$router.push({path: "/index"});
        //   }else {
        //     alert("报错了");
        //   }
        //   }).catch(error => console.log(error)); // 失败的返回
        this.$post('user/login',{
          account: this.form.username,
          password: this.form.password
         }).then(response =>{
           let data = response.data;
            console.log("我的1",response.data);   // 成功的返回
          if (data.code == 200) {
            this.$router.push({path: "/index"});
          }else {
            alert("报错了");
          }
          }).catch(error => console.log(error)); // 失败的返回

      },
      register() {
        this.$router.push({path: "/register"});
      }
    }
  }
</script>

<style lang="scss" scoped>

  .el-form {
    margin: auto;
    height: 100px;
    width: 400px;

  }
</style>
