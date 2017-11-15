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
      <el-menu-item index="message">
        <el-badge :value="8" class="item">
          <i class="el-icon-bell"></i>
        </el-badge>
      </el-menu-item>
      <el-dropdown :hide-on-click="false" @command="handleCommand">
        <span class="el-dropdown-link">
            设置<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="info1">我的资料</el-dropdown-item>
          <el-dropdown-item command="password">修改密码</el-dropdown-item>
          <el-dropdown-item command="logout"><i class="el-icon-my-logout"/>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!-- <el-menu-item index="/"><i class="el-icon-circle-close-outline"></i></el-menu-item> -->
    </el-menu>
    </div>

    <el-dialog v-if="dialog.data.id" :modal-append-to-body="false" :title="dialog.title" :visible.sync="dialog.show" top="10px" custom-class="my-dialog">
      <el-form :model="dialog.data" ref="form1" label-width="160px">
        <el-form-item label="账号：" prop="account">
          <el-input v-model="dialog.data.account" disabled/>
        </el-form-item>
        <el-form-item label="姓名：" prop="name">
          <el-input v-model="dialog.data.name" placeholder="请输入姓名..."/>
        </el-form-item>
        <el-form-item label="性别：" prop="sex">
          <el-radio-group v-model="dialog.data.sex">
            <el-radio :label="1">男</el-radio>
            <el-radio :label="2">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="生日：" prop="birthday">
          <el-date-picker v-model="dialog.data.birthday" type="date" format="yyyy-MM-dd" :picker-options="{disabledDate:(time)=>time.getTime()>Date.now()}"/>
        </el-form-item>
        <el-form-item label="Email：" prop="email">
          <el-input v-model="dialog.data.email" placeholder="请输入Emial..."/>
        </el-form-item>
        <el-form-item label="电话号码：" prop="phone">
          <el-input v-model="dialog.data.phone" placeholder="请输入电话号码..."/>
        </el-form-item>
      </el-form>
      <div class="text-center">
        <el-button @click="dialog.show = false">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog v-if="!dialog.data.id" :modal-append-to-body="false" :title="dialog.title" :visible.sync="dialog.show">
      <el-form :model="dialog.data" :rules="rule2" ref="form2" label-width="120px">
        <el-form-item label="原密码：" prop="old">
          <el-input type="password" v-model="dialog.data.old"/>
        </el-form-item>
        <el-form-item label="新密码：" prop="pwd">
          <el-input type="password" v-model="dialog.data.pwd"/>
        </el-form-item>
        <el-form-item label="确认密码：" prop="pwd1">
          <el-input type="password" v-model="dialog.data.pwd1"/>
        </el-form-item>
      </el-form>
      <div class="text-center">
        <el-button @click="dialog.show = false">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </div>
    </el-dialog>
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
      activeIndex: '1',
      mine: {},
        dialog: {title: '', show: false, data: {}},
        rule1: {},
        rule2: {
          old: [{type: 'string', required: true, message: '请输入原密码！', trigger: 'blur'}, {type: 'string', min: 6, message: '密码长度不少于6位！', trigger: 'blur'}],
          pwd: [{
            type: 'string',
            required: true,
            validator: (rule, value, callback) => {
              if (!value) {
                callback(new Error('请输入新密码！'))
              } else if (value.length < 6) {
                callback(new Error('密码长度不能少于6位！'))
              } else {
                if (this.dialog.data.pwd1) {
                  this.$refs.form2.validateField('pwd1')
                }
                callback()
              }
            },
            trigger: 'blur',
          }],
          pwd1: [{
            type: 'string',
            required: true,
            validator: (rule, value, callback) => {
              if (!value) {
                callback(new Error('请再次输入密码！'))
              } else if (value !== this.dialog.data.pwd) {
                callback(new Error('两次输入密码不一致!'))
              } else {
                callback()
              }
            },
            trigger: 'blur',
          }],
        },
    };
  },
  mounted: function() {
    this.fetchData();
  },
  methods: {
    show: function() {
      this.input =!this.input;
      this.$store.dispatch("newShow", this.input);
    },
    fetchData: async function() {
      this.$store.dispatch("newNum",20)
      let params = {};
      const res = await http.get(api.right, params);
      if (res.data.success) {
        alert("请求成功");
      }
    },
    handleCommand (command) {
        if (command === 'info1') {
          this.dialog = {title: '我的资料', show: true, data: {id:'125'}}
        } else if (command === 'password') {
          this.dialog = {title: '修改密码', show: true, data: {pwd: '', old: ''}}
        }else if (command === 'logout') {
          this.$router.push({path: '/'})
        }
      },
      changePassword(data) {
        this.$refs.form2.validate((valid) => {
          if (valid) {
              alert(1215)
          } else {
            return false
          }
        })
      },
  }
};
</script>

<style>
.header{
  height: 54px;
  line-height: 54px;
}
.header1{
  padding-left:10px;
  float: left;
}
.header .item .el-badge__content.is-fixed{
  top:20px;
  right:18px;
}
.header .el-icon-menu{
  display: inline-block;
  font-size: 40px;
  cursor: pointer;
  vertical-align: middle;
}
.header .logo{
  padding-left: 10px;
}
.header .search{
  float:right;
  padding-right:40px;
}
.header .el-menu--horizontal .el-submenu>.el-menu{
  left:-30px
}
.text-center{
  text-align: center;
}
</style>


