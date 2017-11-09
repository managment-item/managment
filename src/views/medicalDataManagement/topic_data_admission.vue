<template>
  <div id="topic_data_admission">
    <div class="newsRemind">
      <div class="newsRemindImg"></div>
      <div class="newsRemindTit"><h2>消息提醒</h2><span>今日更新10条记录</span><i class="iconfont icon-more2"></i></div>
    </div>
    <div class="newsInfo"></div>
  </div>
</template>
<script>
export default {
  name:'topic_data_admission'
}
</script>
<style>
#topic_data_admission{padding: 30px 0 0 30px;box-sizing: border-box;width: 100%}
.newsRemind{height: 230px;background: #fff;position: relative;padding: 0 0 0 43px;line-height: 60px}
.newsRemind h2{font-size: 14px;display: inline-block;}
.newsRemind span{color: #38ca7c;font-size: 14px;padding-left: 20px}
.newsRemind i{float: right;margin-right:30px;color: #c9c9c9 }
.newsRemindTit{border-bottom: 1px solid #c9c9c9;margin-right: 30px}
.newsRemindImg{width: 74px;height: 74px;background: url('/static/img/news.png');position: absolute;left:-6px;top: -6px}
.newsInfo{}
</style>
