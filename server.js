//伪造接口
const express = require('express')
const request = require('request-promise')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 5000
var head = {
  'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
  'referer': 'https://m.y.qq.com/',
  'authority': 'c.y.qq.com',
  'accept': 'application/json',
  'origin': 'https://m.y.qq.com'
}
app.use(cors())
app.get('/', async (req, res) => { //首页请求
  let options = {
    uri: `https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=${+ new Date()}`,
    headers: head,
    json: true // Automatically parses the JSON string in the response
  };
  //const uri = `https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=${+ new Date()}`
  try {
    res.json(await request(options))
  } catch (e) {
    res.json({
      error: e.message
    })
  }
})
app.get('/search', async (req, res) => {
  const {
    keyword,
    page = 1
  } = req.query
  let options = {
    uri: `https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w=${encodeURIComponent(keyword)}&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=${page}&remoteplace=txt.mqq.all&_=${+ new Date()}`,
    headers: head,
    json: true
  }
  try {
    res.json(await request(options))
  } catch (e) {
    res.json({
      error: e.message
    })
  }
})
app.get('/lyric', async (req, res) => {
  const {
    id,
    type
  } = req.query
  let options = {
    uri: `https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric.fcg?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&nobase64=1&musicid=${id}&songtype=${type||0}&_=${+ new Date()}`,
    head:{
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
      'referer': 'https://m.y.qq.com/',
      'authority': 'c.y.qq.com',
      'accept': '*/*'
      //'origin': 'https://m.y.qq.com'
    }
  }
  try {
    let text = await request(options).replace(/MusicJsonCallback\((.*)\)/, '$1')
    res.json(JSON.parse(text))
  } catch (e) {
    res.json({
      error: e.message
    })
  }
})

app.listen(PORT)