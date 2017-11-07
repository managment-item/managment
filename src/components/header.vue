<template>
  <div class="header">
      <div class="header1">
        <i class="el-icon-menu" @click="show"></i>
        <img src="./../assets/img/logo.png" alt="" class="logo">
      </div>
    <div class="search clearfix">
    <el-menu
      router
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      active-text-color="#ffd04b">
      <el-menu-item index="help">帮助中心</el-menu-item>
      <el-menu-item index="2">云</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-search"></i></el-menu-item>
      <el-menu-item index="message"><i class="el-icon-bell"></i></el-menu-item>
      <el-submenu index="5">
        <template slot="title">账号设置</template>
        <el-menu-item index="information">个人信息</el-menu-item>
        <el-menu-item index="setting">个人设置</el-menu-item>
      </el-submenu>
      <el-menu-item index="/"><i class="el-icon-circle-close-outline"></i></el-menu-item>
    </el-menu>
    </div>
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
      activeIndex: '1'
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
      this.input =!this.input;
      this.$store.dispatch("newShow", this.input);
    },
    fetchData: async function() {
      let params = {};
      const res = await http.get(api.right, params);
      if (res.data.success) {
        // alert("请求成功");
      }
    }
  }
};
</script>

<style scoped>
.header{
  height: 54px;
  line-height: 54px;
  /* overflow: hidden; */
}
.header1{
  padding-left:10px;
  float: left;
}
.el-icon-menu{
  display: inline-block;
  font-size: 40px;
  cursor: pointer;
  vertical-align: middle;
}
.logo{
  padding-left: 10px;
}
.search{
  float:right;
}
</style>


