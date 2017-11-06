<template>
  <div class="header">
    <i class="el-icon-menu" @click="show"></i>
    <img src="./../assets/img/logo.png" alt="">
  </div>
</template>

<script>
import http from "../utils/http";
import api from "../utils/api";
export default {
  name: "header",
  data() {
    return {
      input: false,
    };
  },
  mounted: function() {
    this.fetchData();
    // this.$http.get("/api/data").then(res => {
    //   console.log(res.data);
    // });
  },
  methods: {
    show: function() {
      this.$store.dispatch("newShow", this.input);
      this.input =!this.input;
    },
    fetchData: async function() {
      let params = {};
      const res = await http.get(api.right, params);
      if (res.data.success) {
        alert("请求成功");
      }
    }
  }
};
</script>

<style scoped>
.el-icon-menu{
  font-size: 40px;
  cursor: pointer;
}
</style>


