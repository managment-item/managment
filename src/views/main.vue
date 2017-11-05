<template>
  <div class="mains">
        <el-container>
          <el-aside width="200px">
            <slide></slide>
          </el-aside>
          <el-container>
            <el-header>
              <head1></head1>
            </el-header>
            <el-main>
              <router-view></router-view>
            </el-main>
          </el-container>
        </el-container>
  </div>
</template>

<script>
import Head1 from "./../components/header"
import Slide from "./../components/silde"
export default {
  name:"mains",
  components: {
      Head1,Slide
  },

}
</script>

<style scoped>
.el-aside{
  height: 100%;
  background: #2b2d3c
}
</style>


