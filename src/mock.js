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

//数据质检数据
var articles2 = [];
for (let i = 0; i < 10; i++) {
  let newArticleObject = {
    problemNum:Random.natural(1,100),
    taskName:Random.string( 3, 6 ),
    enteringTime:Random.date(),
    organizationName: Random.cname(),
  }
  articles2.push(newArticleObject)
}
const data3=Mock.mock(articles2)

//使用mockjs模拟数据
// 标准数据项管理数据
Mock.mock('/api/data', (req, res) => {
    return {
        data: data2
    }
})
// 疾病诊断展示数据
Mock.mock('/api/data1', (req, res) => {
  return {
      data: data1
  }
})
//数据质检数据
Mock.mock('/api/data3', (req, res) => {
  return {
      data: data3
  }
})
