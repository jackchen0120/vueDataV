<!--
 描述: 圆环套圆环
 作者: Jack Chen
 日期: 2020-05-03
-->

<template>
  <div class="wrap-container sn-container"> 
    <div class="sn-content"> 
      <div class="sn-title">圆环套圆环</div> 
      <div class="sn-body">
        <div class="defelement"> 
          <div class="wrap-container"> 
            <div class="chartsdom" id="chart_circle"></div> 

            <div class="svg-dom"> 
              <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> 
               <path id="svg_2" d="m117,210c0,-51.65746 41.61878,-93.5 93,-93.5c51.38122,0 93,41.84254 93,93.5c0,51.65746 -41.61878,93.5 -93,93.5c-51.38122,0 -93,-41.84254 -93,-93.5z" stroke="#bfbfbf" fill="none" stroke-dasharray="3,3" xmlns="http://www.w3.org/2000/svg"></path> 
               <path id="svg_3" d="m134,210c0,-41.71271 34.01105,-75.5 76,-75.5c41.98895,0 76,33.78729 76,75.5c0,41.71271 -34.01105,75.5 -76,75.5c-41.98895,0 -76,-33.78729 -76,-75.5z" stroke="#bfbfbf" fill="none" stroke-dasharray="3,3" xmlns="http://www.w3.org/2000/svg"></path> 
              </svg> 
            </div>

            <div class="cir-arrow cir-arrow1"></div>
            <div class="cir-arrow cir-arrow2"></div>
          </div>
        </div> 
      </div> 
    </div>   
  </div>
</template>

<script>
export default {
  name: "circleNesting",
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
      let myChart = echarts.init(document.getElementById('chart_circle'));
      let itemStyle = {
        normal: {
          color: 'rgba(0, 0, 0, 0)',
        }
      }

      this.option = {
        color: ['#5d8ef8', '#638bfd', '#1dd1c1'],
        series: [{
          // name: '2020年',
          type: 'pie',
          clockWise: false,
          startAngle: 90,
          hoverAnimation: false,
          radius: ['68%', '70%'],
          center: ['50%', '50%'],
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
          data: [{
            value: 10,
            name: '100%',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 1,
                  color: '#628cfd'
                },{
                  offset: 0,
                  color: '#20cdc4'
                }]),
              }
            }
          }]
        },{
          // name: '交易占比'
          type: 'pie',
          clockWise: false,
          startAngle: 90,
          hoverAnimation: false,
          radius: ['53%', '56%'],
          center: ['50%', '50%'],
          label: {
            normal: {
              show: true,
              fontSize: 16,
              lineHeight: 22,
              formatter: (param) => {
                return param.name + '\n' + param.value + '%';
              }  
            },
          },
          labelLine: {
            smooth: true,
            normal: {
              show: true,
              length: 20,
              length2: 20,
              lineStyle: {
                type: 'dotted'
              }
            }
          },
          data: [{
            value: 64,
            name: '交易比',
            itemStyle: {
              normal: {
                color: '#638bfd'
              }
            }
          },{
            value: 36,
            name: '',
            itemStyle: itemStyle
          }]
        },{
          // name: '通道占比'
          type: 'pie',
          clockWise: false,
          startAngle: 0,
          hoverAnimation: false,
          radius: ['43%', '46%'],
          center: ['50%', '50%'],
          label: {
            normal: {
              show: true,
              fontSize: 16,
              lineHeight: 22,
              formatter: (param) => {
                return param.name + '\n' + param.value + '%';
              }
            },
          },
          labelLine: {
            smooth: true,
            normal: {
              show: true,
              length: 20,
              length2: 50,
              lineStyle: {
                type: 'dotted'
              }
            }
          },
          data: [{
            value: 36,
            name: '通道比',
            itemStyle: {
              normal: {
                color: '#1dd1c1'
              }
            }
          },{
            value: 64,
            name: '',
            itemStyle: itemStyle
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
  left: 1436px;
  top: 2837px;
  width: 432px;
  height: 400px;
  .defelement {
    position: absolute;
    height: 420px;
    border: none;
    top: -40px;
    left: 6px;
    width: 420px;
    overflow: hidden;
  }
  .chartsdom {
    width: 100%;
    height: 100%;
  }

  .svg-dom{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }
  .cir-arrow {
    width: 17px;
    height: 17px;
    offset-distance: 0%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    &.cir-arrow1 {
      background: url(../../assets/img/icon_circle1.png) no-repeat 50% 50%;
      -webkit-animation: cir-arrow1 5s linear infinite;
      animation: cir-arrow1 5s linear infinite;
      offset-path: path("m117,210c0,-51.65746 41.61878,-93.5 93,-93.5c51.38122,0 93,41.84254 93,93.5c0,51.65746 -41.61878,93.5 -93,93.5c-51.38122,0 -93,-41.84254 -93,-93.5z");
    }
    &.cir-arrow2 {
      background: url(../../assets/img/icon_circle2.png) no-repeat 50% 50%;
      -webkit-animation: cir-arrow2 5s linear infinite;
      animation: cir-arrow2 5s linear infinite;
      offset-path: path("m134,210c0,-41.71271 34.01105,-75.5 76,-75.5c41.98895,0 76,33.78729 76,75.5c0,41.71271 -34.01105,75.5 -76,75.5c-41.98895,0 -76,-33.78729 -76,-75.5z");
    }
  }

}

@-webkit-keyframes cir-arrow1 {
  0% {
    offset-distance: 0%;
    opacity: 1;
  }
  100% {
    offset-distance: 100%;
    opacity: 1;
  }
}
@keyframes cir-arrow1 {
  0% {
    offset-distance: 0%;
    opacity: 1;
  }
  100% {
    offset-distance: 100%;
    opacity: 1;
  }
}

@-webkit-keyframes cir-arrow2 {
    0% {
      offset-distance: 100%;
      opacity: 1;
    }
    100% {
      offset-distance: 0%;
      opacity: 1;
    }
}
@keyframes cir-arrow2 {
    0% {
      offset-distance: 100%;
      opacity: 1;
    }
    100% {
      offset-distance: 0%;
      opacity: 1;
    }
}

</style>
