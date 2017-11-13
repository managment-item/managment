<template>
  <div class="classify1">
      <el-form ref="form" :model="form" label-width="80px" >
        <el-button type="primary" @click="add('Test')">+</el-button>
        <div :is="item.component" v-for="item in items">{{item}}</div>
        <el-form-item label="活动时间">
          <el-col :span="6">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="1">-</el-col>
          <el-col :span="6">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
import Test from './../../components/test'
export default {
  name: "classify1",
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
      },
      items:[]
    };
  },
  components:{
    Test
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    add(components){
      alert(125);
      this.items.push({
        'component': components,
      })

    }
  }
};
</script>

<style>

</style>
