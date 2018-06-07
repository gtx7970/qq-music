export class Progress{
    constructor(el,duration,start){
        this.$el = el
        this.curtime = 0 //播放时间
        this.duration = duration || 0 //一首歌总的播放时间
        this.render()
        this.$curtime = this.$el.querySelector('.progress-curtime')
        this.$progress = this.$el.querySelector('.progress-bar-progress')
        this.$duration = this.$el.querySelector('.progress-duration')
        this.$curtime.innerText = this.formatTime(this.curtime) // 进度
        this.$duration.innerText = this.formatTime(this.duration) //总时间
        console.log(this.$el)
        console.log(this.formatTime(480))
        if(start)this.start()
    }
    render(){    //渲染
        this.$el.innerHTML = `
        <div class="progress-curtime"></div>
        <div class="progress-bar">
          <div class="progress-bar-progress"></div>
        </div>
        <div class="progress-duration"></div>
        `
    }
    start(){
        this.pause()
        this.interval = setInterval(this.update.bind(this),50) // 每50ms调用update
    }
    pause(){
        clearInterval(this.interval)
    }
    update(){
        this.curtime += 0.05
        if(this.curtime >= this.duration) {
            this.reset()
        }
    
        this.progress = (this.curtime / this.duration)*100 //百分比
        this.$progress.style.transform = `translate(${-100+this.progress}%)`
        this.$curtime.innerText = this.formatTime(this.curtime) 
        
    }
    reset(duration){   //换歌重置，会传入新的duration
        this.start()
        this.curtime = 0
        this.progress = 0
        this.$progress.style.transform = `translate(-100%)`
        if(duration){
            this.duration = +duration
            this.$duration.innerText = this.formatTime(this.duration)
        }
    }
    formatTime(time){  //时间 => 00:00形式
        let min = Math.floor(time / 60)
        let sec = Math.floor(time % 60)
        if(min<10){min = '0' + min}
        if(sec<10){sec = '0' + sec}
        return `${min}:${sec}`
    }
    restart(){}
}



 