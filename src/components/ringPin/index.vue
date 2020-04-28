<template>
  <!-- 环形气泡图 -->
  <div class="wrap-container sn-container"> 
    <div class="sn-content"> 
      <div class="sn-title">环形气泡图</div> 
      <div class="sn-body"> 
        <div class="wrap-container">
          <div class="chartsdom" id="chart_pin"></div>
        </div> 
      </div> 
    </div>   
  </div>
</template>

<script>
export default {
  name: "ringPin",
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
      let myChart = echarts.init(document.getElementById('chart_pin'));
      let BorderWidth = '5';
      // 反方向剩下部分的样式
      let placeHolderStyle = {
        normal: {
          label: {
            show: false,
            position: "center"
          },
          labelLine: {
            show: false
          },
          // color: "rgba(0,0,0,0)",
          // borderColor: "rgba(0,0,0,0)",
          borderWidth: BorderWidth,
          borderColor: '#bebebe'
        }
      }

      this.option = {
        color: ['#53f1f2', '#4ebefd'],
        legend: {
          show: true,
          orient: 'vertical',
          left: 'left',
          top: 'middle',
          data: ['重要', '次要'],
          textStyle: {
            color:'#fff',
            fontSize:16
          }
        },
        series: [{
          name: '重要',
          type: 'pie',
          clockWise: false,
          startAngle: 180,
          hoverAnimation: false,
          radius: [100, 101],
          itemStyle: {
            normal: {
              label: {
                show: false,
                position: 'outside'
              },
              labelLine: {
                show: false,
                length: 100,
                smooth: 0.5
              },
              borderWidth: BorderWidth,
              shadowBlur: 40,
              borderColor: "#53f1f2",
              shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
          },
          data: [{
            value: 2,
            name: '20%'
          },{
            value: 3,
            name: '',
            itemStyle: placeHolderStyle
          }, {
            value: 0,
            itemStyle: {normal:{color:'rgba(0,0,0,0)'}}
          }]
        }, {
          name: '次要',
          type: 'pie',
          clockWise: false,
          hoverAnimation: false,
          radius: [80, 81],
          itemStyle: {
            normal: {
              label: {
                show: false
              },
              labelLine: {
                show: false,
                length: 100,
                smooth: 0.5
              },
              borderWidth: BorderWidth,
              shadowBlur: 40,
              borderColor: "#4ebefd",
              shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
          },
          data: [{
            value: 3,
            name: '30%'
          }, {
            value: 2,
            name: '',
            itemStyle: placeHolderStyle
          }, {
            value: 0,
            itemStyle: {normal:{color:'rgba(0,0,0,0)'}}
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
  left: 50px;
  top: 1120px;
  width: 432px;
  height: 400px;
  .chartsdom {
    left: 23px;
    top: 15px;
    width: 90%;
    height: 90%;
  }
}
</style>
