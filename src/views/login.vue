<template>
  <div class="login">
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <div class="grid-content bg-purple center">
          <h2>火星黑洞</h2>
            <el-form :model="data" :rules="rules1" ref="ruleForm1" label-width="100px">
              <el-form-item label="账号 ：" prop="account">
                <el-input v-model="data.account" placeholder="账号..."></el-input>
              </el-form-item>
              <el-form-item label="密码：" prop="password">
                <el-input type="password" v-model="data.password" placeholder="密码..."></el-input>
              </el-form-item>
              <el-button type="primary" @click="submit">登录</el-button>
              <!--<el-button class="register" type="text" size="small" @click="show = true">没有账号怎么办？ 去注册！</el-button>-->
            </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name:"login",
   data() {
      return {
        show: false,
        data: {account: '', password: ''},
        rules1: {
          account: [{required: true, message: '请输入账号...', trigger: 'blur'}],
          password: [{required: true, message: '请输入密码...', trigger: 'blur'}, {min: 6, message: '密码长度最少为6位...', trigger: 'blur'}],
        },
      }
    },
    methods: {
      submit () {
        this.$refs.ruleForm1.validate((valid) => {
          if (valid) {
          this.$router.push({name: 'topic_data_admission'})
          } else {
            return false
          }
        })
      },
    }
}
</script>

<style scoped>
.el-row{
  margin:0px!important;
}
.center{
  text-align: center;
  margin-top: 260px
}
</style>


