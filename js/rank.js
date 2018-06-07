import {TOPLIST_URL } from './constance.js'
import {lazyLoad} from './lazyLoad.js'

export class RankList{
  constructor(el){
    this.$el = el
    this.getData()
  }
  getData(){
    fetch(TOPLIST_URL)
      .then(res => res.json())
      .then(json => this.renderlist(json))
  }
  renderlist(json) {
    let html = json.data.topList.map(el => {
      let list = el.songList.map((e, index) =>
        `<li>
          <p>
            <span>${index+1}</span>
            <span class="text-name">${e.singername}</span>
            <span>${e.songname}</span>
          </p>
          </li>`).join('')

      return `<li class="ranklist">
                <a href="#">
                  <img data-src = "${el.picUrl}" class="lazyload">
                </a>
                <div class="detail">
                  <h2 class="rank-title">${el.topTitle}</h2>
                  <ul> ${list}</ul>
                </div>
              </li>`
    }).join('')
    document.querySelector('.topList').innerHTML = html
    lazyLoad(this.$el.querySelectorAll('.ranklist .lazyload'))
  }
  }









// fetch('./json/rankList.json')
//     .then(res => res.json())
//     .then(renderlist)






//     function renderlist(data){
//     let html = data.data.topList.map(el =>{
//       let list = el.songList.map((e,index) =>
//       `<li>
//         <p>
//           <span>${index+1}</span>
//           <span class="text-name">${e.singername}</span>
//           <span>${e.songname}</span>
//         </p>
//       </li>`).join('')

//       return `<li class="ranklist">
//                 <a href="#">
//                   <img data-src = "${el.picUrl}" class="lazyload">
//                 </a>
//                 <div class="detail">
//                   <h2 class="rank-title">${el.topTitle}</h2>
//                   <ul> ${list}</ul>
//                 </div>
//               </li>`}).join('')
//     document.querySelector('.topList').innerHTML = html
// }
