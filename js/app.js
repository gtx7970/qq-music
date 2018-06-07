// import {player} from './musicplayer';
import { Recommand } from "./recommand.js"
import { Search } from "./search.js";
import { Player  } from "./musicplayer.js";
import { RankList } from "./rank.js";
import {lazyLoad} from './lazyLoad.js'
//import {HotSearch} from './hotSearch.js'
import './tab.js'



let rec = new Recommand(document.querySelector('.recommand'))
let search =  new Search(document.querySelector('.search-panel'))
let rankList = new RankList(document.querySelector('.rank'))
let player = new Player(document.querySelector('#player'))
//let hotSearch = new HotSearch(document.querySelector('.hot-search'))
// fetch('./json/rec.json')
//   .then(res => res.json())
//   .then(render)



function hashChanging() {
  let hash = window.location.hash
  console.log(hash)
  if (/^#player\?.+/.test(hash)) { //匹配上以player开头的hash
    console.log(111)
    let matches = hash.slice(hash.indexOf('?') + 1).match(/(\w+)=([^&]+)/g)
    let options = matches && matches.reduce((pre, cur) => {
      let arr = cur.split('=')
      pre[arr[0]] = decodeURIComponent(arr[1]) //中文 转
      // console.log(options)
      return pre
    }, {}) //reduce 返回一个对象
    player.play(options) //解析参数播放
  }

}
// hashChanging()
window.addEventListener('hashchange', hashChanging)

function render(json) {
  getSliderArr(json.data.slider)
  renderRadio(json.data.radioList)
  renderSongList(json.data.songList)
  lazyLoad(document.querySelectorAll('.lazyload'))
}
  // new Search(document.querySelector('.search-panel'))
  // let player = new Player(document.querySelector('#player'))
  // window.player = player
  //hashChanging(player)
  //window.addEventListener('hashchange', hashChanging(player));
  //return player
  // function hashChanging() {
  //   let hash = window.location.hash
  //   console.log(hash)
  //   if (/^#player\?.+/.test(hash)) { //匹配上以player开头的hash
  //     let matches = hash.slice(hash.indexOf('?') + 1).match(/(\w+)=([^&]+)/g)
  //     let options = matches && matches.reduce((pre, cur) => {
  //       let arr = cur.split('=')
  //       pre[arr[0]] = arr[1]
  //       return pre
  //     }, {}) //reduce 返回一个对象
  //     player.play(options) //解析参数播放
  //   }

  // }

  // hashChanging()
  // window.addEventListener('hashchange', hashChanging);
  
  


// function getSliderArr(data) {
//   new Slider(document.querySelector('#slider'), data)
//   console.log(data)
// }

// function renderRadio(data) {
//   document.querySelector('.radio-item').innerHTML = data.map(el =>
//     `<div class="radio-media">
//         <img class="lazyload" data-src="${el.picUrl}">
//         <h3 class="radio-title">${el.Ftitle}</h3>
//     </div>
//     `).join('')
// }

// function renderSongList(data) {
//   document.querySelector('.hotSong').innerHTML = data.map(el =>
//     `<div class="radio-media">
//     <img class="lazyload" data-src="${el.picUrl}">
//     <h3 class="radio-title">${el.songListDesc}</h3>
//     <h3 class="author">${el.songListAuthor}</h3>
//     </div>`).join('')
// }

// let s = new Search(document.querySelector('.search-panel'))
//let player = new Player(document.querySelector('#player'))

// function hashChanging() {
//   let hash = window.location.hash
//   console.log(hash)
//   if (/^#player\?.+/.test(hash)) { //匹配上以player开头的hash
//     let matches = hash.slice(hash.indexOf('?') + 1).match(/(\w+)=([^&]+)/g)
//     let options = matches && matches.reduce((pre, cur) => {  
//       let arr = cur.split('=')
//       pre[arr[0]] = arr[1]
//       return pre
//     }, {})         //reduce 返回一个对象
//     player.play(options) //解析参数播放
//   }

// }

//  hashChanging()
//  window.addEventListener('hashchange', hashChanging);

//console.log(window.location.hash)