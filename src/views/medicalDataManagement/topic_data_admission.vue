<template>
  <div id="topic_data_admission">
    <div class="newsRemind">
      <div class="newsRemindImg"></div>
      <div class="newsRemindTit"><h2>消息提醒</h2><span>今日更新10条记录</span><i class="iconfont "></i></div>
    </div>
  </div>
</template>
<script>
export default {
  name:'topic_data_admission'
}
</script>
<style>
#topic_data_admission{padding: 30px 0 0 30px;box-sizing: border-box;width: 970px}
.newsRemind{height: 230px;background: #fff;position: relative;padding: 0 0 0 43px;line-height: 60px}
.newsRemind h2{font-size: 14px;display: inline-block;}
.newsRemind span{color: #38ca7c;font-size: 14px;padding-left: 20px}
.newsRemindImg{width: 74px;height: 74px;background: url('/static/img/news.png');position: absolute;left:-6px;top: -6px}
</style>
