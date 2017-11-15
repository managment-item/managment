<template>
  <div class="silde">
        <div class="own">
          <img src="./../assets/img/own.png" alt="" width="64px">
          <h2>John<span v-show="!show">.Smith</span></h2>
        </div>
        <el-menu
      router
      default-active="active"
      class="el-menu-vertical-demo"
      :unique-opened="true"
      :collapse="show"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
      background-color="#2b2d3c"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="topic_data_admission">
        <template slot="title">
          <i @click="change" class="el-icon-location"></i>
          <span>医疗数据管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="topic_data_admission">课题数据录取</el-menu-item>
          <el-menu-item index="dataQualityChecking">数据质检</el-menu-item>
          <el-menu-item index="stand_data_managment">标准数据项管理</el-menu-item>
          <el-menu-item index="dataNormalization">数据归一化</el-menu-item>
          <el-menu-item index="dataRinse">数据清洗</el-menu-item>
          <el-menu-item index="DataSearch">数据检索</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="diagnose">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>疾病智能诊断分析</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="diagnose">疾病诊断展示</el-menu-item>
          <el-menu-item index="source">数据溯源展示</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="analyzeSystem">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>医疗数据统计分析</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="analyzeSystem">人群分类管理</el-menu-item>
          <el-menu-item index="analyze">分析</el-menu-item>
          <el-menu-item index="definedAnalyze">自定义分析</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>医疗数据科研管理理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="projectSystem">研究方案管</el-menu-item>
          <el-menu-item index="documentSystem">文档管理</el-menu-item>
          <el-menu-item index="informationSystem">数据资料管理</el-menu-item>
          <el-menu-item index="sampleSystem">生物样本管理</el-menu-item>
          <el-menu-item index="financialSystem">财务管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>疾病知识管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="classify1">分类1</el-menu-item>
          <el-menu-item index="classify2">分类2</el-menu-item>
          <el-menu-item index="keyword">关键字库管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>标准管理{{show}}{{num}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="internationalSTD">国际标准</el-menu-item>
          <el-menu-item index="stateSTD">国家标准</el-menu-item>
          <el-menu-item index="termSTD">术语标准</el-menu-item>
          <el-menu-item index="definedSTD">自定义标准</el-menu-item>
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
      active:"topic_data_admission"
    };
  },
  computed: {
    ...mapGetters(["show"]),
    ...mapGetters(["num"])
  },
  methods: {
    handleSelect(index){
      alert(index);
      this.active=index;
    },
    change:function(){
        this.show=!show
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
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


