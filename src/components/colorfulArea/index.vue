<!--
 描述: 多彩轮播面积
 作者: Jack Chen
 日期: 2020-05-03
-->

<template>
  <div class="wrap-container sn-container"> 
    <div class="sn-content"> 
      <div class="sn-title">多彩轮播面积</div> 
      <div class="sn-body"> 
        <div class="wrap-container"> 
          <div class="chartsdom" id="chart_cra"></div>
        </div> 
      </div> 
    </div>   
  </div>
</template>

<script>

export default {
  name: "colorfulArea",
  data() {
    return {
      option: null,
      dataMap: {}
    }
  },
  mounted() {
    this.getEchart();
  },
  methods: {
    dataFormatter(obj) {
      let pList = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
      let temp;
      for (let x = 1; x <= 5; x++) {
          let max = 0;
          let sum = 0;
          temp = obj[x];
          for (let i = 0, l = temp.length; i < l; i++) {
              max = Math.max(max, temp[i]);
              sum += temp[i];
              obj[x][i] = {
                name: pList[i],
                value: temp[i]
              };
          }
          obj[x + 'max'] = Math.floor(max / 100) * 100;
          obj[x + 'sum'] = sum;
      }
      return obj;
    },
    getEchart() {
      let myChart = echarts.init(document.getElementById('chart_cra'));
      let itemStyle = {
        barBorderRadius: [15, 0],
        color: '#0084ff'
      }

      this.dataMap.dataType = this.dataFormatter({
        5:[96,96,96,96,96,96,96,96,96,96,96,96,85,85,85,85,85,85,98,54,50,54,54,54,54],
        4:[86,86,86,86,86,86,86,86,86,86,86,86,85,95,85,85,85,85,64,64,60,64,64,64,64],
        3:[90,90,90,90,90,90,90,90,90,90,95,90,91,91,91,91,91,91,54,54,50,54,54,54,54],
        2:[76,76,76,76,76,76,76,76,76,76,76,76,95,95,95,95,95,95,54,54,50,54,54,54,54],
        1:[66,66,66,66,66,66,66,66,66,96,66,66,85,85,85,85,85,85,55,55,50,55,55,55,55],
      });

      this.option = {
        baseOption: {
          timeline: {
            axisType: 'category',
            autoPlay: true,
            playInterval: 1000,
            data: ['5.1', '5.2', '5.3', '5.4', '5.5'],
            left: 50,
            right: 50,
            top: 5,
            lineStyle: {
              color: '#122e96'
            },
            label: {
              color: '#fff'
            },
            checkpointStyle: {
              color: '#ef8c2f',
              symbolSize: 10,
              borderColor: 'rgba(239, 140, 47, 0.5)',
              borderWidth: 5,
            },
            controlStyle: {
              showPlayBtn: false,
              borderColor: '#122e96',
              itemGap: 20
            }, 
            itemStyle: {
              borderColor: '#122e96',
              borderWidth: 5,
              // shadowColor: 'rgba(239, 140, 47, 0.5)',
              // shadowBlur: 5
            },
            emphasis: {
              label: {
                color: '#ef8c2f',
                show: false
              },
              checkpointStyle: {
                color: '#ef8c2f',
                borderColor: 'rgba(239, 140, 47, 0.5)',
                borderWidth: 5,
              },
              controlStyle: {
                borderColor: '#122e96'
              }, 
              itemStyle: {
                color: '#ef8c2f',
                borderColor: 'rgba(239, 140, 47, 0.5)',
                borderWidth: 5
              } 
            }
          },
          calculable: true,
          grid: {
            top: '25%',
            bottom: '12%'
          },
          xAxis: [{
            type: 'category',
            axisLabel: {
              interval: 5
            },
            data: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
            splitLine: { 
              show: false 
            },
            offset: 10,
            axisTick: {
              show: true,
              alignWithLabel: true,
              interval: 5,
              length: 10,
              lineStyle: {
                color: '#59aec8',
                width: 3
              }
            }, 
            axisLine: {
              show: false,
              lineStyle: {
                color: '#2867a8',
              }
            },
          }],
          yAxis: [{
            type: 'value',
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            }, 
            axisLine: {
              show: false,
              lineStyle: {
                color: '#2867a8'
              }
            }
          }],
          series: [{
            name: '多彩轮播面积', 
            type: 'line',
            markPoint: {
              symbol: 'pin',
              symbolSize: 40,
              itemStyle: {
                normal: {
                  color: '#ef8c2f',
                  shadowColor: '#ef8c2f',
                  shadowBlur: 15
                }
              },
              data: [
                {type: 'max', name: '最大值'}
              ]
            },
            itemStyle: {
              borderColor: '#1374e7',
              borderWidth: 10,
              shadowBlur: 10,
              shadowColor: '#1374e7', 
              opacity: 0,
            },
            label: {
              show: false,
              // position: 'top',
              // color: '#fff'
            },
            lineStyle: {
              width: 2,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#17418d'
              },{
                offset: 1,
                color: '#a56d42'
              }]),
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#1e4b4b'
                },{
                  offset: 1,
                  color: 'rgba(0, 0, 0, 0)'
                }]),
              }
            },
            smooth: true,
          }]
        },
        options: [{
          series: [{
            data: this.dataMap.dataType['1'],
            itemStyle: itemStyle
          }]
        },{
          series: [{
            data: this.dataMap.dataType['2'],
            itemStyle: itemStyle
          }]
        },{
          series: [{
            data: this.dataMap.dataType['3'],
            itemStyle: itemStyle
          }]
        },{
          series: [{
            data: this.dataMap.dataType['4'],
            itemStyle: itemStyle
          }]
        },{
          series: [{
            data: this.dataMap.dataType['5'],
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
  left: 1306px;
  top: 2408px;
  width: 560px;
  height: 400px;
  .chartsdom {
    width: 100%;
    height: 100%;
  }
}


</style>
