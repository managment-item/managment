<template>
  <div class="mains">
        <el-container class="mainContainer">
          <el-aside>
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
import { mapGetters, mapActions } from "vuex";
import Head1 from "./../components/header"
import Slide from "./../components/silde"
export default {
  name:"mains",
  data(){
    return{

    }
  },
  components: {
      Head1,Slide
  },
   computed: {
    ...mapGetters(["show"])
  },
}
</script>

<style scoped>
.el-container,.mains{
  height: 100%;
}
.el-aside{
  width: auto!important;
  height: 100%;
  background: #2b2d3c
}
.el-header{
  padding: 0px!important;
  /* border-bottom: 1px solid #E6E6E6; */
}
.el-main{
  background: #F7F7FB;
  padding:0px
}
</style>


