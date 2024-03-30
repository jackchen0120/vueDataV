<!--
 描述: 金字塔动画
 作者: Jack Chen
 日期: 2020-04-19
-->

<template>
  <div class="wrap-container trigle"> 
    <div class="back_img3"></div> 
    <div class="back_img"></div> 
    <div class="back_img1"></div> 
    <div class="back_img2"></div>
    <ul :class="{first: index == 0, second: index == 1, third: index == 2, four: index == 3}" v-for="(item, index) in arrData"> 
      <li></li>
      <li></li>
      <li></li> 
      <li></li>
      <li></li>
      <li></li> 
    </ul> 

    <div class="detail" :class="`detail_${index + 1}`" v-for="(item, index) in arrData" :key="index"> 
      <div class="detail_txt" :class="`detail_txt${index + 1}`"> 
        <span class="precent_txt" :class="`precent_txt${index + 1}`"> 
          <div class="chartsdom" :id="`chart_${index + 1}`"></div> 
        </span>
        <div class="txt_right" :class="`txt_right${index + 1}`"> 
          <span> 
            <div class="f_div" :class="{aharrow_up: index == 0 || index == 1, aharrow_down: index == 2 || index == 3}">{{ item.post }}</div> 
            <div class="s_div" :class="`s_div${index + 1}`">{{ item.number }}人</div> 
          </span> 
        </div>
      </div>
      <div class="arrow_contain" :class="`arrow_contain${index + 1}`"> 
        <span class="arrow" :class="`arrow_${index + 1}`"></span> 
      </div>
    </div>

  </div>

    
</template>

<script>
export default {
  name: "pyramid",
  data() {
    return {
      option: null,
      arrData: [{
        post: '技术经理',
        number: 158
      },{
        post: 'Java工程师',
        number: 572
      },{
        post: '前端工程师',
        number: 826
      },{
        post: '项目经理',
        number: 66
      }],
      color: ['#45fed4', '#84a9ef', '#f1e04f', '#dbfe73'],
      totalNum: [],
      sum: 0
      
    }
  },
  mounted() {
    this.arrData.forEach((v, i) => {
      this.totalNum.push(v.number);
    })
    this.sum = this.totalNum.reduce((prev, next, index, array) => prev + next)
    this.arrData.map((v, i) => {
      v.color = this.color[i];
      this.getEchart(`chart_${i + 1}`, v);
    })
  },
  methods: {
    getEchart(dom, data) {
      let sum = (Math.round( (data.number / this.sum) * 10000 ) / 100).toFixed(1);
      let myChart = echarts.init(document.getElementById(dom));
      this.option = {
          color: [data.color, '#333'],
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['92%', '100%'],
              clockWise: false,
              avoidLabelOverlap: false,
              hoverAnimation: false,
              label: {
                normal: {
                  show: true,
                  position: 'center',
                  textStyle: {
                      fontSize: 14
                  },
                  formatter: '{c}%'
                }
              },
              labelLine: {
                  show: false
              },
              data: [
                {
                  value: sum, 
                  name: '',
                  label: {
                    normal: {
                      show: true
                    }
                  }
                },
                {
                  value: (100 - sum), 
                  name: '',
                  label: {
                    normal: {
                      show: false
                    }
                  }
                }
              ]
            }
          ]
      };
      myChart.setOption(this.option, true);

      window.addEventListener('resize', () => {
        myChart.resize();
      });
    }
  },
  beforeDestroy() {
    
  }
};
</script>

<style lang="scss" scoped>
.trigle {
  left: 600px; 
  top: 150px; 
  width: 720px; 
  height: 500px;
  .back_img {
    position: absolute;
    top: 195px;
    width: 100%;
    height: 300px;
    background: url(../../assets/img/chart2/icon_db02.png) no-repeat center;
    transform: rotateX(0deg);
    background-size: 80% 84%;
  }
  .back_img1 {
    position: absolute;
    left: 0;
    top: 18%;
    width: 100%;
    height: 100%;
    background: url(../../assets/img/chart2/icon_db03.png) no-repeat center;
    transform: rotateX(65deg);
    background-size: 62%;
    animation: trigle_move 10s linear infinite;
    -webkit-animation: trigle_move 10s linear infinite;
  }
  .back_img2 {
    position: absolute;
    top: 190px;
    width: 100%;
    height: 300px;
    background: url(../../assets/img/chart2/icon_db04.png) no-repeat center;
    transform: rotateX(66deg);
    background-size: 39%;
    animation: trigle_move1 10s linear infinite;
    -webkit-animation: trigle_move1 10s linear infinite;
  }
  .back_img3 {
    position: absolute;
    top: 247px;
    width: 100%;
    height: 300px;
    background: url(../../assets/img/chart2/icon_db01.png) no-repeat center;
    transform: rotateX(50deg);
    background-size: 65% 100%;
  }

  .first {
    list-style-type: none;
    left: 240px;
    top: 100px;
    width: 240px;
    height: 240px;
    position: absolute;
    transform-style: preserve-3d;
    transform: rotateX(70deg) rotateZ(45deg);
    perspective: 2000px;
    perspective-origin: 50% 100%;
    animation: trigle_down1 1s linear;
    -webkit-animation: trigle_down1 1s linear; 
    li {
      width: 100%;
      height: 100%;
      line-height: 200px;
      position: absolute;
      background-image: linear-gradient(#45fed4 1%,rgba(0,96,220,1));
      opacity: 0.8;
      &:nth-child(1) {
        transform: rotateX(0deg) translateZ(-35px) scale(0.79);
      }
      &:nth-child(2) {
        transform:translateZ(-100px) translateY(170px) rotateX(-70deg);
        height: 70px;
        line-height: 70px;
        transform-origin: 0 100%;
        clip-path: polygon(25px 0%,calc(100% - 25px) 0%,100% 100%,0% 100%);
      }
      &:nth-child(3) {
        transform: rotateX(-180deg) translateZ(100px);
      }
      &:nth-child(4) {
        height: 70px;
        line-height: 70px;
        transform-origin: 0 100%;
        transform: translateZ(-100px) translateY(-70px) rotateX(-110deg);
        clip-path: polygon(25px 0%,calc(100% - 25px) 0%,100% 100%,0% 100%);
      }
      &:nth-child(5) {
        width: 70px;
        transform-origin: 100% 100%;
        transform: translateZ(-100px) translateX(-70px) rotateY(110deg);
        clip-path: polygon(0% 25px,100% 0%,100% 100%,0% calc(100% - 25px));
      }
      &:nth-child(6) {
        width: 70px;
        transform-origin: 100% 100%;
        transform:translateZ(-100px) translateX(170px) rotateY(70deg);
        clip-path: polygon(0% 25px,100% 0%,100% 100%,0% calc(100% - 25px));
        background-image: linear-gradient(to left, rgba(0,96,220,1),#45fed4);
      }
    }
  }

  .second {
    list-style-type: none;
    left: 261px;
    top: 65px;
    width: 200px;
    height: 195px;
    text-align: center;
    position: absolute;
    transform-style: preserve-3d;
    transform: rotateX(70deg) rotateZ(45deg);
    perspective: 2000px;
    perspective-origin: 50% 100%;
    animation: trigle_down2 2s linear;
    -webkit-animation: trigle_down2 2s linear;
    li {
      width: 100%;
      height: 100%;
      position: absolute;
      background-image: linear-gradient(rgba(58,200,255,0.8) 25%,#616cff);
      opacity: 0.8;
      &:nth-child(1) {
        transform: rotateX(0deg) translateZ(-48px) scale(0.8);
      }
      &:nth-child(2) {
        transform:translateZ(-100px) translateY(140px) rotateX(-70deg);
        height: 55px;
        line-height: 55px;
        transform-origin: 0 100%;
        clip-path: polygon(18px 0%,calc(100% - 18px) 0%,100% 100%,0% 100%);
      }
      &:nth-child(3) {
        transform: rotateX(-180deg) translateZ(100px);
      }
      &:nth-child(4) {
        height: 55px;
        line-height: 55px;
        transform-origin: 0 100%;
        transform: translateZ(-100px) translateY(-55px) rotateX(-110deg);
        clip-path: polygon(18px 0%,calc(100% - 18px) 0%,100% 100%,0% 100%);
      }
      &:nth-child(5) {
        width: 55px;
        transform-origin: 100% 100%;
        transform: translateZ(-100px) translateX(-55px) rotateY(110deg);
        clip-path: polygon(0% 18px,100% 0%,100% 100%,0% calc(100% - 18px));
      }
      &:nth-child(6) {
        width: 55px;
        transform-origin: 100% 100%;
        transform:translateZ(-100px) translateX(145px) rotateY(70deg);
        clip-path: polygon(0% 18px,100% 0%,100% 100%,0% calc(100% - 18px));
      }
    } 
  }

  .third {
    list-style-type: none;
    left: 292px;
    top: 20px;
    width: 140px;
    height: 140px;
    text-align: center;
    position: absolute;
    transform-style: preserve-3d;
    transform: rotateX(70deg) rotateZ(45deg);
    perspective: 2000px;
    perspective-origin: 50% 100%;
    animation: trigle_down3 3s linear;
    -webkit-animation: trigle_down3 3s linear;
    li {
      width: 100%;
      height: 100%;
      position: absolute;
      background-image: linear-gradient(#f1e04f 5%,rgba(253,156,48,0.8));
      opacity: 0.7;
      &:nth-child(1) {
        transform: rotateX(0deg) translateZ(-48px) scale(0.75);
      }
      &:nth-child(2) {
        transform:translateZ(-100px) translateY(85px) rotateX(-70deg);
        height: 55px;
        line-height: 55px;
        transform-origin: 0 100%;
        clip-path: polygon(18px 0%,calc(100% - 18px) 0%,100% 100%,0% 100%);
      }
      &:nth-child(3) {
        transform: rotateX(-180deg) translateZ(100px);
      }
      &:nth-child(4) {
        height: 55px;
        line-height: 55px;
        transform-origin: 0 100%;
        transform: translateZ(-100px) translateY(-55px) rotateX(-110deg);
        clip-path: polygon(18px 0%,calc(100% - 18px) 0%,100% 100%,0% 100%);
      }
      &:nth-child(5) {
        width: 55px;
        transform-origin: 100% 100%;
        transform: translateZ(-100px) translateX(-55px) rotateY(110deg);
        clip-path: polygon(0% 18px,100% 0%,100% 100%,0% calc(100% - 18px));
      }
      &:nth-child(6) {
        width: 55px;
        transform-origin: 100% 100%;
        transform:translateZ(-100px) translateX(85px) rotateY(70deg);
        clip-path: polygon(0% 18px,100% 0%,100% 100%,0% calc(100% - 18px));
      }
    } 
  }

  .four {
    list-style-type: none;
    left: 310px;
    top: -8px;
    width: 105px;
    height: 106px;
    text-align: center;
    position: absolute;
    transform-style: preserve-3d;
    transform: rotateX(70deg) rotateZ(45deg);
    perspective: 2000px;
    perspective-origin: 50% 100%;
    animation: trigle_down4 4s linear;
    -webkit-animation: trigle_down4 4s linear;
    li {
      width: 100%;
      height: 100%;
      position: absolute;
      background-image: linear-gradient(rgba(112,245,100,0.8) 9%,#dbfe73);
      opacity: 0.7;
      &:nth-child(1) {
        display:none;
        transform: rotateX(0deg) translateZ(-48px) scale(0.75);
      }
      &:nth-child(2) {
        transform:translateZ(-100px) translateY(-48px) rotateX(-70deg);
        height: 152px;
        transform-origin: 0 100%;
        clip-path: polygon(50% 0%,50% 0%,100% 100%,0% 100%);
      }
      &:nth-child(3) {
        transform: rotateX(-180deg) translateZ(100px);
      }
      &:nth-child(4) {
        height: 150px;
        transform-origin: 0 100%;
        transform: translateZ(-100px) translateY(-150px) rotateX(-110deg);
        clip-path: polygon(50% 0%,50% 0%,100% 100%,0% 100%);
      }
      &:nth-child(5) {
        width: 150px;
        transform-origin: 100% 100%;
        transform: translateZ(-100px) translateX(-150px) rotateY(110deg);
        clip-path: polygon(0% 50%,100% 0%,100% 100%,0% 50%);
      }
      &:nth-child(6) {
        width: 152px;
        transform-origin: 100% 100%;
        transform: translateZ(-100px) translateX(-48px) rotateY(70deg);
        clip-path: polygon(0% 50%,100% 0%,100% 100%,0% 50%);
      }
    } 
  }

  .detail {
    width: 240px;
    height: 60px;
    position: absolute;
    &.detail_1 {
      left: 2px;
      top: 245px;
    }
    &.detail_2 {
      left: 430px;
      top: 194px;
      width:290px;
    }
    &.detail_3 {
      left: 67px;
      top: 117px;
    }
    &.detail_4 {
      left: 379px;
      top: 60px;
    }
    .detail_txt {
      display: inline-block;
      width: calc(100% - 80px);
      height: 100%;
      .txt_right {
        padding: 10px 0;
        display: inline-block;
        float: right;
        height: 60px;
        width: calc(100% - 65px);
        %arrow_icon {
          content: '';
          width: 12px;
          height: 18px;
          display: block;
          float: right;
        }
        .f_div {
          color: #84a9ef;
          font-size: 16px;
          &.aharrow_down {
            &:before {
              @extend %arrow_icon;
              background: url(../../assets/img/chart2/icon_jt01.png) no-repeat center;
            }
          }
          &.aharrow_up {
            &:before {
              @extend %arrow_icon;
              background: url(../../assets/img/chart2/icon_jt02.png) no-repeat center;
            }
          }
        }
        .s_div {
          font-size: 16px;
          font-weight: bold;
        }
        .s_div1 {
          color: #01ddb2;
        }
        .s_div2 {
          color: #5d83ff;
        }
        .s_div3 {
          color: #e59138;
        }
        .s_div4 {
          color: #77f364;
        }
      }
      &.detail_txt1 {
        animation : opacity_path 3s linear;
        -webkit-animation: opacity_path 3s linear; 
      }
      &.detail_txt2 {
        animation : opacity_path2 4s linear;
        -webkit-animation: opacity_path2 4s linear;
        float: right; 
      }
      &.detail_txt3 {
        animation : opacity_path3 5s linear;
        -webkit-animation: opacity_path3 5s linear; 
      }
      &.detail_txt4 {
        animation : opacity_path4 6s linear;
        -webkit-animation: opacity_path4 6s linear;
        float: right; 
      }
      .precent_txt {
        width: 50px;
        height: 50px;
        display: inline-block;
        border-radius: 50%;
        margin: 5px;
        &.precent_txt1 {
          background: url(../../assets/img/chart2/icon_xfq04.png) no-repeat center;
        }
        &.precent_txt2 {
          background: url(../../assets/img/chart2/icon_xfq03.png) no-repeat center;
        }
        &.precent_txt3 {
          background: url(../../assets/img/chart2/icon_xfq01.png) no-repeat center;
        }
        &.precent_txt4 {
          background: url(../../assets/img/chart2/icon_xfq02.png) no-repeat center;
        }
      }
    }
  }
  
  .chartsdom{
    width: 100%;
    height: 100%;
  }

  .arrow_contain {
    width: 80px;
    height: 100%;
    display: inline-block;
    &.arrow_contain1 {
      animation : clip_line 2s linear;
      -webkit-animation: clip_line 2s linear;
      float: right;
    }
    &.arrow_contain2 {
      animation : clip_line2 3s linear;
      -webkit-animation: clip_line2 3s linear;
      float: left; 
    }
    &.arrow_contain3 {
      animation : clip_line3 4s linear;
      -webkit-animation: clip_line3 4s linear; 
      float: right;
    }
    &.arrow_contain4 {
      animation : clip_line4 5s linear;
      -webkit-animation: clip_line4 5s linear;
      float: left;
    }
    .arrow {
      &.arrow_1 {
        width: 20px;
        height: 1px;
        background: #01ddb2;
        transform: rotate(30deg);
        display: inline-block;
        margin-top: 40px;
        &:before {
          content: '';
          width: 50px;
          height: 1px;
          background: #01ddb2;
          display: inline-block;
          transform: rotate(-30deg);
          position: absolute;
          left: 17px;
          top: -13px;
        }
        &:after {
          content: '';
          width: 5px;
          height: 5px;
          background: #01ddb2;
          display: inline-block;
          border-radius: 50%;
          position: absolute;
          top: -2px;
          box-shadow: 0px 0px 5px 1px #01ddb2;
          left: -2px;
        }
      }
      &.arrow_2 {
        width: 20px;
        height: 1px;
        background: #84a9ef;
        transform: rotate(-30deg);
        display: inline-block;
        margin-top: 40px;
        float: right;
        &:before {
          content: '';
          width: 50px;
          height: 1px;
          background: #84a9ef;
          display: inline-block;
          transform: rotate(30deg);
          position: absolute;
          left: -47px;
          top: -13px;
        }
        &:after {
          content: '';
          width: 5px;
          height: 5px;
          background: #84a9ef;
          display: inline-block;
          border-radius: 50%;
          position: absolute;
          top: -2px;
          box-shadow: 0px 0px 5px 1px #84a9ef;
          left: 17px;
        }
      }
      &.arrow_3 {
        width: 20px;
        height: 1px;
        background: #ff9232;
        transform: rotate(30deg);
        display: inline-block;
        margin-top: 40px;
        &:before {
          content: '';
          width: 50px;
          height: 1px;
          background: #ff9232;
          display: inline-block;
          transform: rotate(-30deg);
          position: absolute;
          left: 17px;
          top: -13px;
        }
        &:after {
          content: '';
          width: 5px;
          height: 5px;
          background: #ff9232;
          display: inline-block;
          border-radius: 50%;
          position: absolute;
          top: -2px;
          box-shadow: 0px 0px 5px 1px #ff9232;
          left: -2px;
        }
      }
      &.arrow_4 {
        width: 20px;
        height: 1px;
        background: #77f364;
        transform: rotate(-30deg);
        display: inline-block;
        margin-top: 40px;
        float: right;
        &:before {
          content: '';
          width: 50px;
          height: 1px;
          background: #77f364;
          display: inline-block;
          transform: rotate(30deg);
          position: absolute;
          left: -47px;
          top: -13px;
        }
        &:after {
          content: '';
          width: 5px;
          height: 5px;
          background: #77f364;
          display: inline-block;
          border-radius: 50%;
          position: absolute;
          top: -2px;
          box-shadow: 0px 0px 5px 1px #77f364;
          left: 17px;
        }
      }

    }
  }


}


@keyframes clip_line {
  0% {
    clip-path: polygon(100% 0, 100% 0% ,100% 0, 100% 0);
  }
  50% {
    clip-path: polygon(100% 0, 100% 0% ,100% 0, 100% 0);
  }
  75% {
    clip-path: polygon(50% 0, 100% 0% ,100% 100%, 50% 100%);
  }
  100% {
    clip-path: polygon(0% 0, 100% 0% ,100% 100%, 0% 100%);
  }
}
@keyframes clip_line2 {
  0% {
    clip-path: polygon(0% 0, 0% 0% ,0% 0, 0% 0);
  }
  66.66% {
    clip-path: polygon(0% 0, 0% 0% ,0% 0, 0% 0);
  }
  83% {
    clip-path: polygon(0% 0, 50% 0% ,50% 50%, 0% 50%);
  }
  100% {
    clip-path: polygon(0% 0, 100% 0% ,100% 100%, 0% 100%);
  }
}
@keyframes clip_line3 {
  0% {
    clip-path: polygon(100% 0, 100% 0% ,100% 0, 100% 0);
  }
  75% {
    clip-path: polygon(100% 0, 100% 0% ,100% 0, 100% 0);
  }
  93% {
    clip-path: polygon(50% 0, 100% 0% ,100% 100%, 50% 100%);
  }
  100% {
    clip-path: polygon(0% 0, 100% 0% ,100% 100%, 0% 100%);
  }
}
@keyframes clip_line4 {
  0% {
    clip-path: polygon(0% 0, 0% 0% ,0% 0, 0% 0);
  }
  70% {
    clip-path: polygon(0% 0, 0% 0% ,0% 0, 0% 0);
  }
  85% {
    clip-path: polygon(0% 0, 50% 0% ,50% 50%, 0% 50%);
  }
  100% {
    clip-path: polygon(0% 0, 100% 0% ,100% 100%, 0% 100%);
  }
}

@keyframes opacity_path {
  0% {
    opacity: 0;
  }
  66.7% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
@keyframes opacity_path2 {
  0% {
    opacity: 0;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes opacity_path3 {
  0% {
    opacity: 0;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes opacity_path4 {
  0% {
    opacity: 0;
  }
  83.33% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes trigle_down1 {
  0% {
    top: -250px;
  }
  100% {
    top: 80px;
  }
}
@keyframes trigle_down2 {
  0% {
    top:-300px;
  }
  50% {
    top:-300px;
  }
  100% {
    top:45px
  }
}
@keyframes trigle_down3 {
  0% {
    top: -250px;
  }
  66.66% {
    top: -250px;
  }
  100% {
    top: 0;
  }
}
@keyframes trigle_down4 {
  0% {
    top: -250px;
  }
  75% {
    top: -250px;
  }
  100% {
    top: -28px;
  }
}

@keyframes trigle_move {
  0% {
    transform: rotateX(65deg) rotateZ(360deg);
  }
  100% {
    transform: rotateX(65deg) rotateZ(0deg);
  }
}
@keyframes trigle_move1 {
  0% {
    transform: rotateX(66deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(66deg) rotateZ(360deg);
  }
}

</style>
