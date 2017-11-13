<template>
  <div class="test">
      <el-form ref="form" :model="form" label-width="80px" >
        <el-form-item label="活动名称">
          <el-input  v-model="form.name" style="width:200px"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      form: {
        name: "",
        region: "",
      }
    };
  },
  methods: {
  }
};
</script>

<style>

</style>
