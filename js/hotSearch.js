import {Search} from './search.js'

export class HotSearch {
  constructor(el) {
    this.$el = el
    
    //this.search = new Search()
    this.getData()
    //this.$el.addEventListener('click', this.startSearch.bind(this))
  }
  getData(){
    fetch('../json/hotSearch.json')
      .then(res => res.json())
      .then(json => this.render(json))
  }
  render(json){
    let hotKey = json.data.hotkey.slice(0,5)
    let specialKey = json.data.special_key   
    let specialUrl = json.data.special_url
    let html = hotKey.map(el => `<a class="item-title search-title">${el.k}</a>`).join('')
    this.$el.innerHTML = 
    ` <h3 class="hot-search-title">热门搜索</h3>
      <div class="item-list">
        <a class ="special-title item-title " href = "${specialUrl}" > ${specialKey}</a>
        ${html}
      </div>
      `

  }
  // startSearch(event){
  //   let target = event.target
  //   console.log(target)
  //   if (target.classList.contains('search-title')) {
  //     this.$el.style.display = 'none'
  //     let keyword = target.innerText  //this.serach
  //     console.log(keyword)
  //   }

  // }
  show(){
    this.$el.style.display = 'block'
  }
  hide(){
    this.$el.style.display = 'none'
  }
  
}