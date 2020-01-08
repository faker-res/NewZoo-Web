<template>
  <div>
    <ul id="example-1">
      <li v-for="item in records">
        {{ item.title }} <br>
        {{ item.content }} <br>
        {{ item.createDate }} <br>
        {{ item.updateDate }} <br>
        {{ item.message }} <br>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        current: 1,
        count: 10,
        records: []
      }
    },
    created() {
      this.$axios({
        method: "post",
        url: "http://10.10.100.129:10005/post/contents", // 接口地址
        data: {
          current: this.current,
          count: this.count,
          userId: 1
        }
      }).then(response => {
        let data = response.data;
        console.log(response.data);   // 成功的返回
        if (data.code = 300) {
          this.records = data.object.records;
        }
      }).catch(error => console.log(error)); // 失败的返回
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
