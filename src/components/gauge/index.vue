<!--
 描述: 仪表盘
 作者: Jack Chen
 日期: 2020-05-03
-->

<template>
  <div class="wrap-container sn-container"> 
    <div class="sn-content"> 
      <div class="sn-title">仪表盘</div> 
      <div class="sn-body"> 
        <div class="wrap-container"> 
          <div class="chartsdom" id="chart_gauge"></div> 
        </div> 
      </div> 
    </div>   
  </div>
</template>

<script>
export default {
  name: "gauge",
  data() {
    return {
      option: null,
      timer: null
    }
  },
  mounted() {
    this.getEchart();
  },
  methods: {
    getEchart() {
      let myChart = echarts.init(document.getElementById('chart_gauge'));
      this.option = {
        tooltip: {
          formatter: '{a} <br/>{c} {b}'
        },
         series: [{
            name: '速度',
            type: 'gauge',
            min: 0,
            max: 220,
            splitNumber: 11,
            // radius: '50%',
            axisLine: {            // 坐标轴线
              lineStyle: {       // 属性lineStyle控制线条样式
                color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
                width: 3,
                shadowColor: '#fff', //默认透明
                shadowBlur: 10
              }
            },
            axisLabel: {            // 坐标轴小标记
              fontWeight: 'bolder',
              color: '#fff',
              shadowColor: '#fff', //默认透明
              shadowBlur: 10
            },
            axisTick: {            // 坐标轴小标记
                length: 15,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                  color: 'auto',
                  shadowColor: '#fff', //默认透明
                  shadowBlur: 10
                }
            },
            splitLine: {           // 分隔线
              length: 25,         // 属性length控制线长
              lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                width: 3,
                color: '#fff',
                shadowColor: '#fff', //默认透明
                shadowBlur: 10
              }
            },
            pointer: {           // 分隔线
              shadowColor: '#fff', //默认透明
              shadowBlur: 5
            },
            title: {
              textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                fontSize: 20,
                fontStyle: 'italic',
                color: '#fff',
                shadowColor: '#fff', //默认透明
                shadowBlur: 10
              }
            },
            detail: {
              // backgroundColor: 'rgba(30,144,255,0.8)',
              // borderWidth: 1,
              // borderColor: '#fff',
              // shadowColor: '#fff', //默认透明
              // shadowBlur: 5,
              offsetCenter: [0, '50%'],       // x, y，单位px
              textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                fontSize: 25,
                color: '#fff'
              }
            },
            data: [{
              value: 40, 
              name: 'km/h'
            }]
        }]
      }


      myChart.setOption(this.option, true);

      window.addEventListener('resize', () => {
        myChart.resize();
      });

      this.timer = setInterval(() => {
        this.option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
        myChart.setOption(this.option, true);
      },2000);
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style lang="scss" scoped>
.sn-container {
  left: 512px;
  top: 2838px;
  width: 432px;
  height: 400px;
  .chartsdom {
    width: 100%;
    height: 100%;
  }
}
</style>
