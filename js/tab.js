

//tab切换
export class Tab {
  constructor(el) {
    this.$el = el
    this.$el.addEventListener('click', this)
  }
  handleEvent(event) {
    let target = event.target
    let childNodes = target.parentElement.children
    let index = Array.prototype.indexOf.call(childNodes, target) //确定下标
    let content = document.querySelectorAll('.tab-content')
    Array.prototype.forEach.call(childNodes, (el) => {
      let idx = index
      el.classList.remove('active')
    })
    target.classList.add('active')
    Array.prototype.forEach.call(content, e => {
      e.style.display = 'none'
    })
    content[index].style.display = 'block'
  }
}

// Tab.prototype = {
//     constructor:Tab,
//     handleEvent:function(event){
//         let target = event.target
//         let childNodes = target.parentElement.children
//         let index = Array.prototype.indexOf.call(childNodes,target) //确定下标
//         let content = document.querySelectorAll('.tab-content')
//         Array.prototype.forEach.call(childNodes,(el) =>{
//             let idx = index
//             el.classList.remove('active')     
//         })
//         target.classList.add('active')
//         Array.prototype.forEach.call(content,e => {
//             e.style.display = 'none'  
//         })
//         content[index].style.display = 'block'       
//     }
// }

let tab = new Tab(document.querySelector('.nav-bar'))