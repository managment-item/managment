<template>
  <div class="stManage">
    我司
  </div>
</template>

<script>
  export default({
    name:"stManage",
    mounted:function(){
      this.$http.get("/api/data").then(res => {
        console.log(res.data);
      });
    },
  })
</script>

<style scoped>


</style>

