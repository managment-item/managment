<template>
  <div class="header">
    <el-button type="primary" @click="show">点击</el-button>
    <img src="./../assets/img/logo.png" alt="">
  </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      input: "flase"
    };
  },
  mounted: function() {
    this.$http.get('/api/data').then(res =>{
      console.log(res.data)
    })
  },
  methods: {
    show: function() {
      this.$store.dispatch("newShow", this.input);
    }
  }
};
</script>

<style scoped>

</style>


