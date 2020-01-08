<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">

      <el-form-item label="用户名" label-width="100px">
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
    name: 'HelloWorld',
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
      login(){
        alert("登录");
      },
      register(){
        alert("注册");
      }
    }
  }
</script>

<style scoped>

  el-form {
    margin: auto;
    height: 100px;
    width: 100px;
  }

</style>
