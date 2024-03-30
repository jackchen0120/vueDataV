<!--
 描述: 动态轮播折线图
 作者: Jack Chen
 日期: 2020-04-18
-->

<template>
  <div class="wrap-container sn-container"> 
    <div class="sn-content"> 
      <div class="sn-title">动态折线图</div> 
      <div class="sn-body"> 
        <div class="wrap-container"> 
          <div class="chartsdom" id="chart_dt"></div> 
        </div> 
      </div> 
    </div>   
  </div>
</template>

<script>
export default {
  name: "dynamicLine",
  data() {
    return {
      option: null,
      timer: null,
      xData: [],
      now: +new Date(2019, 1, 1),
      value: Math.random() * 1000,
      oneDay: 24 * 3600 * 1000
      
    }
  },
  mounted() {
    this.getEchart();
  },
  methods: {
    randomData() {
      this.now = new Date(+this.now + this.oneDay);
      this.value = this.value + Math.random() * 25 - 10;
      return {
        name: this.now.toString(),
        value: [
            [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
            Math.round(this.value)
        ]
      };
    },
    getEchart() {
      let myChart = echarts.init(document.getElementById('chart_dt'));
      for (let i = 0; i < 1000; i++) {
        this.xData.push(this.randomData());
      }

      this.option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#283b56'
              }
            }
          }
        },
        grid: {
          top: '10%',
          left: '3%',
          right: '12%',
          bottom: '3%',
          containLabel: true
        },
        color: ['#b54c5d'],
        calculable: true,
        xAxis: {
          type: 'time',
          name: '年-月-日',
          boundaryGap: false,
          splitNumber: 5,
          axisLabel: {
            formatter(value) {
              let date = new Date(value);
              return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
            }
          },
          axisTick: {
            show: false
          }, 
          axisLine: {
            show: true,
            lineStyle: {
              color: '#2867a8'
            }
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          scale: true,
          name: '比特币（美元）',
          min: 0,
          boundaryGap:  false,
          axisTick: {
            show: false
          }, 
          axisLine: {
            show: true,
            lineStyle: {
              color: '#2867a8'
            }
          },
          splitLine: {
            show: false
          },
        },
        series: [{
          name: '实时交易',
          type: 'line',
          xAxisIndex: 0,
          yAxisIndex: 0,
          itemStyle: {
            opacity: 0,
          },
          data: this.xData,
          smooth: true
        }]
      }

      myChart.setOption(this.option, true);

      window.addEventListener('resize', () => {
        myChart.resize();
      });

      this.timer = setInterval(() => {
        for (let i = 0; i < 5; i++) {
          this.xData.shift();
          this.xData.push(this.randomData());
        }

        myChart.setOption(this.option, true);
      }, 2000);
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style lang="scss" scoped>
.sn-container {
  left: 1282px;
  top: 1548px;
  width: 586px;
  height: 400px;
  .chartsdom {
    width: 100%;
    height: 100%;
  }
}
</style>
