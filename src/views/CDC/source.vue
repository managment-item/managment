<template>
  <div class="source">
      source{{data}}

  </div>
</template>

<script>
import $ from 'jquery'
  export default({
    name:"source",
    data(){
      return{
        data:""
      }
    },
    created(){
      this.getData()
    },
    methods:{
      getData () {
        var self = this
        $.ajax({
          url: 'http://apis.juhe.cn/mobile/get?phone=13429667914&key=6b4cfbf728df0ab6cd7f38735f5596ae',
          type: 'GET',
          dataType: 'JSONP',
          success: function (res) {
            self.data = res.result
          }
        });
        console.log(localStorage.getItem("a"))
      }
    }
  })
</script>

<style>

</style>

