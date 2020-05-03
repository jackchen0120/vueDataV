<!--
 描述: 环形饼图
 作者: Jack Chen
 日期: 2020-05-02
-->

<template>
  <div class="wrap-container sn-container"> 
    <div class="sn-content"> 
      <div class="sn-title">环形饼图</div> 
      <div class="sn-body"> 
        <div class="wrap-container ring-pie"> 
          <div class="back-chart"> 
           <svg width="100%" height="100%" viewBox="0 0 150 150" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> 
            <path id="svg_2" d="m3,75c0,-39.77901 32.22099,-72 72,-72c39.77901,0 72,32.22099 72,72c0,39.77901 -32.22099,72 -72,72c-39.77901,0 -72,-32.22099 -72,-72z" stroke="#2de6af" fill-opacity="null" fill="none"></path> 
           </svg> 
          </div>

          <div class="chartsdom" id="chart_rp"></div>

          <div class="arrow-cir arrow-cir1"></div>
          <div class="arrow-cir arrow-cir2"></div>
        </div> 
      </div> 
    </div>   
  </div>
</template>

<script>
export default {
  name: "ringPie",
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
      let myChart = echarts.init(document.getElementById('chart_rp'));
      this.option = {
        series: [{
          name: '环形饼图',
          type: 'pie',
          radius: ['68%', '80%'],
          hoverAnimation: false,
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: false
            }
          },
          labelLine: {
            show: false
          },
          data: [{
            value: 6, 
            name: '区块链',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0, 
                  color: '#6984fe'
                },{
                  offset: 1, 
                  color: '#24d1fd'
                }])
              }
            }
          },{
            value: 4, 
            name: '大数据',
            itemStyle: {
              normal: {
                color: '#eee'
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
  left: 974px;
  top: 1978px;
  width: 432px;
  height: 400px;
  .wrap-container {
    left: 125px;
    top: 94px;
    width: 150px;
    height: 150px;
  }
  .chartsdom {
    width: 100%;
    height: 100%;
  }

  .back-chart{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background:url(../../assets/img/back_chart.png) no-repeat center;
  }
  .arrow-cir {
    width: 8px;
    height: 8px;
    offset-distance: 0%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    &.arrow-cir1 {
      background: url(../../assets/img/icon_04.png) no-repeat 50% 50%;
      -webkit-animation: arrow-cir1 5s linear infinite;
      animation: arrow-cir1 5s linear infinite;
      offset-path: path("m3,75c0,-39.77901 32.22099,-72 72,-72c39.77901,0 72,32.22099 72,72c0,39.77901 -32.22099,72 -72,72c-39.77901,0 -72,-32.22099 -72,-72z");
    }
    &.arrow-cir2 {
      background: url(../../assets/img/icon_05.png) no-repeat 50% 50%;
      -webkit-animation: arrow-cir2 5s linear infinite;
      animation: arrow-cir2 5s linear infinite;
      offset-path: path("m3,75c0,-39.77901 32.22099,-72 72,-72c39.77901,0 72,32.22099 72,72c0,39.77901 -32.22099,72 -72,72c-39.77901,0 -72,-32.22099 -72,-72z");
    }
  }
  
}

@-webkit-keyframes arrow-cir1 {
  0% {
    offset-distance: 40%;
    opacity: 1;
  }
  100% {
    offset-distance: 140%;
    opacity: 1;
  }
}
@keyframes arrow-cir1 {
  0% {
    offset-distance: 40%;
    opacity: 1;
  }
  100% {
    offset-distance: 140%;
    opacity: 1;
  }
}

@-webkit-keyframes arrow-cir2 {
  0% {
    offset-distance: 0%;
    opacity: 1;
  }
  100% {
    offset-distance: 100%;
    opacity: 1;
  }
}
@keyframes arrow-cir2 {
  0% {
    offset-distance: 0%;
    opacity: 1;
  }
  100% {
    offset-distance: 100%;
    opacity: 1;
  }
}
</style>
