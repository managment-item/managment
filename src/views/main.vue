<template>
  <div class="mains">
<<<<<<< HEAD
        <el-container>
          <el-aside>
=======
        <el-container class="mainContainer">
          <el-aside width="200px" v-show="show">
>>>>>>> 8202afa24923bbc0eb8faaab74892f68f612df0c
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
.el-aside{
  width: auto!important;
  height: 100%;
  background: #2b2d3c
}
<<<<<<< HEAD
.el-header{
  padding: 0px!important;
}
.el-main{
  background: #F7F7FB;
}
=======
.mains{height: 100%}
.mainContainer{height: 100%}
>>>>>>> 8202afa24923bbc0eb8faaab74892f68f612df0c
</style>


