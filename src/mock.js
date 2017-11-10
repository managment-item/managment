//引入mockjs
const Mock = require('mockjs')
const Random = Mock.Random;

//标准数据项管理数据
var articles = [];
for (let i = 0; i < 50; i++) {
  let newArticleObject = {
    title: Random.csentence(5, 30), //  Random.csentence( min, max )
    id:Random.natural(100,1000),//编码
    english_name:Random.string( 7, 10 ),//英文术语
    range:"50-100",
    unit:"个",
    continue:"30",
    thumbnail_pic_s: Random.dataImage('100x100', '#4A7BF7', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
    chinese_name: Random.cname(), // 中文术语
    date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
  }
  articles.push(newArticleObject)
}
const data2=Mock.mock(articles)

//疾病诊断展示数据
var articles1 = [];
for (let i = 0; i < 25; i++) {
  let newArticleObject = {
    idNumber:Random.natural(10000),
    age:Random.natural(1,100),
    name:Random.string( 7, 10 ),
    sexs:Random.cword(),
    result:"好",
    continue:"30",
    chinese_name: Random.cname(),
  }
  articles1.push(newArticleObject)
}
const data1=Mock.mock(articles1)

// 课题数据录取
var topicData = [];
for(let i=0;i<3;i++){
  let topicDatas={
    title:Random.string( '快使用双截棍',3 ),
    content:Random.string( '使用Mock Object进行测试，主要是用来模拟那些在应用中不容易构造(如HttpServletRequest必须在Servlet容器中才能构造出来)或者比较复杂的对象(如JDBC中的ResultSet对象)从而使测试顺利进行的工具。', 30, 40 ),
    date:Random.date('yyyy-MM-dd')
  }
  topicData.push(topicDatas)
}
const topic_data=Mock.mock(topicData)
//使用mockjs模拟数据
Mock.mock('/api/data', (req, res) => {
    return {
        data: data2
    }
})
Mock.mock('/api/data1', (req, res) => {
  return {
      data: data1
  }
})
Mock.mock('/api/topic_data', (req, res) => {
  return {
      data: topic_data
  }
})

