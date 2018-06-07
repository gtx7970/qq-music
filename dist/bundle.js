!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LYRICS_URL=t.SEARCH_URL=t.TOPLIST_URL=t.RECOMMEND_URL=void 0;t.RECOMMEND_URL="https://qq-music-api.now.sh";t.TOPLIST_URL="https://qq-music-api.now.sh/top";t.SEARCH_URL="https://qq-music-api.now.sh/search";t.LYRICS_URL="https://qq-music-api.now.sh/lyrics"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.lazyLoad=function(e){var t=Array.from(e);console.log(t);var n=(i=function(){(t=t.filter(function(e){return e.classList.contains("lazyload")})).forEach(function(e){var t;console.log(e),function(e){var t=e.getBoundingClientRect(),n=t.top,i=t.left,r=t.right,s=t.bottom;console.log(e.getBoundingClientRect());var a=document.documentElement.clientWidth,o=document.documentElement.clientHeight;return(n>0&&n<o||s>0&&s<o)&&(i>0&&i<a||r>0&&r<a)}(e)&&(t=e,console.log(t),t.setAttribute("src",t.dataset.src),t.classList.remove("lazyload"))})},r=500,function(){var e=Date.now(),t=e-s;!s||t>=r?(i(),s=e):t<r&&(clearTimeout(a),a=setTimeout(i,r-t))});var i,r,s,a;window.dispatchEvent(new Event("scroll")),window.addEventListener("scroll",n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Search=void 0;var i=n(8),r=n(0);function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=t,this.$load=document.querySelector(".loading"),this.$input=this.$el.querySelector(".search-bar"),this.$cancel=this.$el.querySelector(".cancel-btn"),this.$songList=document.querySelector(".search-result"),this.$input.addEventListener("keyup",this.start.bind(this)),this.$input.addEventListener("focus",this.showBtn.bind(this)),this.$cancel.addEventListener("click",this.cancel.bind(this)),this.keyword="",this.page=1,this.noMore=!1,this.isSearching=!1,this.songs=[],window.addEventListener("scroll",this.scrolling.bind(this)),this.hotSearch=new i.HotSearch(document.querySelector(".hot-search")),this.hotSearch.$el.addEventListener("click",this.searchHot.bind(this))}var t,n,a;return t=e,(n=[{key:"start",value:function(e){if(13===e.keyCode){var t=this.$input.value.trim();if(this.keyword=t,!this.keyword)return this.reset();this.search(this.keyword,this.page)}}},{key:"reset",value:function(){this.keyword="",this.page=1,this.$songList.innerHTML=""}},{key:"showBtn",value:function(){this.$input.style.width="70%"}},{key:"cancel",value:function(){console.log("aaaaa"),this.$input.style.width="100%",this.$songList.innerHTML="",this.keyword="",this.page=1,this.hotSearch.show()}},{key:"search",value:function(e,t){var n=this;this.isSearching||(this.hotSearch.$el.style.display="none",this.isSearching=!0,this.$load.classList.remove("hide"),fetch("".concat(r.SEARCH_URL,"?keyword=").concat(e,"&page=").concat(t)).then(function(e){return e.json()}).then(function(e){return n.noMore="no results"===e.message,n.page=e.data.song.curpage,e.data.song.list}).then(function(e){return n.appendSong(e)}).then(function(){n.$load.classList.add("hide")}).then(function(){n.isSearching=!1}))}},{key:"appendSong",value:function(e){var t=e.map(function(e){var t=e.singer.map(function(e){return e.name}).join(" ");return'\n        <a class= "song-item"\n        href="#player?artist='.concat(t,"&songid=").concat(e.songid,"&songname=").concat(e.songname,"&albummid=").concat(e.albummid,"&duration=").concat(e.interval,'" >\n            <i class = "icon icon-music"></i>\n            <h6 class="song-name">').concat(e.songname,'</h6>\n            <p class="song-singer">').concat(t,"</p>\n        </a>")}).join("");this.$songList.insertAdjacentHTML("beforeend",t)}},{key:"scrolling",value:function(){this.noMore||document.documentElement.clientHeight+pageYOffset>document.body.scrollHeight-10&&(this.$load.classList.remove("hide"),this.search(this.keyword,this.page+1))}},{key:"searchHot",value:function(e){var t=e.target;if(console.log(t),t.classList.contains("search-title")){this.hotSearch.$el.style.display="none";var n=t.innerText;console.log(n),this.keyword=n,this.search(this.keyword,this.page)}}}])&&s(t.prototype,n),a&&s(t,a),e}();t.Search=a},function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}Object.defineProperty(t,"__esModule",{value:!0}),t.Tab=void 0;var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=t,this.$el.addEventListener("click",this)}var t,n,r;return t=e,(n=[{key:"handleEvent",value:function(e){var t=e.target,n=t.parentElement.children,i=Array.prototype.indexOf.call(n,t),r=document.querySelectorAll(".tab-content");Array.prototype.forEach.call(n,function(e){e.classList.remove("active")}),t.classList.add("active"),Array.prototype.forEach.call(r,function(e){e.style.display="none"}),r[i].style.display="block"}}])&&i(t.prototype,n),r&&i(t,r),e}();t.Tab=r;new r(document.querySelector(".nav-bar"))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RankList=void 0;var i=n(0),r=n(1);function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=t,this.getData()}var t,n,a;return t=e,(n=[{key:"getData",value:function(){var e=this;fetch(i.TOPLIST_URL).then(function(e){return e.json()}).then(function(t){return e.renderlist(t)})}},{key:"renderlist",value:function(e){var t=e.data.topList.map(function(e){var t=e.songList.map(function(e,t){return"<li>\n          <p>\n            <span>".concat(t+1,'</span>\n            <span class="text-name">').concat(e.singername,"</span>\n            <span>").concat(e.songname,"</span>\n          </p>\n          </li>")}).join("");return'<li class="ranklist">\n                <a href="#">\n                  <img data-src = "'.concat(e.picUrl,'" class="lazyload">\n                </a>\n                <div class="detail">\n                  <h2 class="rank-title">').concat(e.topTitle,"</h2>\n                  <ul> ").concat(t,"</ul>\n                </div>\n              </li>")}).join("");document.querySelector(".topList").innerHTML=t,(0,r.lazyLoad)(this.$el.querySelectorAll(".ranklist .lazyload"))}}])&&s(t.prototype,n),a&&s(t,a),e}();t.RankList=a},function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}Object.defineProperty(t,"__esModule",{value:!0}),t.Progress=void 0;var r=function(){function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=t,this.curtime=0,this.duration=n||0,this.render(),this.$curtime=this.$el.querySelector(".progress-curtime"),this.$progress=this.$el.querySelector(".progress-bar-progress"),this.$duration=this.$el.querySelector(".progress-duration"),this.$curtime.innerText=this.formatTime(this.curtime),this.$duration.innerText=this.formatTime(this.duration),console.log(this.$el),console.log(this.formatTime(480)),i&&this.start()}var t,n,r;return t=e,(n=[{key:"render",value:function(){this.$el.innerHTML='\n        <div class="progress-curtime"></div>\n        <div class="progress-bar">\n          <div class="progress-bar-progress"></div>\n        </div>\n        <div class="progress-duration"></div>\n        '}},{key:"start",value:function(){this.pause(),this.interval=setInterval(this.update.bind(this),50)}},{key:"pause",value:function(){clearInterval(this.interval)}},{key:"update",value:function(){this.curtime+=.05,this.curtime>=this.duration&&this.reset(),this.progress=this.curtime/this.duration*100,this.$progress.style.transform="translate(".concat(-100+this.progress,"%)"),this.$curtime.innerText=this.formatTime(this.curtime)}},{key:"reset",value:function(e){this.start(),this.curtime=0,this.progress=0,this.$progress.style.transform="translate(-100%)",e&&(this.duration=+e,this.$duration.innerText=this.formatTime(this.duration))}},{key:"formatTime",value:function(e){var t=Math.floor(e/60),n=Math.floor(e%60);return t<10&&(t="0"+t),n<10&&(n="0"+n),"".concat(t,":").concat(n)}},{key:"restart",value:function(){}}])&&i(t.prototype,n),r&&i(t,r),e}();t.Progress=r},function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}Object.defineProperty(t,"__esModule",{value:!0}),t.Lyric=void 0,window.text1='"retcode":0,"code":0,"subcode":0,"type":1,"songt":0,"lyric":"[ti&#58;IF&#32;YOU]&#10;[ar&#58;BIGBANG]&#10;[al&#58;]&#10;[by&#58;]&#10;[offset&#58;0]&#10;[00&#58;00&#46;71]IF&#32;YOU&#32;&#45;&#32;BIGBANG&#32;&#40;빅뱅&#41;&#10;[00&#58;03&#46;20]词：G&#45;DRAGON&#10;[00&#58;05&#46;55]曲：G&#45;DRAGON/P&#46;K/DEE&#46;P&#10;[00&#58;09&#46;43]编曲：P&#46;K/DEE&#46;P&#10;[00&#58;11&#46;81]&#10;[00&#58;14&#46;45]그녀가&#32;떠나가요&#10;[00&#58;17&#46;48]&#10;[00&#58;21&#46;00]나는&#32;아무것도&#32;할&#32;수&#32;없어요&#10;[00&#58;24&#46;40]&#10;[00&#58;27&#46;64]사랑이&#32;떠나가요&#10;[00&#58;30&#46;94]&#10;[00&#58;33&#46;52]나는&#32;바보처럼&#32;멍하니&#32;서있네요&#10;[00&#58;38&#46;04]&#10;[00&#58;39&#46;95]멀어지는&#32;그&#32;뒷모습만을&#32;바라보다&#10;[00&#58;45&#46;13]&#10;[00&#58;46&#46;79]작은&#32;점이&#32;되어&#32;사라진다&#10;[00&#58;51&#46;91]&#10;[00&#58;54&#46;24]시간이&#32;지나면&#32;또&#32;무뎌질까&#10;[00&#58;59&#46;25]&#10;[01&#58;00&#46;06]옛&#32;생각이&#32;나&#10;[01&#58;01&#46;99]&#10;[01&#58;03&#46;37]니&#32;생각이&#32;나&#10;[01&#58;05&#46;06]&#10;[01&#58;07&#46;80]If&#32;you&#10;[01&#58;09&#46;49]&#10;[01&#58;10&#46;87]If&#32;you&#10;[01&#58;12&#46;93]&#10;[01&#58;14&#46;46]아직&#32;너무&#32;늦지&#32;않았다면&#10;[01&#58;17&#46;39]우리&#32;다시&#32;돌아갈&#32;수는&#32;없을까&#10;[01&#58;20&#46;38]&#10;[01&#58;21&#46;29]If&#32;you&#10;[01&#58;22&#46;94]&#10;[01&#58;24&#46;27]If&#32;you&#10;[01&#58;25&#46;66]&#10;[01&#58;27&#46;86]너도&#32;나와&#32;같이&#32;힘들다면&#10;[01&#58;30&#46;22]&#10;[01&#58;31&#46;01]우리&#32;조금&#32;쉽게&#32;갈&#32;수는&#32;없을까&#10;[01&#58;33&#46;75]&#10;[01&#58;35&#46;08]있을&#32;때&#32;잘할&#32;걸&#32;그랬어&#10;[01&#58;42&#46;13]&#10;[01&#58;45&#46;63]그대는&#32;어떤가요&#10;[01&#58;48&#46;61]&#10;[01&#58;52&#46;19]정말&#32;아무렇지&#32;않은&#32;건가요&#10;[01&#58;55&#46;77]&#10;[01&#58;58&#46;93]이별이&#32;지나봐요&#10;[02&#58;02&#46;80]&#10;[02&#58;04&#46;72]그댈&#32;잊어야&#32;하지만&#32;쉽지가&#32;않네요&#10;[02&#58;09&#46;14]&#10;[02&#58;11&#46;39]멀어지는&#32;그&#32;뒷모습만을&#32;바라보다&#10;[02&#58;16&#46;46]&#10;[02&#58;18&#46;28]작은&#32;점이&#32;되어&#32;사라진다&#10;[02&#58;23&#46;21]&#10;[02&#58;25&#46;64]누군갈&#32;만나면&#32;위로가&#32;될까&#10;[02&#58;30&#46;24]&#10;[02&#58;31&#46;27]옛&#32;생각이&#32;나&#10;[02&#58;33&#46;10]&#10;[02&#58;34&#46;69]니&#32;생각이&#32;나&#10;[02&#58;36&#46;28]&#10;[02&#58;38&#46;87]If&#32;you&#10;[02&#58;40&#46;68]&#10;[02&#58;42&#46;09]If&#32;you&#10;[02&#58;44&#46;27]&#10;[02&#58;45&#46;51]아직&#32;너무&#32;늦지&#32;않았다면&#10;[02&#58;48&#46;03]&#10;[02&#58;48&#46;71]우리&#32;다시&#32;돌아갈&#32;수는&#32;없을까&#10;[02&#58;51&#46;29]&#10;[02&#58;52&#46;61]If&#32;you&#10;[02&#58;54&#46;07]&#10;[02&#58;55&#46;51]If&#32;you&#10;[02&#58;57&#46;76]&#10;[02&#58;59&#46;00]너도&#32;나와&#32;같이&#32;힘들다면&#10;[03&#58;01&#46;34]&#10;[03&#58;02&#46;03]우리&#32;조금&#32;쉽게&#32;갈&#32;수는&#32;없을까&#10;[03&#58;05&#46;18]&#10;[03&#58;06&#46;31]있을&#32;때&#32;잘할&#32;걸&#32;그랬어&#10;[03&#58;13&#46;97]&#10;[03&#58;16&#46;43]오늘같이&#32;가녀린&#32;비가&#32;내리는&#32;날이면&#10;[03&#58;19&#46;75]너의&#32;그림자가&#32;떠오르고&#10;[03&#58;22&#46;15]&#10;[03&#58;23&#46;27]서랍&#32;속에&#32;몰래&#32;넣어둔&#32;우리의&#32;추억을&#10;[03&#58;26&#46;38]다시&#32;꺼내&#32;홀로&#32;회상하고&#10;[03&#58;28&#46;76]&#10;[03&#58;30&#46;02]헤어짐이란&#32;슬픔의&#32;무게를&#10;[03&#58;35&#46;76]&#10;[03&#58;36&#46;83]난&#32;왜&#32;몰랐을까&#10;[03&#58;40&#46;46]&#10;[03&#58;43&#46;18]If&#32;you&#10;[03&#58;44&#46;48]&#10;[03&#58;46&#46;28]If&#32;you&#10;[03&#58;48&#46;35]&#10;[03&#58;50&#46;08]아직&#32;너무&#32;늦지&#32;않았다면&#10;[03&#58;52&#46;23]&#10;[03&#58;52&#46;81]우리&#32;다시&#32;돌아갈&#32;수는&#32;없을까&#10;[03&#58;55&#46;37]&#10;[03&#58;56&#46;69]If&#32;you&#10;[03&#58;58&#46;26]&#10;[03&#58;59&#46;93]If&#32;you&#10;[04&#58;01&#46;75]&#10;[04&#58;03&#46;30]너도&#32;나와&#32;같이&#32;힘들다면&#10;[04&#58;06&#46;21]우리&#32;조금&#32;쉽게&#32;갈&#32;수는&#32;없을까&#10;[04&#58;09&#46;26]&#10;[04&#58;10&#46;22]있을&#32;때&#32;잘할&#32;걸&#32;그랬어"';var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=t,this.curTime=0,this.$el.innerHTML='<div class="lyric-line"></div>',this.$line=this.$el.querySelector(".lyric-line"),this.index=0,this.text=this.formatText(n),console.log(this.text),this.lyric=[],this.resetLyric(),console.log(this.lyric),this.render(),this.start()}var t,n,r;return t=e,(n=[{key:"resetLyric",value:function(){this.text&&(this.lyric=this.text.match(/\[\d{2}:\d{2}.\d{2}\].+/gm))}},{key:"formatText",value:function(e){var t=document.createElement("div");return t.innerHTML=e,t.innerText}},{key:"render",value:function(){var e=this.lyric.map(function(e){return'\n        <div class="play-lyric-line">'.concat(e.slice(10),"</div>    \n        ")}).join("");this.$line.innerHTML=e}},{key:"start",value:function(){this.interval=setInterval(this.update.bind(this),500)}},{key:"pause",value:function(){clearInterval(this.interval)}},{key:"update",value:function(){if(this.curTime+=.5,this.index!==this.lyric.length-1){for(var e=this.index+1;e<this.lyric.length;e++){var t=this.getSec(this.lyric[e]);if(this.curTime===t&&(!this.lyric[e+1]||this.curTime<this.getSec(this.lyric[e+1]))){this.$line.children[this.index].classList.remove("active"),this.$line.children[e].classList.add("active"),this.index=e;break}}if(this.index>2){var n=42*-(this.index-2);this.$line.style.transform="translateY(".concat(n,"px)")}}}},{key:"getSec",value:function(e){return+e.replace(/^\[(\d{2}):(\d{2}).*/,function(e,t,n){return 60*+t+ +n})}},{key:"reset",value:function(e){this.pause(),this.index=0,this.curTime=0,this.$line.style.transform="translateY(0)";var t=this.$line.querySelector(".active");t&&t.classList.remove("active"),e&&(this.text=this.formatText(e),this.resetLyric(),this.lyric.length&&this.render()),this.lyric.length&&this.$line.children[this.index].classList.add("active")}},{key:"restart",value:function(){this.reset(),this.start()}}])&&i(t.prototype,n),r&&i(t,r),e}();t.Lyric=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Player=void 0;var i=n(6),r=n(5),s=n(0);function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=t,this.$logoBtn=document.querySelector(".showplayer"),this.$el.addEventListener("click",this),this.createAudio(),this.lyric=new i.Lyric(document.querySelector(".player-lyrics"),text1),this.progress=new r.Progress(document.querySelector(".progress")),this.$logoBtn.addEventListener("click",this.logoPlay.bind(this)),this.$exitBtn=this.$el.querySelector(".exit-btn"),this.$exitBtn.addEventListener("click",this.fade.bind(this))}var t,n,o;return t=e,(n=[{key:"handleEvent",value:function(e){var t=e.target;t.classList.contains("icon-play")?this.onPlay(t):t.classList.contains("icon-pause")&&this.onPause(t)}},{key:"onPlay",value:function(e){e.classList.remove("icon-play"),e.classList.add("icon-pause"),this.$audio.play(),this.lyric.start(),this.progress.start()}},{key:"onPause",value:function(e){e.classList.remove("icon-pause"),e.classList.add("icon-play"),this.$audio.pause(),this.lyric.pause(),this.progress.pause()}},{key:"createAudio",value:function(){var e=this;this.$audio=document.createElement("audio"),this.$audio.addEventListener("ended",function(){e.lyric.restart(),e.progress.restart()}),document.body.appendChild(this.$audio)}},{key:"play",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(t){this.$el.querySelector(".song_name").innerText=t.songname,this.$el.querySelector(".song_artist").innerText=t.artist,this.progress.reset(t.duration);var n="https://y.gtimg.cn/music/photo_new/T002R150x150M000".concat(t.albummid,".jpg");this.$el.querySelector(".player-header img").src=n,this.$el.querySelector(".player-background").style.backgroundImage="url(".concat(n,")"),t.songid&&(this.songid=t.songid,fetch("".concat(s.LYRICS_URL,"?id=").concat(this.songid)).then(function(e){return e.json()}).then(function(e){return e.lyric}).then(function(t){console.log(e.lyric.reset(t)),e.lyric.reset(t)})),this.show()}}},{key:"show",value:function(){this.$el.classList.add("show")}},{key:"fade",value:function(){this.$el.classList.remove("show")}},{key:"logoPlay",value:function(){this.show()}}])&&a(t.prototype,n),o&&a(t,o),e}();t.Player=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HotSearch=void 0;n(2);function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=t,this.getData()}var t,n,r;return t=e,(n=[{key:"getData",value:function(){var e=this;fetch("../json/hotSearch.json").then(function(e){return e.json()}).then(function(t){return e.render(t)})}},{key:"render",value:function(e){var t=e.data.hotkey.slice(0,5),n=e.data.special_key,i=e.data.special_url,r=t.map(function(e){return'<a class="item-title search-title">'.concat(e.k,"</a>")}).join("");this.$el.innerHTML=' <h3 class="hot-search-title">热门搜索</h3>\n      <div class="item-list">\n        <a class ="special-title item-title " href = "'.concat(i,'" > ').concat(n,"</a>\n        ").concat(r,"\n      </div>\n      ")}},{key:"show",value:function(){this.$el.style.display="block"}},{key:"hide",value:function(){this.$el.style.display="none"}}])&&i(t.prototype,n),r&&i(t,r),e}();t.HotSearch=r},function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}Object.defineProperty(t,"__esModule",{value:!0}),t.Slider=void 0;var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.bulletNum=n.length,n.splice(n.length,0,n[0]),this.data=n,console.log(this.data),this.number=this.data.length,console.log(this.number),this.$el=t,this.$box=this.$el.querySelector(".slider-box"),this.$bullets=this.$el.querySelector(".slider-bullet"),this.render(),this.index=0,this.start()}var t,n,r;return t=e,(n=[{key:"render",value:function(){this.$box.innerHTML=this.data.map(function(e){return'<div class="slider-item">\n                <a href="#">\n                <img src="'.concat(e.picUrl,'" alt="slider">\n                </a>\n            </div>')}).join(""),this.$bullets.innerHTML='<ul class="bullet-wrapper"></ul>',this.$bulletWrapper=this.$bullets.querySelector(".bullet-wrapper");for(var e=0;e<this.bulletNum;e++)this.$bulletWrapper.innerHTML+='<li class="bullet"></li>';this.$bullet=Array.from(document.querySelectorAll(".bullet"))}},{key:"start",value:function(){var e=this;setInterval(function(){e.play()},3e3)}},{key:"play",value:function(){var e=this;this.index===this.number-1&&(this.$box.style.transitionDuration="0ms",this.$box.style.transform="translate(0)",this.index=0),setTimeout(function(){e.$box.style.transition=".3s",e.index+=1;var t="-".concat(e.index/e.number*100,"%");console.log(t),e.$box.style.transform="translate(".concat(t,")"),e.setBullet(e.index)},20)}},{key:"setBullet",value:function(e){e>this.bulletNum-1&&(e=0),this.$bullet.forEach(function(e){e.classList.remove("active")}),console.log(this.$bullet),this.$bullet[e].classList.add("active")}}])&&i(t.prototype,n),r&&i(t,r),e}();t.Slider=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Recommand=void 0;var i=n(0),r=n(9),s=n(1);function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=t,this.getData()}var t,n,o;return t=e,(n=[{key:"getData",value:function(){var e=this;fetch(i.RECOMMEND_URL).then(function(e){return e.json()}).then(function(t){return e.render(t)})}},{key:"render",value:function(e){this.getSliderArr(e.data.slider),this.renderRadio(e.data.radioList),this.renderSongList(e.data.songList),(0,s.lazyLoad)(document.querySelectorAll(".recommand .lazyload"))}},{key:"getSliderArr",value:function(e){new r.Slider(document.querySelector("#slider"),e),console.log(e)}},{key:"renderRadio",value:function(e){document.querySelector(".radio-item").innerHTML=e.map(function(e){return'<div class="radio-media">\n         <div class="img-item" >\n        <img class="lazyload" data-src="'.concat(e.picUrl,'">\n        </div>\n        <div class = "list-detail" >\n        <h3 class="radio-title">').concat(e.Ftitle,"</h3>\n        </div>\n    </div>\n    ")}).join("")}},{key:"renderSongList",value:function(e){document.querySelector(".hotSong").innerHTML=e.map(function(e){return'<div class="radio-media">\n    <div class="img-item">\n    <img class="lazyload" data-src="'.concat(e.picUrl,'">\n    </div>\n    <div class="list-detail">\n    <h3 class="radio-title">').concat(e.songListDesc,"</h3>\n    </div>\n    </div>")}).join("")}}])&&a(t.prototype,n),o&&a(t,o),e}();t.Recommand=o},function(e,t,n){"use strict";var i=n(10),r=n(2),s=n(7),a=n(4);n(1);n(3);new i.Recommand(document.querySelector(".recommand")),new r.Search(document.querySelector(".search-panel")),new a.RankList(document.querySelector(".rank"));var o=new s.Player(document.querySelector("#player"));window.addEventListener("hashchange",function(){var e=window.location.hash;if(console.log(e),/^#player\?.+/.test(e)){console.log(111);var t=e.slice(e.indexOf("?")+1).match(/(\w+)=([^&]+)/g),n=t&&t.reduce(function(e,t){var n=t.split("=");return e[n[0]]=decodeURIComponent(n[1]),e},{});o.play(n)}})}]);