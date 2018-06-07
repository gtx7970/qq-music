//搜索界面
//
import {HotSearch} from './hotSearch.js'
import {SEARCH_URL} from './constance.js'

export class Search {
  constructor(el) {
    this.$el = el
    this.$load = document.querySelector('.loading')
    this.$input = this.$el.querySelector('.search-bar')
    this.$cancel = this.$el.querySelector('.cancel-btn')
    this.$songList = document.querySelector('.search-result')
    this.$input.addEventListener('keyup', this.start.bind(this)) // 输入框监听keyup事件
    this.$input.addEventListener('focus',this.showBtn.bind(this))
    this.$cancel.addEventListener('click', this.cancel.bind(this)) //监听点击
    this.keyword = '' //输入的关键字
    this.page = 1 //当前搜索页
    this.noMore = false //搜索到最后一页
    this.isSearching = false //显示是否在搜索
    this.songs = [] //存储歌曲
    window.addEventListener('scroll', this.scrolling.bind(this)) //监听滚动事件
    this.hotSearch = new HotSearch(document.querySelector('.hot-search'))
    this.hotSearch.$el.addEventListener('click',this.searchHot.bind(this))
  }
  start(event) {
    // console.log('search.....')
      if (event.keyCode !== 13 ) return //不是enter直接返回  event.key !== 'Enter'
      let keyword = this.$input.value.trim() //获取搜索
      
      // console.log(keyword)
      // let key = this.$input.value.trim()
      // console.log(key)
      this.keyword = keyword
      if (!this.keyword) return this.reset() 
      // if (event.target === this.$btn && this.keyword) {
      //   this.search(this.keyword, this.page)
      // }
      this.search(this.keyword, this.page)
    }
    reset() {
      this.keyword = ''
      this.page = 1
      this.$songList.innerHTML = ''
    }
    showBtn(){
      this.$input.style.width = `70%`
    }
    cancel(){
      console.log('aaaaa')
      this.$input.style.width = `100%`
      this.$songList.innerHTML = ''
      this.keyword = ''
      this.page = 1
      this.hotSearch.show()
    }
    search(keyword, page) { //发送请求
      if(this.isSearching) return //在搜索时直接返回
      this.hotSearch.$el.style.display = 'none'
      this.isSearching = true //`http://localhost:5000/search?keyword=${keyword}&page=${page}|| ${this.page}`
      this.$load.classList.remove('hide')
      fetch(`${SEARCH_URL}?keyword=${keyword}&page=${page}`)
        .then(res => res.json())
        .then(json => {
          this.noMore = (json.message === 'no results') //检查是否更新到最后一页
          this.page = json.data.song.curpage //更新this.page
          return json.data.song.list
          
        })
        .then(songs => this.appendSong(songs)) //渲染列表
        .then(() => {this.$load.classList.add('hide')})
        .then(() => {this.isSearching = false})
    }
    appendSong(songs) {
      let html = songs.map(song => {
        let artist = song.singer.map(s => s.name).join(' ')
        return `
        <a class= "song-item"
        href="#player?artist=${artist}&songid=${song.songid}&songname=${song.songname}&albummid=${song.albummid}&duration=${song.interval}" >
            <i class = "icon icon-music"></i>
            <h6 class="song-name">${song.songname}</h6>
            <p class="song-singer">${artist}</p>
        </a>`}).join('')  //a标签设置hash
      this.$songList.insertAdjacentHTML('beforeend', html)
    }

    //加载更多
    // document.body.scrollHeight 文档高度
    // document.documentElement.clientHeight 屏幕高度  pageYOffset已经滚动的距离

    scrolling() {
      if(this.noMore) return 
      if (document.documentElement.clientHeight + pageYOffset > document.body.scrollHeight - 10) {
        this.$load.classList.remove('hide')
        this.search(this.keyword, this.page+1)
        //this.$load.classList.add('hide')
      }
    }

    searchHot(event){
        let target = event.target
        console.log(target)
        if (target.classList.contains('search-title')) {
          this.hotSearch.$el.style.display = 'none'
          let keyword = target.innerText  //this.serach
          console.log(keyword)
          this.keyword = keyword
          this.search(this.keyword,this.page)
        }
    }

}



//let s = new Search(document.querySelector('.search-panel'))