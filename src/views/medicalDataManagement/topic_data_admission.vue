<template>
  <div id="topic_data_admission">
    <!-- 消息提醒 -->
    <div class="newsRemind">
      <div class="newsRemindImg"></div>
      <div class="newsRemindTit"><h2>消息提醒</h2><span>今日更新10条记录</span><i class="iconfont icon-more2"></i></div>
      <div class="newsInfo">
      <ul><li v-for="(items,key) in topicData" :key="key"><h3>{{items.title}}</h3><i class="iconfont icon-more2"></i><p>{{items.content}}</p><span class="infoMore">查看详情</span><span class="infoTime">{{items.date}}</span></li></ul>
    </div>
    </div>
    <!-- 信息总量展示 -->
    <div class="infoAllShow">
      <div class="title">信息总量展示</div>
      <div class="infoAllSearch">
        <div class="searchDate">
          <span class="tit">时间段</span>
          <!-- 时间选择器 -->
          <datePicker class="date"></datePicker>
          <el-button type="success" size="small" class="confirm">确定</el-button>
        </div>
      </div>
      <div class="dataNum">
        <el-row :gutter="25" style="margin-right:0px">
          <el-col :span="5" style="margin-top:'-10px'"><div><h2 >数据记录总数（条）</h2><p  style="font-size:30px;color:#38ca7c">12345</p></div></el-col>
          <el-col :span="5"><div><h2>病人总数（人）</h2><p>12345</p></div></el-col>
          <el-col :span="5"><div><h2>科研课题数量（题）</h2><p>12345</p></div></el-col>
          <el-col :span="5"><div><h2>知识库规则数量（条）</h2><p>12345</p></div></el-col>
          <el-col :span="4"><div><h2>合作医院机构数量</h2><p>12345</p></div></el-col>
        </el-row>
      </div>
    </div>
    <!-- 标准数据量 -->
    <div class="standard_data">
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="8"><div class="dataBox"><div class="title">标准数据量</div><i class="iconfont icon-more2"></i><stadardDataChart></stadardDataChart></div></el-col>
        <el-col :span="7"><div class="dataBox"><div class="title">各机构数据规模</div><i class="iconfont icon-more2"></i></div></el-col>
        <el-col :span="8"><div class="dataBox"><div class="title">常见疾病分析</div><i class="iconfont icon-more2"></i></div></el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import DatePicker from "./../../components/datePicker"
import stadardDataChart from "./../../components/stadard_data_chart"
export default {
  name:'topic_data_admission',
  components:{DatePicker,stadardDataChart},
  data(){
    return{
      topicData:[],
    }
  },
  mounted(){
      this.$http.get("/api/topic_data").then(res => {
        console.log(res)
     this.topicData=res.data.data;
    });
  }
}
</script>
<style lang="less">
#topic_data_admission{padding: 30px 0 0 30px;box-sizing: border-box;width: 100%;min-width: 800px}
.newsRemind{height: 230px;background: #fff;position: relative;padding: 0 0 0 43px;line-height: 60px}
.newsRemind h2{font-size: 14px;display: inline-block;}
.newsRemind .newsRemindTit span{color: #38ca7c;font-size: 14px;padding-left: 20px}
.newsRemind .newsRemindTit i{float: right;margin-right:30px;color: #c9c9c9 }
.newsRemindTit{border-bottom: 1px solid #c9c9c9;margin-right: 30px}
.newsRemindImg{width: 74px;height: 74px;background: url('/static/img/news.png');position: absolute;left:-6px;top: -6px}
.newsInfo{color: #666666;line-height: 50px}
.newsInfo i{padding: 0 20px;color:#c9c9c9 }
.newsInfo h3,.newsInfo p{display: inline-block;}
.infoTime{float: right;margin-right: 56px}
.infoMore{float: right;margin-right: 36px}
.infoAllShow{height: 190px;background: #fff;padding: 20px 0 0 20px;}
.infoAllShow,.standard_data{margin: 20px 0;position: relative;}
.title{font-size: 14px;border-left: 4px solid #38ca7c;text-indent: 10px}
.searchDate .tit{float: left;font-size: 12px;padding-right: 10px}
.searchDate .date{float: left}
.searchDate{position: absolute;line-height: 30px;top:20px;right:20px}
.confirm{margin-left: 8px}
.dataNum{margin-top: 45px}
.dataNum h2{font-size: 12px;color: #999999}
.dataNum p{margin-top: 20px;font-size: 20px}
.dataBox{height: 230px;background: #fff;padding: 20px 0 0 20px; position: relative}
.dataBox i{color:#c9c9c9;position: absolute;right: 19px;top:18px}

</style>
