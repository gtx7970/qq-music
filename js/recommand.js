import { RECOMMEND_URL } from './constance.js'
import {Slider} from './carousel.js'
import {lazyLoad} from './lazyLoad.js';

export class Recommand{
    constructor(el){
      this.$el = el  
      this.getData()
    }
    getData(){
      fetch(RECOMMEND_URL) 
        .then(res => res.json())
        .then(json => this.render(json))   //发送首页推荐请求
    }
    render(json){
      this.getSliderArr(json.data.slider) 
      this.renderRadio(json.data.radioList)
      this.renderSongList(json.data.songList)
      lazyLoad(document.querySelectorAll('.recommand .lazyload'))
    }
    getSliderArr(data) {
      new Slider(document.querySelector('#slider'), data)
      console.log(data)
    }

    renderRadio(data) {
      document.querySelector('.radio-item').innerHTML = data.map(el =>
        `<div class="radio-media">
         <div class="img-item" >
        <img class="lazyload" data-src="${el.picUrl}">
        </div>
        <div class = "list-detail" >
        <h3 class="radio-title">${el.Ftitle}</h3>
        </div>
    </div>
    `).join('')
    }

    renderSongList(data) {
      document.querySelector('.hotSong').innerHTML = data.map(el =>
        `<div class="radio-media">
    <div class="img-item">
    <img class="lazyload" data-src="${el.picUrl}">
    </div>
    <div class="list-detail">
    <h3 class="radio-title">${el.songListDesc}</h3>
    </div>
    </div>`).join('')
    }
}