<!--
 描述: 司南排名图
 作者: Jack Chen
 日期: 2020-04-18
-->

<template>
  <div class="wrap-container sn-container"> 
    <div class="sn-content"> 
      <div class="sn-title">司南排名图</div> 
      <div class="sn-body"> 
        <div class="wrap-container"> 
          <div class="pd-main"> 
            <div id="chart1" class="chart-1"> 
              <div class="compass"> 
                <div class="compass-bg-1"></div> 
                <div class="compass-bg-2"></div> 
                <div class="compass-bg-3"></div> 
                <div class="compass-bg-4"></div> 
                <div class="compass-bg-5"></div> 
                <div class="compass-bg-6"></div> 
                <div class="compass-bg-7"></div>

                <div class="compass-bg-c-1"></div> 
                <div class="compass-bg-c-2"></div> 
                <div class="compass-bg-c-3"></div> 
                <div class="compass-bg-c-4"></div>

                <div class="compass-text" :class="[`compass-text-${index + 1}`, {show: number == index}]" v-for="(item, index) in arr" :key="index">
                  <span>事项数：{{ item.itemNum }}</span>
                  <span>数据项：{{ item.dataItem }}</span>
                  <span>数据量：{{ item.dataSize }}</span>
                </div>
                <div class="compass-number"> 
                  <div :title="`${index + 1}`" :class="[`rank-${index + 1}`, {szscale: number == index}]" v-for="(item, index) in arr" :key="index">
                   <span>{{ item.workUnit }}</span>
                  </div>
                </div> 

                <div class="line-sx"> 
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
  name: "sinan",
  data() {
    return {
      timer: null,
      number: null,
      arr: [{
        id: 1,
        itemNum: 258,
        dataItem: 1288,
        dataSize: 12306,
        workUnit: 'JS'
      },{
        id: 2,
        itemNum: 568,
        dataItem: 5623,
        dataSize: 12306,
        workUnit: 'Nodejs'
      },{
        id: 3,
        itemNum: 208,
        dataItem: 1755,
        dataSize: 12043,
        workUnit: 'Vuejs'
      },{
        id: 4,
        itemNum: 358,
        dataItem: 1812,
        dataSize: 12306,
        workUnit: 'CSS3'
      },{
        id: 5,
        itemNum: 128,
        dataItem: 4718,
        dataSize: 12580,
        workUnit: 'jQuery'
      }]
    }
  },
  mounted() {
    setTimeout(() => {
      this.number = 0;
      this.initData();
    }, 4000)
  },
  methods: {
    initData() {
      this.number = this.number == this.arr.length ? 0 : this.number;
      this.timer = setTimeout(() => {
        this.number++;
        this.initData();
      }, 5000)
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  }
};
</script>

<style lang="scss" scoped>
.sn-container {
  left: 50px; 
  top: 110px; 
  .pd-main {
    position: absolute;
    height: 100%;
    width: 100%;
    [class^=chart] {
      position: absolute;
      -webkit-transform-origin: left top;
      -moz-transform-origin: left top;
      -ms-transform-origin: left top;
      -o-transform-origin: left top;
      transform-origin: left top;
    }
    .chart-1 {
      width: 500px;
      height: 410px;
      top:55%;
      left:50%;
      -webkit-transform:translate(-50%,-50%);
      -moz-transform:translate(-50%,-50%);
      -ms-transform:translate(-50%,-50%);
      -o-transform:translate(-50%,-50%);
      transform:translate(-50%,-50%);
    }

    .compass {
      width: 100%;
      height: 100%;
      -webkit-transform: scale(0.9);
      -moz-transform: scale(0.9);
      -ms-transform: scale(0.9);
      -o-transform: scale(0.9);
      transform: scale(0.9);
      [class^=compass-bg-] {
        position: absolute;
        bottom: 0;
      }

      %compass-bg {
        position: absolute;
        bottom: 0px;
        left: 50%;
        -webkit-transform: rotateX(-80deg) rotateZ(45deg) rotateY(0deg);
        -moz-transform: rotateX(-80deg) rotateZ(45deg) rotateY(0deg);
        transform: rotateX(-80deg) rotateZ(45deg) rotateY(0deg);
      }
      .compass-bg-1 {
        @extend %compass-bg;
        margin-left: -250px;
        bottom: -200px;
        width: 500px;
        height: 500px;
        background: -webkit-repeating-radial-gradient(transparent, rgba(0, 138, 174, 0.2));
        background: -moz-repeating-radial-gradient(transparent, rgba(0, 138, 174, 0.2));
        background: -o-repeating-radial-gradient(transparent, rgba(0, 138, 174, 0.2));
        background: repeating-radial-gradient(transparent, rgba(0, 138, 174, 0.2));
        display: none;
      }
      .compass-bg-2 {
        @extend %compass-bg;
        margin-left: -220px;
        bottom: -170px;
        width: 440px;
        height: 440px;
        background: -webkit-repeating-radial-gradient(transparent, rgba(250, 118, 159, 0.2));
        background: -moz-repeating-radial-gradient(transparent, rgba(250, 118, 159, 0.2));
        background: -o-repeating-radial-gradient(transparent, rgba(250, 118, 159, 0.2));
        background: repeating-radial-gradient(transparent, rgba(250, 118, 159, 0.2));
        display: none;
      }
      .compass-bg-3 {
        @extend %compass-bg;
        margin-left: -190px;
        bottom: -140px;
        width: 380px;
        height: 380px;
        background: -webkit-repeating-radial-gradient(transparent, rgba(10, 58, 103, 0.2));
        background: -moz-repeating-radial-gradient(transparent, rgba(10, 58, 103, 0.2));
        background: -o-repeating-radial-gradient(transparent, rgba(10, 58, 103, 0.2));
        background: repeating-radial-gradient(transparent, rgba(10, 58, 103, 0.2));
      }
      .compass-bg-4 {
        @extend %compass-bg;
        margin-left: -160px;
        bottom: -110px;
        width: 320px;
        height: 320px;
        background: -webkit-repeating-radial-gradient(transparent, rgba(112, 67, 103, 0.2));
        background: -moz-repeating-radial-gradient(transparent, rgba(112, 67, 103, 0.2));
        background: -o-repeating-radial-gradient(transparent, rgba(112, 67, 103, 0.2));
        background: repeating-radial-gradient(transparent, rgba(112, 67, 103, 0.2));
      }
      .compass-bg-5 {
        @extend %compass-bg;
        margin-left: -130px;
        bottom: -80px;
        width: 260px;
        height: 260px;
        -webkit-box-shadow: inset 0 0 10px 10px rgba(44, 183, 190, 0.8);
        -moz-box-shadow: inset 0 0 10px 10px rgba(44, 183, 190, 0.8);
        box-shadow: inset 0 0 10px 10px rgba(44, 183, 190, 0.8);
      }
      .compass-bg-6 {
        @extend %compass-bg;
        margin-left: -100px;
        bottom: -50px;
        width: 200px;
        height: 200px;
        background: -webkit-repeating-radial-gradient(transparent, rgba(246, 116, 160, 0.2));
        background: -moz-repeating-radial-gradient(transparent, rgba(246, 116, 160, 0.2));
        background: -o-repeating-radial-gradient(transparent, rgba(246, 116, 160, 0.2));
        background: repeating-radial-gradient(transparent, rgba(246, 116, 160, 0.2));
        display: none;
      }
      .compass-bg-7 {
        @extend %compass-bg;
        margin-left: -70px;
        bottom: -20px;
        width: 140px;
        height: 140px;
        background: -webkit-repeating-radial-gradient(transparent, rgba(102, 97, 70, 0.2));
        background: -moz-repeating-radial-gradient(transparent, rgba(102, 97, 70, 0.2));
        background: -o-repeating-radial-gradient(transparent, rgba(102, 97, 70, 0.2));
        background: repeating-radial-gradient(transparent, rgba(102, 97, 70, 0.2));
        -webkit-animation: bgshadow 3s linear infinite;     
        -moz-animation: bgshadow 3s linear infinite;
        -o-animation: bgshadow 3s linear infinite;
        animation: bgshadow 3s linear infinite;
      }

      .compass-bg-c-1 {
        width: 100%;
        height: 100%;
        background: url(../../assets/img/chart1/compass-bg-1.png) no-repeat 50% 345px;
      }
      .compass-bg-c-2 {
        width: 100%;
        height: 100%;
        background: url(../../assets/img/chart1/compass-bg-2.png) no-repeat 65% 146px;
        opacity: 0.8;
        -webkit-animation: fadebg 3s linear infinite;
        -moz-animation: fadebg 3s linear infinite;
        -o-animation: fadebg 3s linear infinite;
        animation: fadebg 3s linear infinite;
      }
      .compass-bg-c-3 {
        width: 100%;
        height: 100%;
        background: url(../../assets/img/chart1/compass-bg-3.png) no-repeat 50% 227px;
      }
      .compass-bg-c-4 {
        width: 100%;
        height: 100%;
        background: url(../../assets/img/chart1/compass-bg-4.png) no-repeat 50% 63px;
        -webkit-animation: numberfade 5s linear infinite;
        -moz-animation: numberfade 5s linear infinite;
        -o-animation: numberfade 5s linear infinite;
        animation: numberfade 5s linear infinite;
      }

      .compass-text {
        position: absolute;
        overflow: hidden;
        left: 50%;
        margin-left: -60px;
        font-size: 12px;
        background-color: rgba(0, 71, 157, 0.4);
        padding: 5px 10px;
        color: #00c2ff;
        -webkit-border-radius: 6px;
        -moz-border-radius: 6px;
        border-radius: 6px;
        line-height: 1.5;
        /*-webkit-transform: scale(0.8);
        -moz-transform: scale(0.8);
        -ms-transform: scale(0.8);
        -o-transform: scale(0.8);
        transform: scale(0.8);*/
        display: none;
        &.compass-text-1 {
          top: -77px;
          left: 48px;
        }
        &.compass-text-2 {
          top: -35px;
          left: 152px;
        }
        &.compass-text-3 {
          top: 5px;
          left: 250px;
        }
        &.compass-text-4 {
          top: 49px;
          left: 350px;
        }
        &.compass-text-5 {
          top: 88px;
          left: 450px;
        }
        &.compass-text-6 {
          color: #d57a31;
          bottom: -945px;
          -webkit-animation-delay: 25s;
          -moz-animation-delay: 25s;
          -o-animation-delay: 25s;
          animation-delay: 25s;
        }
        &.compass-text-7 {
          color: #d57a31;
          bottom: -1150px;
          -webkit-animation-delay: 30s;
          -moz-animation-delay: 30s;
          -o-animation-delay: 30s;
          animation-delay: 30s;
        }
        %span-nth-child {
          margin-top: 0px;
        }
        span {
          display: block;
          &:nth-child(1) {
            @extend %span-nth-child;
          }
          &:nth-child(2) {
            @extend %span-nth-child;
          }
          &:nth-child(3) {
            @extend %span-nth-child;
          }
        }
        &.show {
          display: block;
        }
      }

      .compass-number {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        bottom: 50px;
        > .szscale {
          -webkit-transform: scale(1.2);
          -moz-transform: scale(1.2);
          -ms-transform: scale(1.2);
          -o-transform: scale(1.2);
          transform: scale(1.2);
          -webkit-transform-origin: center bottom;
          -moz-transform-origin: center bottom;
          -ms-transform-origin: center bottom;
          -o-transform-origin: center bottom;
          transform-origin: center bottom;
        }
        > div {
          position: absolute;
          bottom: 0;
          width: 55px;
          height: 0;
          -webkit-animation: sz 1s linear;
          -moz-animation: sz 1s linear;
          -o-animation: sz 1s linear;
          animation: sz 1s linear;
          -webkit-animation-fill-mode: forwards;
          -moz-animation-fill-mode: forwards;
          -o-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
          -webkit-transition: 1s;
          -o-transition: 1s;
          -moz-transition: 1s;
          transition: 1s;
          &:nth-child(1) {
            left: 5%;
            color: #ff9232;
            -webkit-animation-delay: 0s;
            -moz-animation-delay: 0s;
            -o-animation-delay: 0s;
            animation-delay: 0s;
            &:after {
              -webkit-animation-delay: 0s;
              -moz-animation-delay: 0s;
              -o-animation-delay: 0s;
              animation-delay: 0s;
            }
          }
          &:nth-child(2) {
            left: 25%;
            color: #d5c245;
            -webkit-animation-delay: 0.2s;
            -moz-animation-delay: 0.2s;
            -o-animation-delay: 0.2s;
            animation-delay: 0.2s;
            bottom: -10%;
            &:after {
              -webkit-animation-delay: 2.85s;
              -moz-animation-delay: 2.85s;
              -o-animation-delay: 2.85s;
              animation-delay: 2.85s;
            }
          }
          &:nth-child(3) {
            left: 45%;
            color: #01a455;
            -webkit-animation-delay: 0.4s;
            -moz-animation-delay: 0.4s;
            -o-animation-delay: 0.4s;
            animation-delay: 0.4s;
            bottom: -20%;
            &:after {
              -webkit-animation-delay: 5.7s;
              -moz-animation-delay: 5.7s;
              -o-animation-delay: 5.7s;
              animation-delay: 5.7s;
            }
          }
          &:nth-child(4) {
            left: 65%;
            color: #85adfb;
            -webkit-animation-delay: 0.6s;
            -moz-animation-delay: 0.6s;
            -o-animation-delay: 0.6s;
            animation-delay: 0.6s;
            bottom: -30%;
            &:after {
              -webkit-animation-delay: 8.55s;
              -moz-animation-delay: 8.55s;
              -o-animation-delay: 8.55s;
              animation-delay: 8.55s;
            }
          }
          &:nth-child(5) {
            left: 85%;
            color: #c36885;
            -webkit-animation-delay: 0.8s;
            -moz-animation-delay: 0.8s;
            -o-animation-delay: 0.8s;
            animation-delay: 0.8s;
            bottom: -40%;
            &:after {
              -webkit-animation-delay: 11.4s;
              -moz-animation-delay: 11.4s;
              -o-animation-delay: 11.4s;
              animation-delay: 11.4s;
            }
          }
          &:nth-child(6) {
            left: 75%;
            color: #f674a0;
            -webkit-animation-delay: 1s;
            -moz-animation-delay: 1s;
            -o-animation-delay: 1s;
            animation-delay: 1s;
            bottom: -50%;
            &:after {
              -webkit-animation-delay: 14.25s;
              -moz-animation-delay: 14.25s;
              -o-animation-delay: 14.25s;
              animation-delay: 14.25s;
            }
          }
          &:nth-child(7) {
            left: 87.5%;
            color: #275fcc;
            -webkit-animation-delay: 1.2s;
            -moz-animation-delay: 1.2s;
            -o-animation-delay: 1.2s;
            animation-delay: 1.2s;
            bottom: -60%;
            &:after {
              -webkit-animation-delay: 17.1s;
              -moz-animation-delay: 17.1s;
              -o-animation-delay: 17.1s;
              animation-delay: 17.1s;
            }
          }

          span {
            display: block;
            width: 55px;
            height: 55px;
            line-height: 55px;
            text-align: center;
            /*padding-bottom: 55px;*/
            -webkit-box-shadow: inset 0 0 15px currentColor;
            -moz-box-shadow: inset 0 0 15px currentColor;
            box-shadow: inset 0 0 15px currentColor;
            -webkit-border-radius: 100%;
            -moz-border-radius: 100%;
            border-radius: 100%;
          }
          &:before {
            content: "";
            position: absolute;
            height: 100%;
            border-left: 1px dashed currentColor;
            height: 500px;
            top: 55px;
            left: 50%;
            margin-left: -1px;
          }
          &:after {
            content: "NO." attr(title);
            position: absolute;
            display: inline-block;
            top: -20px;
            width: 100%;
            font-family: "DIGITALDREAMFAT";
            text-align: center;
          }
        }
      }

      .line-sx {
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
        .line-fs {
          width: 14px;
          height: 100%;
          background: url(../../assets/img/chart1/line-fs.png) no-repeat;
          background-position: 50% 150%;
          position: absolute;
          z-index: -1;
          -webkit-animation: fs 3s cubic-bezier(1, 0, 0.6, 0.6) infinite;
          -moz-animation: fs 3s cubic-bezier(1, 0, 0.6, 0.6) infinite;
          -o-animation: fs 3s cubic-bezier(1, 0, 0.6, 0.6) infinite;
          animation: fs 3s cubic-bezier(1, 0, 0.6, 0.6) infinite;
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

@-webkit-keyframes bgshadow {
  0%,100% {
    -webkit-box-shadow: 0 0 0 rgba(255, 255, 255, 0);
    box-shadow: 0 0 0 rgba(255, 255, 255, 0);
  }
  50% {
    -webkit-box-shadow: 0 0 30em white;
    box-shadow: 0 0 30em white;
  }
}
@-moz-keyframes bgshadow {
  0%,100% {
    -moz-box-shadow: 0 0 0 rgba(255, 255, 255, 0);
    box-shadow: 0 0 0 rgba(255, 255, 255, 0);
  }
  50% {
    -moz-box-shadow: 0 0 30em white;
    box-shadow: 0 0 30em white;
  }
}
@-o-keyframes bgshadow {
  0%,100% {
    box-shadow: 0 0 0 rgba(255, 255, 255, 0);
  }
  50% {
    box-shadow: 0 0 30em white;
  }
}
@keyframes bgshadow {
  0%,100% {
    -webkit-box-shadow: 0 0 0 rgba(255, 255, 255, 0);
    -moz-box-shadow: 0 0 0 rgba(255, 255, 255, 0);
    box-shadow: 0 0 0 rgba(255, 255, 255, 0);
  }
  50% {
    -webkit-box-shadow: 0 0 30em white;
    -moz-box-shadow: 0 0 30em white;
    box-shadow: 0 0 30em white;
  }
}


@-webkit-keyframes sz {
  0% {
    height: 0;
  }
  100% {
    height: 70%;
  }
}
@-moz-keyframes sz {
  0% {
    height: 0;
  }
  100% {
    height: 70%;
  }
}
@-o-keyframes sz {
  0% {
    height: 0;
  }
  100% {
    height: 70%;
  }
}
@keyframes sz {
  0% {
    height: 0;
  }
  100% {
    height: 70%;
  }
}
</style>
