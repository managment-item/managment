<template>
  <div class="silde">
        <div class="own">
          <img src="./../assets/img/own.png" alt="" width="64px">
          <h2>John<span v-show="!show">.Smith</span></h2>
        </div>
        <el-menu
      default-active="1-1"
      class="el-menu-vertical-demo"
      :unique-opened="true"
      :collapse="show"
      @open="handleOpen"
      @close="handleClose"
      background-color="#2b2d3c"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i @click="change" class="el-icon-location"></i>
          <span>医疗数据管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">课题数据录取</el-menu-item>
          <el-menu-item index="1-2">数据质检</el-menu-item>
          <el-menu-item index="1-3" ><a href="/stand_data_managment">标准数据项管理</a></el-menu-item>
          <el-menu-item index="1-4">数据归一化</el-menu-item>
          <el-menu-item index="1-5">数据清洗</el-menu-item>
          <el-menu-item index="1-6">数据检索</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>疾病智能诊断分析</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">课题数据录取</el-menu-item>
          <el-menu-item index="2-2">数据质检</el-menu-item>
          <el-menu-item index="2-3">标准数据项管理</el-menu-item>
          <el-menu-item index="2-4">数据归一化</el-menu-item>
          <el-menu-item index="2-5">数据清洗</el-menu-item>
          <el-menu-item index="2-6">数据检索</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>医疗数据统计分析</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">课题数据录取</el-menu-item>
          <el-menu-item index="3-2">数据质检</el-menu-item>
          <el-menu-item index="3-3">标准数据项管理</el-menu-item>
          <el-menu-item index="3-4">数据归一化</el-menu-item>
          <el-menu-item index="3-5">数据清洗</el-menu-item>
          <el-menu-item index="3-6">数据检索</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>医疗数据科研管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">课题数据录取</el-menu-item>
          <el-menu-item index="4-2">数据质检</el-menu-item>
          <el-menu-item index="4-3">标准数据项管理</el-menu-item>
          <el-menu-item index="4-4">数据归一化</el-menu-item>
          <el-menu-item index="4-5">数据清洗</el-menu-item>
          <el-menu-item index="4-6">数据检索</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>疾病知识管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1">课题数据录取</el-menu-item>
          <el-menu-item index="5-2">数据质检</el-menu-item>
          <el-menu-item index="5-3">标准数据项管理</el-menu-item>
          <el-menu-item index="5-4">数据归一化</el-menu-item>
          <el-menu-item index="5-5">数据清洗</el-menu-item>
          <el-menu-item index="5-6">数据检索</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>标准管理{{show}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="6-1">课题数据录取</el-menu-item>
          <el-menu-item index="6-2">数据质检</el-menu-item>
          <el-menu-item index="6-3">标准数据项管理</el-menu-item>
          <el-menu-item index="6-4">数据归一化</el-menu-item>
          <el-menu-item index="6-5">数据清洗</el-menu-item>
          <el-menu-item index="6-6">数据检索</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "silde",
  data() {
    return {
      // isCollapse:false
    };
  },
  computed: {
    ...mapGetters(["show"])
  },
  methods: {
    change:function(){
        this.show=!show
      //  this.$store.dispatch("newShow", this.input);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
      // this.show=!this.show
    }
  }
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.silde {
  width: 100%;
  height: 100%;
  background: #2b2d3c;
}
.own {
  padding-top: 55px;
  text-align: center;
}
.own img {
  display: block;
  /* width: 80%; */
  margin: auto;
}
.own h2 {
  color: #ffffff;
  font-size: 14px;
  line-height: 28px;
}
.el-submenu .el-menu-item {
  min-width: auto !important;
}
.el-menu {
  border: 0px !important;
}
</style>


