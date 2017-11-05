<template>
  <div class="mains">
        <el-container>
            <el-header>
                  <Head1></Head1>  
            </el-header>
            <el-container>
                <el-aside width="300px">
                    <Slide></Slide>
                </el-aside>
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
  }

}
</script>

<style scoped>

</style>


