<!--
 描述: 旋转多彩图
 作者: Jack Chen
 日期: 2020-04-19
-->

<template>
  <div class="wrap-container sn-container"> 
    <div class="sn-content"> 
      <div class="sn-title">旋转多彩图</div> 
      <div class="sn-body"> 
        <div class="wrap-container">
          <div class="pie"> 
            <div class="pies pie1"></div> 
            <div class="pies pie2"></div> 
            <div class="pies pie3"></div> 
            <div class="pie4"></div> 
          </div> 
          <div class="chartsdom" id="chart_rotate"></div> 
        </div> 
      </div> 
    </div>   
  </div>
</template>

<script>
export default {
  name: "rotateColorful",
  data() {
    return {
      option: null,
      
    }
  },
  mounted() {
    this.getEchart();
  },
  methods: {
    getEchart() {
      let myChart = echarts.init(document.getElementById('chart_rotate'));
      this.option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          show: true,
          orient: 'vertical',
          left: 'center',
          top: 'middle',
          data: ['内存', '存储'],
          textStyle: {
            color: '#4ce5ff',
            fontSize: 14,
          },
          itemWidth: 20,
          itemHeight: 10
        },
        label: {
          normal: {
            show: false
          },
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        series: [{
          name: '磁盘空间',
          type: 'pie',
          radius: [60, 110],
          center: ['50%', '50%'],
          roseType: 'area',
          label: {
            show: false
          },
          emphasis: {
            label: {
              show: false
            }
          },
          data: [{
            value: 6.5, 
            name: '内存',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0, 
                  color: '#387ed3'
                },{
                  offset: 1, 
                  color: '#bc8b68'
                }])
              }
            }
          },{
            value: 3.5, 
            name: '存储',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0, 
                  color: '#188bfd'
                },{
                  offset: 1, 
                  color: '#51eeff'
                }])
              }
            }
          },{
            value: 0, 
            name: '其他',
            itemStyle: {
              normal: {
                color: 'rgba(0, 0, 0, 0)'
              }
            }
          },{
            value: 0, 
            name: '其他1',
            itemStyle: {
              normal: {
                color: 'rgba(0, 0, 0, 0)'
              }
            }
          },{
            value: 0, 
            name: '其他2',
            itemStyle: {
              normal: {
                color: 'rgba(0, 0, 0, 0)'
              }
            }
          },{
            value: 0, 
            name: '其他3',
            itemStyle: {
              normal: {
                color: 'rgba(0, 0, 0, 0)'
              }
            }
          }]
        }]
      }

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
.sn-container {
  left: 512px;
  top: 1120px;
  width: 432px;
  height: 400px;
  .chartsdom {
    width: 100%;
    height: 100%;
  }

  .pie {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    .pies {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-repeat: no-repeat;
      background-position: center center;
    }
    .pie1 {
      background-image: url(../../assets/img/whcircle.png);
      animation: mymove 20s linear infinite;
      -webkit-animation: mymove 20s linear infinite;
    }
    .pie2 {
      background-image: url(../../assets/img/circle2.png);
      animation: moveto 20s linear infinite;
      -webkit-animation: moveto 20s linear infinite;
    }
    .pie3 {
      background-image: url(../../assets/img/inner.png);
    }
    .pie4 {
      position: absolute;
      top: 50%;
      left: 36%;
      width: 76px;
      height: 1px;
      background: linear-gradient(to right,rgb(31,38,103), rgb(90,250,253), rgb(31,38,103));
    }
  }
}


@-webkit-keyframes mymove {
  0% {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes mymove {
  0% {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@-webkit-keyframes moveto {
  0% {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
@keyframes moveto {
  0% {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
</style>
