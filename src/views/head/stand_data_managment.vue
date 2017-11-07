<template>
  <div class="stManage">
    <div class="tit">
      <p class="title">标准数据项管理</p>
    </div>
    <div class="flow">
      <el-button type="primary" class="add">新增</el-button>
      <el-button type="primary" class="set">批量操作</el-button>
      <div class="rg clearfix">
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search">
        </el-input>
        <a class="educe" href="#">导出表格</a>
      </div>
    </div>
    <!-- 表格 -->
      <el-table
        ref="multipleTable"
        :data="tableData2"
        tooltip-effect="dark"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection">
        </el-table-column>
        <el-table-column
          type="index"
          label="序号">
        </el-table-column>
        <el-table-column
          prop="id"
          label="编码">
        </el-table-column>
        <el-table-column
          prop="chinese_name"
          label="中文术语"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="english_name"
          label="英文术语"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop=""
          label="类型"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="range"
          label="取值范围"
          show-overflow-tooltip>
        </el-table-column>
         <el-table-column
          prop="unit"
          label="单位"
          show-overflow-tooltip>
        </el-table-column>
         <el-table-column
          prop="continue"
          label="连续性"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
  export default({
    name:"stManage",
    data(){
      return{
        tableData2:[]
      }
    },
    mounted:function(){
      this.$http.get("/api/data").then(res => {
        console.log(res.data);
        this.tableData2=res.data.data
      });
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  })
</script>

<style>
.stManage{
  margin-top:30px;
  padding-left: 30px;
  border-top:1px solid #F2F2F2;
  background:#ffffff;
}
.tit{
  padding-top:20px;
  padding-bottom:20px;
  border-bottom:1px solid #F8F8F8;
}
.title{
  font-size: 16px;
  padding-left: 12px;
  border-left:2px solid #38CA7C;
}
.flow{
  padding:14px 0px;
}
.add,.set{
  font-size: 10px;
  width:80px;
  height: 34px;
  text-align: center;
  line-height: 34px;
  padding:0px;
  border-color: #9DE5BF;
}
.add{
  color:#fff;
  background: #38CA7C;
}
.set{
  color:#38CA7C;
  background: #F3FCF7;
}
.rg{
  float:right;
}
.el-input{
  width:200px;
  height: 30px;
  padding-right:32px;
}
.el-input>.el-input__inner{
  height: 34px;
  border-radius: 30px!important;
  line-height: 34px!important;
  padding-left:10px;
}
.el-input__prefix{
  left:165px!important;
}
.el-input__icon{
  line-height: 34px;
}
.educe{
  color:#D7D7D7;
}
</style>

