<template>
  <div class="editorItem">
    <el-form :model="form" :rules="rules2"  ref="ruleForm2" label-width="80px">
      <el-form-item label="编号" prop="id">
        <el-input v-model="form.id"></el-input>
      </el-form-item>
      <el-form-item label="中文术语" prop="chinese_name">
        <el-input v-model="form.chinese_name"></el-input>
      </el-form-item>
      <el-form-item label="英文术语" prop="english_name">
        <el-input v-model="form.english_name"></el-input>
      </el-form-item>
      <el-form-item label="类型" prop="type">
        <el-select v-model="form.type" placeholder="请选择项目类型">
          <el-option label="类型一" value="shanghai"></el-option>
          <el-option label="类型二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "editorItem",
  data() {
    return {
      form: {
        id: "",
        chinese_name: "",
        english_name: "",
        type: ""
      },
      rules2: {
        id: [{ required: true, message: "请输入编号...", trigger: "blur" }],
        chinese_name: [
          { required: true, message: "请输入中文术语...", trigger: "blur" }
        ],
        english_name: [
          { required: true, message: "请输入英文术语...", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm2.validate(valid => {
        if (valid) {
          this.$router.push({ name: "stand_data_managment" });
          console.log(this.form);
        } else {
          return false;
        }
      });
    },
    cancel() {
      this.$router.push({ name: "stand_data_managment" });
    },
    getParams() {
      // 取到路由带过来的参数
      let routerParams = this.$route.params.dataObj;
      let routerParams1 = this.$route.params.row1;
      // 将数据放在当前组件的数据内
      // this.msg = routerParams;
      console.log(routerParams,routerParams1,this.$route.query.id1);
    }
  },
  watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    "$route": "getParams"
  }
};
</script>

<style>
.editorItem {
  margin-top: 20px;
  background: #fff;
}
.editorItem .el-form-item__content {
  width: 50%;
}
</style>

