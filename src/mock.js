//引入mockjs
const Mock = require('mockjs')
const Random = Mock.Random;

var articles = [];
for (let i = 0; i < 5; i++) {
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


//使用mockjs模拟数据
Mock.mock('/api/data', (req, res) => {
    return {
        data: data2
    }
})
