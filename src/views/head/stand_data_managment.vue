<template>
  <div class="stManage">
    <div class="tit">
      <p class="title">标准数据项管理</p>
    </div>
    <div class="flow">
      <el-button class="add" @click="add">新增</el-button>
      <el-button class="set">批量操作</el-button>
      <div class="rg clearfix">
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search">
        </el-input>

        <router-link :to="{ path:'/editorItem', query: { id1: 123} }">
        <a class="educe" href="#">导出表格</a>
        </router-link>
      </div>
    </div>
    <!-- 表格 -->
    <div class="table">
      <el-table
        ref="multipleTable"
        :data="tableData2"
        :fit="true"
        :resizable="true"
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
            <el-tooltip content="修改" placement="bottom">
            <i class="el-icon-edit edit"  @click="handleEdit(scope.$index, scope.row)"></i>
            </el-tooltip>
            <el-tooltip content="删除" placement="bottom">
            <i class="el-icon-delete delete" @click="handleDelete(scope.$index, scope.row)"></i>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page">
        <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage3"
          :page-size=10
          layout="prev, pager, next, jumper"
          prev-text="上一页"
          next-text="下一页"
          :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "stManage",
  data() {
    return {
      tableData2: [],
      currentPage3: 1
    };
  },
  mounted: function() {
    this.$http.get("/api/data").then(res => {
      console.log(res.data.data);
      this.tableData2 = res.data.data;
    });
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push({
        name: "editorItem",
        params: {
          row1: 125
        }
      });
    },
    //删除
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.tableData = this.tableData2.splice(index, 1);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //新增
    add() {
      alert(125);
      this.$router.push({
        name: "editorItem",
        params: {
          dataObj: this.tableData2
        }
      });
      // this.tableData2.push({
      //   title: "125",
      //   id:222,
      //   english_name:"Jayden",
      //   range:"50-100",
      //   unit:"个",
      //   continue:"30",
      //   chinese_name: "杨幂",
      // })
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
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style>
.stManage {
  margin-top: 30px;
  padding-left: 30px;
  border-top: 1px solid #f2f2f2;
  background: #ffffff;
}
.stManage .tit {
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f8f8f8;
}
.stManage .title {
  font-size: 16px;
  padding-left: 12px;
  border-left: 2px solid #38ca7c;
}
.stManage .flow {
  padding: 14px 0px;
}
.stManage .add,
.set {
  font-size: 10px;
  width: 80px;
  height: 34px;
  text-align: center;
  line-height: 34px;
  padding: 0px;
  border-color: #9de5bf;
}
.stManage .add {
  color: #fff;
  background: #38ca7c;
}
.stManage .set {
  color: #38ca7c;
  background: #f3fcf7;
}
.stManage .rg {
  float: right;
}
.stManage thead > tr {
  background: #f3fcf7;
}
.stManage .flow .el-input {
  width: 200px;
  height: 30px;
  padding-right: 32px;
}
.stManage .flow .el-input > .el-input__inner {
  height: 34px;
  border-radius: 30px !important;
  line-height: 34px !important;
  padding-left: 10px;
}
.stManage .flow .el-input__prefix {
  left: 165px !important;
}
.stManage .flow .el-input__icon {
  line-height: 34px;
}
.stManage .educe {
  color: #d7d7d7;
  padding-right: 20px;
}
.stManage .table {
  width: 95%;
}
.stManage .edit,
.delete {
  font-size: 18px;
  cursor: pointer;
}
.stManage .edit {
  margin-right: 20px;
}
.page {
  margin-top: 40px;
  padding-bottom: 54px;
  text-align: center;
}
</style>

