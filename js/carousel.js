// 实现循环的轮播
//123451
export class Slider{
  constructor(el, data) {
    this.bulletNum = data.length
    data.splice(data.length, 0, data[0])
    this.data = data
    console.log(this.data)
    this.number = this.data.length
    console.log(this.number)
    this.$el = el
    this.$box = this.$el.querySelector('.slider-box')
    this.$bullets = this.$el.querySelector('.slider-bullet')
    this.render()
    this.index = 0 //当前图片
    this.start()
  }
  render() {
    this.$box.innerHTML = this.data.map(el =>
      `<div class="slider-item">
                <a href="#">
                <img src="${el.picUrl}" alt="slider">
                </a>
            </div>`
    ).join('')
    this.$bullets.innerHTML = `<ul class="bullet-wrapper"></ul>`
    this.$bulletWrapper = this.$bullets.querySelector('.bullet-wrapper')
    for (let i = 0; i < this.bulletNum; i++) {
      this.$bulletWrapper.innerHTML += `<li class="bullet"></li>`
    }
    this.$bullet = Array.from(document.querySelectorAll('.bullet'))

  }
  start() {
    setInterval(() => {
      this.play()
    }, 3000)
  }
  play() {
    if (this.index === this.number - 1) {
      this.$box.style.transitionDuration = `0ms`
      this.$box.style.transform = `translate(0)`
      //this.$box.style.transition = `0s`
      //this.$box.style.transition = `0s`
      this.index = 0
    }
    setTimeout(() => {
      this.$box.style.transition = `.3s`
      this.index += 1
      let x = `-${(this.index/this.number)*100}%`
      console.log(x)
      this.$box.style.transform = `translate(${x})`
      this.setBullet(this.index)
    }, 20)
  }
  setBullet(index) {
    if (index > this.bulletNum - 1) index = 0
    this.$bullet.forEach(el => {
      el.classList.remove('active')
    })
    console.log(this.$bullet)
    this.$bullet[index].classList.add('active')
  }

}



//let slider = new Slider(document.querySelector('#slider'))