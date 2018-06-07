//通过点击搜索结果，跳转至歌词播放器界面
import {Lyric} from './lyricplayer.js'
import {Progress} from './progressBar.js'
import {LYRICS_URL} from './constance.js'

export class Player {
  constructor(el) {
    this.$el = el
    this.$logoBtn = document.querySelector('.showplayer')
    this.$el.addEventListener('click', this) //点击切换播放、暂停
    this.createAudio()
    this.lyric =  new Lyric(document.querySelector('.player-lyrics'), text1) //创建歌词
    this.progress = new Progress(document.querySelector('.progress')) //新建进度条
    this.$logoBtn.addEventListener('click',this.logoPlay.bind(this))
    this.$exitBtn = this.$el.querySelector('.exit-btn')
    this.$exitBtn.addEventListener('click',this.fade.bind(this))

  }
  handleEvent(event) {
    let target = event.target
    if (target.classList.contains('icon-play')) { 
      this.onPlay(target)
    }else if (target.classList.contains('icon-pause')) {
      this.onPause(target)
    }
  }
  onPlay(target) {
    target.classList.remove('icon-play')
    target.classList.add('icon-pause')
    this.$audio.play() //播放音乐
    this.lyric.start() //展示歌词
    this.progress.start() //播放进度条
    // console.log('aaaa')
  }
  onPause(target) {
    target.classList.remove('icon-pause')
    target.classList.add('icon-play')
    this.$audio.pause()
    this.lyric.pause()
    this.progress.pause()
    // console.log('bbb')
  }
  createAudio() {   //创建一个audio标签
     this.$audio = document.createElement('audio')
    //this.$audio.loop = true //自动播放
    //this.$audio.src = ''
    this.$audio.addEventListener('ended',() => {
      // this.$audio.play()
      this.lyric.restart() //重新播放
      this.progress.restart()
    })
    document.body.appendChild(this.$audio)
    // return audio
  }
  play(options = {}) {
    if(!options) return
    this.$el.querySelector('.song_name').innerText = options.songname
    this.$el.querySelector('.song_artist').innerText = options.artist
    this.progress.reset(options.duration) //重设进度条播放
    let url = `https://y.gtimg.cn/music/photo_new/T002R150x150M000${options.albummid}.jpg`
    this.$el.querySelector('.player-header img').src = url
    this.$el.querySelector('.player-background').style.backgroundImage = `url(${url})`

    if(options.songid){
      this.songid = options.songid
      // this.$audio.src = `http://ws.stream.qqmusic.qq.com/${this.songid}.m4a?fromtag=46`
      fetch(`${LYRICS_URL}?id=${this.songid}`)
        .then(res => res.json())
        .then(json => {
           
           return json.lyric
        })
        .then(text => {
          console.log(this.lyric.reset(text))
          this.lyric.reset(text)
        }
        )
    }
    this.show()

  }
  show(){
    //this.$el.classList.remove('hide')
    this.$el.classList.add('show')
  }
  fade(){
    this.$el.classList.remove('show')
  }
  logoPlay(){
    this.show()
    //setInterval()
  }



}

//window.Player = Player

//export let player = new Player(document.querySelector('#player'))