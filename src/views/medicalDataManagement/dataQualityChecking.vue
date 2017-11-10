<template>
  <div class="dataQualityChecking ">
    <div class="data_list">
      <p>质检报告列表</p>
      <div class="searchIndex">
        <el-input
          placeholder="机构名"
          v-model="input01">
        </el-input>
        <el-input
          placeholder="课题名"
          v-model="input02">
        </el-input>
        <el-date-picker
          v-model="input03"
          type="date"
          placeholder="录入时间"
          :picker-options="pickerOptions0">
        </el-date-picker>
        <el-input
          placeholder="问题数量"
          v-model="input04">
        </el-input>
        <el-button type="">查询</el-button>
      </div>
      <div class="table">
      <el-table
        ref="multipleTable"
        :data="tableData3"
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
          prop="organizationName"
          label="机构名">
        </el-table-column>
        <el-table-column
          prop="taskName"
          label="课题名"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="enteringTime"
          label="录入时间"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="problemNum"
          label="问题数量"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="">执行质检</el-button>
            <el-button type="">质检通过</el-button>
            <el-button type=""><router-link :to="{path:'/reportContent'}">查看报告</router-link></el-button>
            <el-button type="">导出报告</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    </div>
    <div class="page">
        <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage4"
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
  export default({
    name:"dataQualityChecking",
    data(){
      return{
        input01:"",
        input02:"",
        input03:"",
        input04:"",
        tableData3:[],
        currentPage4: 1,
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
      }
    },
    mounted: function() {
      this.$http.get("/api/data3").then(res => {
        console.log(res.data.data);
        this.tableData3 = res.data.data;
      });
    },
    methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push({
        name: "editorItem",
        params: {
          row1: row
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
          // this.tableData = this.tableData2.splice(index, 1);
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
      console.log(val);
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
  })
</script>

<style>
.dataQualityChecking{
  margin:20px;
  background: #fff;
}
.data_list{
  padding-top:20px;
}
.data_list p{
  font-size: 16px;
  padding-left:20px;
  border-left:2px solid #38ca7c;
}
.dataQualityChecking table{
  width:95%;
}
.searchIndex{
  margin-top:20px;
  margin-bottom:20px;
  text-align: right;
}
.searchIndex .el-input{
  width:210px;
  margin-right:20px;
}
.searchIndex .el-button{
  margin-right:40px;
}
.table .el-button{
  padding:4px;
  margin:4px;
}
.page {
  margin-top: 40px;
  padding-bottom: 54px;
  text-align: center;
}
</style>

