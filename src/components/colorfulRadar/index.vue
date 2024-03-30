<!--
 描述: 多彩雷达
 作者: Jack Chen
 日期: 2020-05-02
-->

<template>
  <div class="wrap-container sn-container"> 
    <div class="sn-content"> 
      <div class="sn-title">多彩雷达</div> 
      <div class="sn-body"> 
        <div class="wrap-container"> 
          <div class="chartsdom" id="chart_radar"></div> 
        </div> 
      </div> 
    </div>   
  </div>
</template>

<script>
export default {
  name: "colorfulRadar",
  data() {
    return {
      option: null
      
    }
  },
  mounted() {
    this.getEchart();
  },
  methods: {
    getEchart() {
      let myChart = echarts.init(document.getElementById('chart_radar'));
      this.option = {
        tooltip: {
          trigger: 'axis'
        },
        radar: [{
          indicator: [
            {text: '外观', max: 100},
            {text: '拍照', max: 100},
            {text: '系统', max: 100},
            {text: '性能', max: 100},
            {text: '屏幕', max: 100},
            {text: '折叠', max: 100}
          ],
          radius: '75%',
          center: ['50%', '50%'],
          name: {
            textStyle: {
              color: '#1883ff'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisLine: {
            show: true,
            symbol: 'arrow',
            symbolSize: [5, 7.5],
            lineStyle: {
              color: '#1883ff',
              type: 'dashed'
            }
          },
          splitArea: {
            show: false
          },
          splitLine: {
            show: false
          }
        }],
        series: [{
          type: 'radar',
          areaStyle: {},
          symbol: 'none',
          itemStyle: {
            normal: {
              areaStyle: {
                type: 'default'
              }
            }
          },
          lineStyle: {
            opacity: 0,
          },
          data: [{
            value: [35, 50, 30, 30, 40, 45],
            name: '智能手机',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0, 
                  color: '#9c6b4e'
                },{
                  offset: 1, 
                  color: '#2a59ac'
                }]),
                lineStyle: {
                  color: '#2a59ac'
                }
              }
            }
          },
          {
            value: [70, 40, 55, 55, 30, 55],
            name: '5G手机',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0, 
                  color: '#0855ca'
                },{
                  offset: 1, 
                  color: '#36a6c7'
                }]),
                lineStyle: {
                  color: '#36a6c7'
                }
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
  left: 1436px;
  top: 1978px;
  width: 432px;
  height: 400px;
  .chartsdom {
    width: 100%;
    height: 100%;
  }
}
</style>
