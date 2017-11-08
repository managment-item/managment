<template>
  <div class="silde">
        <div class="own">
          <img src="./../assets/img/own.png" alt="" width="64px">
          <h2>John<span v-show="!show">.Smith</span></h2>
        </div>
        <el-menu
      router
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
          <el-menu-item index="topic_data_admission">课题数据录取</el-menu-item>
          <el-menu-item index="1-2">数据质检</el-menu-item>
          <el-menu-item index="stand_data_managment" >标准数据项管理</el-menu-item>
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
          <el-menu-item index="diagnose">疾病诊断展示</el-menu-item>
          <el-menu-item index="source">数据溯源展示</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>医疗数据统计分析</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">人群分类管理</el-menu-item>
          <el-menu-item index="3-2">分析</el-menu-item>
          <el-menu-item index="3-3">自定义分析</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>医疗数据科研管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">研究方案管理</el-menu-item>
          <el-menu-item index="4-2">文档管理</el-menu-item>
          <el-menu-item index="4-3">数据资料管理</el-menu-item>
          <el-menu-item index="4-4">生物样本管理</el-menu-item>
          <el-menu-item index="4-5">财务管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>疾病知识管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1">分类1</el-menu-item>
          <el-menu-item index="5-2">分类2</el-menu-item>
          <el-menu-item index="5-3">关键字库管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>标准管理{{show}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="6-1">国际标准</el-menu-item>
          <el-menu-item index="6-2">国家标准</el-menu-item>
          <el-menu-item index="6-3">术语标准</el-menu-item>
          <el-menu-item index="6-4">自定义标准</el-menu-item>
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

<style>
.silde .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.silde .el-menu-item{
  padding-left: 54px!important;
}
.silde .el-menu-item, .el-submenu__title{
  height: 44px;
  line-height: 44px;
}
.silde .el-submenu .el-menu-item{
  height: auto;
  line-height: 24px;
  font-size: 12px;
}
.silde {
  width: 100%;
  height: 100%;
  background: #2b2d3c;
}
.silde .own {
  padding-top: 55px;
  text-align: center;
}
.silde .own img {
  display: block;
  margin: auto;
}
.silde .own h2 {
  color: #ffffff;
  font-size: 14px;
  line-height: 28px;
}
.silde .el-submenu .el-menu-item {
  min-width: auto !important;
}
.silde .el-menu {
  border: 0px !important;
}
</style>


