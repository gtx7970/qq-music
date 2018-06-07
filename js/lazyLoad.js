//将需要懒加载的图片设置class=“lazyload”
//懒加载，图片出现在用户视线后再加载
//图片链接设置在data-src
//监听页面的scroll事件，

export function lazyLoad(el){  //传入的是一个nodelist
  let imgs = Array.from(el) //转成数组
  console.log(imgs)

  let scrolling = throttle(() =>{
    imgs = imgs.filter(img => img.classList.contains('lazyload'))
    imgs.forEach(img => {
      console.log(img)
      if (isShow(img)) {
        loadImg(img)
      }
    })
  }, 500)
 //监听屏幕滚动事件
  window.dispatchEvent(new Event('scroll')) //开始时手动触发一次滚动事件
  window.addEventListener('scroll',scrolling) //监听
}
//判断元素是否出现在视窗
function isShow(img) {
  let {
    top,
    left,
    right,
    bottom
  } = img.getBoundingClientRect()
  console.log(img.getBoundingClientRect())
  let vpWidth = document.documentElement.clientWidth
  let vpHeight = document.documentElement.clientHeight
  return (
    (top > 0 && top < vpHeight || bottom > 0 && bottom < vpHeight) &&
    (left > 0 && left < vpWidth || right > 0 && right < vpWidth)
  )
}
 //节流
function throttle(fn, wait) {
  let pre
  let timer
  return function () {
    let cur = Date.now()
    let diff = cur - pre
    if (!pre || diff >= wait) {
      fn()
      pre = cur
    } else if (diff < wait) {
      clearTimeout(timer)
      timer = setTimeout(fn, wait - diff)
    }
  }
}

//加载图片
function loadImg(pic) {
  console.log(pic)
  pic.setAttribute('src', pic.dataset.src)
  pic.classList.remove('lazyload')
  // let img = new Image()
  // img.src = pic.dataset.src
  // img.onload = function(){
  //     pic.src = img.src
  //     pic.classList.remove('lazyload')
  // }
}


