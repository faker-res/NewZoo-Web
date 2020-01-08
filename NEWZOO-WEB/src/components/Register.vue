<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">

      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>

      <el-form-item label="密码" inline="true" :disable="true">
        <el-input v-model="form.password"></el-input>
      </el-form-item>

      <el-form-item label="确认密码" inline="true" :disable="true">
        <el-input v-model="form.confirm"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="login">去登陸</el-button>
        <el-button type="primary" @click="register">注册</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'Register',
    data() {
      return {
        form: {
          username: '',
          password: '',
          confirm: '',
        }
      }
    },
    methods: {
      login(){
        this.$router.push({path: "/"});
      },
      register() {
        this.$axios({
          method: "post",
          url: "http://10.10.100.129:10005/user/register", // 接口地址
          data: {
            account: this.form.username,
            password: this.form.password,
            confirm: this.form.confirm,
          }
        }).then(response => {
          let data = response.data;
            console.log(response.data);   // 成功的返回
          if (data.code = 300) {
            alert(data.msg);
          }
          }).catch(error => console.log(error)); // 失败的返回
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
