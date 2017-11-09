<template>
  <div class="diagnose">
    <div class="system">
      <p>人体八大系统分类</p>
      <ul>
        <li>运动系统</li>
        <li>神经系统</li>
        <li>内分泌系统</li>
        <li>循环系统</li>
        <li>呼吸系统</li>
        <li>消化系统</li>
        <li>泌尿生殖系统</li>
        <li>免疫系统</li>
      </ul>
    </div>
    <div class="showDiagnose">
      <p>疾病诊断展示</p>
      <div class="find">
        <el-input
          placeholder="请输入记录编号"
          v-model="input1">
          <!-- <i slot="prefix" class="el-input__icon el-icon-search"></i> -->
        </el-input>
        <el-input
          placeholder="请输入身份编号"
          v-model="input2">
          <!-- <i slot="prefix" class="el-input__icon el-icon-search"></i> -->
        </el-input>
        <el-button type="">查询</el-button>
        <el-button type="">导出</el-button>
        <el-button type="">分析</el-button>
      </div>
      <!-- 表格 -->
    <div class="table">
      <el-table
        ref="multipleTable"
        :data="tableData"
        :fit="true"
        :resizable="true"
        tooltip-effect="dark"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection">
        </el-table-column>
        <el-table-column
          type="index"
          label="记录编号"
          width="100">
        </el-table-column>
        <el-table-column
          prop="idNumber"
          label="身份编号">
        </el-table-column>
        <el-table-column
          prop="sexs"
          label="性别"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="age"
          label="年龄"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="result"
          label="疾病诊断结果"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary">详情</el-button>
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
  </div>
</template>

<script>
export default {
  name: "diagnose",
  data() {
    return {
      tableData: [],
      currentPage3: 1,
      input1:"",
      input2:""
    };
  },
  mounted: function() {
    this.$http.get("/api/data1").then(res => {
      console.log(res.data.data);
      this.tableData = res.data.data;
    });
  },
  methods: {
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
};
</script>

<style>
.diagnose {
  margin-top: 20px;
  margin-left: 20px;
}
.diagnose .system {
  padding: 20px;
  background: #fff;
}
.diagnose .system p,
.diagnose .showDiagnose p {
  border-left: 2px solid #38ca7c;
  font-size: 16px;
  padding-left: 16px;
}
.diagnose .system ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.diagnose .system ul li {
  background: #878d99;
  font-size: 16px;
  color: #fff;
  width: 250px;
  margin-top: 20px;
  height: 70px;
  text-align: center;
  line-height: 70px;
  border-radius: 8px;
  cursor: pointer;
}
.diagnose .system ul li:nth-child(2),
.diagnose .system ul li:nth-child(5) {
  background: #eb9e05;
}
.diagnose .system ul li:nth-child(3),
.diagnose .system ul li:nth-child(6) {
  background: #fa5555;
}
.diagnose .system ul li:nth-child(4),
.diagnose .system ul li:nth-child(7) {
  background: #67c23a;
}
.diagnose .showDiagnose {
  margin-top: 20px;
  background: #fff;
  padding: 20px;
}
.diagnose .table,.find {
  width: 95%;
}
.diagnose .find{
  margin-top:20px;
  margin-bottom:20px;
  text-align: right;
}
.diagnose .find .el-input{
  width:210px;
  margin-right:20px;
}
.page {
  margin-top: 40px;
  padding-bottom: 54px;
  text-align: center;
}
</style>

