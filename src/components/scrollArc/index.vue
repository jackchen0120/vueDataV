<!--
 描述: 滚动弧形线
 作者: Jack Chen
 日期: 2020-04-20
-->

<template>
  <div class="wrap-container sn-container"> 
    <div class="sn-content"> 
      <div class="sn-title">滚动弧形线</div> 
      <div class="sn-body"> 
        <div class="wrap-container"> 
          <div class="chartsdom" id="chart_arc"></div>
        </div> 
      </div> 
    </div>   
  </div>
</template>

<script>
export default {
  name: "scrollArc",
  data() {
    return {
      option: null,
      number: 0, // 播放所在下标
      timer: null,
      xData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      data: [54, 86, 46, 77, 96, 89, 88, 23, 38, 3, 66, 98]
    }
  },
  mounted() {
    this.getEchart();
  },
  methods: {
    getEchart() {
      let myChart = echarts.init(document.getElementById('chart_arc'));
      this.option = {
        tooltip: {
          trigger: 'axis',
          showContent: false,
          axisPointer: { 
            type: 'shadow',
            shadowStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 1,
                color: '#5d83ff'
              },{
                offset: 0,
                color: 'rgba(255, 255, 255, 0)'
              }])
            }
          },
        },
        color: ['#5d83ff'],
        grid: {
          top: 30,
          left: 20,
          right: 20,
          bottom: 20,
          containLabel: true //轴上的数值
        },
        xAxis: {
          type: 'category',
          data: this.xData,
          boundaryGap: false,
          axisTick: {
            show: false
          }, 
          axisLabel: {
            formatter: '{value} 月'
          },
          axisLine: {
            lineStyle: {
              color: '#999',
            }
          },
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false,
            lineStyle: {
              color: '#999'
            }
          },
        },
        series: [{
          name: '人数',
          type: 'line',
          data: this.data,
          symbolSize: 10,
          itemStyle: {
            opacity: 0,
          },
          emphasis: {
            label: {
              show: true,
              color: '#fff',
              fontSize: 20
            },
            itemStyle: {
              color: '#5d83ff',
              borderColor: '#fff',
              borderWidth: 2,
              opacity: 1
            },
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#5d83ff'
              },{
                offset: 1,
                color: 'rgba(0, 0, 0, 0)'
              }]),
            }
          },
          smooth: true,
        }]
      };
      myChart.setOption(this.option, true);

      window.addEventListener('resize', () => {
        myChart.resize();
      });

      this.timer = setInterval(() => {
        myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: this.number
        });

        this.number++;
        
        if (this.number > this.data.length) {
          this.number = 0;
        }
      }, 1000);
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style lang="scss" scoped>
.sn-container {
  left: 50px;
  top: 690px;
  width: 895px;
  height: 400px;
  .chartsdom {
    width: 100%;
    height: 95%;
  }
}
</style>
