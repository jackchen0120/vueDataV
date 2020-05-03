<!--
 描述: 闪动云
 作者: Jack Chen
 日期: 2020-05-02
-->

<template>
  <div class="wrap-container sn-container"> 
    <div class="sn-content"> 
      <div class="sn-title">闪动云</div> 
      <div class="sn-body"> 
        <div class="wrap-container cloud"> 
          
          <div class="pd-main-left"> 
           <div class="yun-container"> 
            <div class="yun-tree"></div> 
            <div class="line-fs"></div> 
            <div class="line-fs"></div> 
            <div class="line-fs"></div> 
            <div class="line-fs"></div> 
            <div class="line-fs"></div> 
            <div class="line-fs"></div> 
            <div class="line-fs"></div> 
            <div class="line-fs"></div> 
            <div class="line-fs"></div> 
           </div>

           <div id="yunText" class="yun-text"> 
            <div :id="`yunText-${index + 1}`" :class="{'span-flash': number == index }" v-for="(item, index) in arrData" :key="index">
              <span :title="item.title">{{ item.title }}</span>
            </div>
           </div> 
          </div>

        </div> 
      </div> 
    </div>   
  </div>
</template>

<script>
export default {
  name: "flashCloud",
  data() {
    return {
      number: 0,
      arrData: [{
        title: 'JavaScript'
      },{
        title: 'Vue.js'
      },{
        title: 'React.js'
      },{
        title: 'Node.js'
      },{
        title: 'Angular'
      },{
        title: 'HTML5'
      },{
        title: 'CSS3'
      },{
        title: 'jQuery'
      },{
        title: 'Typescript'
      },{
        title: 'Bootstrap'
      },{
        title: 'WebApp'
      },{
        title: '小程序'
      },{
        title: 'HTTP'
      },{
        title: 'Sass/Less'
      },{
        title: 'Webpack'
      },{
        title: 'ES6'
      }]
      
    }
  },
  mounted() {
    let len = 5;
    this.timer = setInterval(() => {
      this.number = parseInt(Math.random() * 15, 10);
      if (len == 0) {
        len = 5;
        return this.arrData.sort(() => Math.random() - 0.5);
      } else {
        len--;
      }
    }, 2000)
  },
  methods: {
    
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style lang="scss" scoped>
.sn-container {
  left: 512px;
  top: 1978px;
  width: 432px;
  height: 400px;
  .cloud {
    left: 55px;
    top: 0;
    width: 80%;
    height: 100%;
  }

  .pd-main-left {
    position: relative;
    width: 310px;
    height: 335px;
    .yun-container {
      width: 100%;
      height: 100%;
      > div {
        &:nth-child(2) {
          height: 90%;
          -webkit-animation-duration: 2s;
          -moz-animation-duration: 2s;
          -o-animation-duration: 2s;
          animation-duration: 2s;
          -webkit-animation-delay: 1.5s;
          -moz-animation-delay: 1.5s;
          -o-animation-delay: 1.5s;
          animation-delay: 1.5s;
          bottom: 0;
          left: 51px;
        }
        &:nth-child(3) {
          height: 100%;
          -webkit-animation-duration: 3s;
          -moz-animation-duration: 3s;
          -o-animation-duration: 3s;
          animation-duration: 3s;
          -webkit-animation-delay: 0s;
          -moz-animation-delay: 0s;
          -o-animation-delay: 0s;
          animation-delay: 0s;
          bottom: 32px;
          left: 89px;
        }
        &:nth-child(4) {
          height: 100%;
          -webkit-animation-duration: 2.5s;
          -moz-animation-duration: 2.5s;
          -o-animation-duration: 2.5s;
          animation-duration: 2.5s;
          -webkit-animation-delay: 1s;
          -moz-animation-delay: 1s;
          -o-animation-delay: 1s;
          animation-delay: 1s;
          bottom: 3px;
          left: 179px;
          -webkit-filter: hue-rotate(180deg);
          filter: hue-rotate(180deg);
        }
        &:nth-child(5) {
          height: 90%;
          -webkit-animation-duration: 2s;
          -moz-animation-duration: 2s;
          -o-animation-duration: 2s;
          animation-duration: 2s;
          -webkit-animation-delay: 2s;
          -moz-animation-delay: 2s;
          -o-animation-delay: 2s;
          animation-delay: 2s;
          bottom: 42px;
          left: 229px;
        }
        &:nth-child(6) {
          height: 100%;
          -webkit-animation-duration: 2.5s;
          -moz-animation-duration: 2.5s;
          -o-animation-duration: 2.5s;
          animation-duration: 2.5s;
          -webkit-animation-delay: 0.5s;
          -moz-animation-delay: 0.5s;
          -o-animation-delay: 0.5s;
          animation-delay: 0.5s;
          bottom: 11px;
          right: 48px;
        }
        &:nth-child(7) {
          height: 90%;
          -webkit-animation-duration: 3s;
          -moz-animation-duration: 3s;
          -o-animation-duration: 3s;
          animation-duration: 3s;
          -webkit-animation-delay: 2.5s;
          -moz-animation-delay: 2.5s;
          -o-animation-delay: 2.5s;
          animation-delay: 2.5s;
          bottom: -22px;
          right: 174px;
          -webkit-filter: hue-rotate(180deg);
          filter: hue-rotate(180deg);
        }
        &:nth-child(8) {
          height: 90%;
          -webkit-animation-duration: 3s;
          -moz-animation-duration: 3s;
          -o-animation-duration: 3s;
          animation-duration: 3s;
          -webkit-animation-delay: 1.5s;
          -moz-animation-delay: 1.5s;
          -o-animation-delay: 1.5s;
          animation-delay: 1.5s;
          bottom: -22px;
          right: 100px;
        }
        &:nth-child(9) {
          height: 100%;
          -webkit-animation-duration: 2.5s;
          -moz-animation-duration: 2.5s;
          -o-animation-duration: 2.5s;
          animation-duration: 2.5s;
          -webkit-animation-delay: 2s;
          -moz-animation-delay: 2s;
          -o-animation-delay: 2s;
          animation-delay: 2s;
          bottom: -10px;
          right: 220px;
        }
        &:nth-child(10) {
          height: 95%;
          -webkit-animation-duration: 2s;
          -moz-animation-duration: 2s;
          -o-animation-duration: 2s;
          animation-duration: 2s;
          -webkit-animation-delay: 1s;
          -moz-animation-delay: 1s;
          -o-animation-delay: 1s;
          animation-delay: 1s;
          bottom: -41px;
          right: 182px;
        }
      }
      background: url(../../assets/img/pd-main-left-bg-2.png) no-repeat 50% 50%;
      .yun-tree {
        width: 100%;
        height: 100%;
        background: url(../../assets/img/pd-main-left-bg-tree.png) no-repeat 50% bottom;
        mix-blend-mode: screen;
      }
      .line-fs {
        width: 14px;
        height: 100%;
        background-image: url(../../assets/img/line-fs.png);
        background-repeat: no-repeat;
        background-position: 50% 150%;
        position: absolute;
        z-index: -1;
        -webkit-animation: fs 3s cubic-bezier(1, 0, 0.6, 0.6) infinite;
        -moz-animation: fs 3s cubic-bezier(1, 0, 0.6, 0.6) infinite;
        -o-animation: fs 3s cubic-bezier(1, 0, 0.6, 0.6) infinite;
        animation: fs 3s cubic-bezier(1, 0, 0.6, 0.6) infinite;
      }
    }

    .yun-text {
      position: absolute;
      width: 318px;
      height: 195px;
      top: 0;
      left: 50%;
      margin-left: -161px;
      z-index: 2;
      .span-flash {
        color: #00f6ff;
        font-size: 12px;
        -webkit-animation-name: yun-flash;
        -moz-animation-name: yun-flash;
        -o-animation-name: yun-flash;
        animation-name: yun-flash;
        -webkit-animation-duration: 1s;
        -moz-animation-duration: 1s;
        -o-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-iteration-count: 1;
        -moz-animation-iteration-count: 1;
        -o-animation-iteration-count: 1;
        animation-iteration-count: 1;
      }
      div {
        position: absolute;
        white-space: nowrap;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        width: 70px;
        height: 36px;
        line-height: 36px;
        word-wrap: break-word;
        word-break: break-all;
        opacity: 0.8;
        color: #00f6ff;
        span {
          font-size: 12px;
          cursor: pointer;
        }
        &:nth-child(1) {
          top: 84px;
          left: 26px;
        }
        &:nth-child(2) {
          top: 13px;
          left: 157px;
        }
        &:nth-child(3) {
          top: 105px;
          left: 35px;
        }
        &:nth-child(4) {
          top: 38px;
          left: 89px;
        }
        &:nth-child(5) {
          top: 43px;
          left: 178px;
        }
        &:nth-child(6) {
          top: 76px;
          left: 227px;
        }
        &:nth-child(7) {
          top: 63px;
          left: 66px;
        }
        &:nth-child(8) {
          top: 156px;
          left: 43px;
        }
        &:nth-child(9) {
          top: 130px;
          left: 16px;
        }
        &:nth-child(10) {
          top: 93px;
          left: 128px;
        }
        &:nth-child(11) {
          top: 106px;
          left: 241px;
        }
        &:nth-child(12) {
          top: 121px;
          left: 112px;
        }
        &:nth-child(13) {
          top: 67px;
          left: 153px;
        }
        &:nth-child(14) {
          top: 157px;
          left: 207px;
        }
        &:nth-child(15) {
          top: 132px;
          left: 206px;
        }
        &:nth-child(16) {
          top: 150px;
          left: 117px;
        }
      }
    }
  }

}

@-webkit-keyframes fs {
  0% {
    background-position: 50% 150%;
  }
  50% {
    background-position: 50% -132%;
  }
  100% {
    background-position: 50% -264%;
    opacity: 0;
  }
}
@-moz-keyframes fs {
  0% {
    background-position: 50% 150%;
  }
  50% {
    background-position: 50% -132%;
  }
  100% {
    background-position: 50% -264%;
    opacity: 0;
  }
}
@-o-keyframes fs {
  0% {
    background-position: 50% 150%;
  }
  50% {
    background-position: 50% -132%;
  }
  100% {
    background-position: 50% -264%;
    opacity: 0;
  }
}
@keyframes fs {
  0% {
    background-position: 50% 150%;
  }
  50% {
    background-position: 50% -132%;
  }
  100% {
    background-position: 50% -264%;
    opacity: 0;
  }
}

@-webkit-keyframes yun-flash {
  from,50%,
  to {
    opacity: 1;
  }
  25%,75% {
    opacity: 0;
  }
}
@-moz-keyframes yun-flash {
  from,50%,
  to {
    opacity: 1;
  }
  25%,75% {
    opacity: 0;
  }
}
@-o-keyframes yun-flash {
  from,50%,
  to {
    opacity: 1;
  }
  25%,75% {
    opacity: 0;
  }
}
@keyframes yun-flash {
  from,50%,
  to {
    opacity: 1;
  }
  25%,75% {
    opacity: 0;
  }
}
</style>
