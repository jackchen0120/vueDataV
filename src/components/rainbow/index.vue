<!--
 描述: 彩虹轨道图
 作者: Jack Chen
 日期: 2020-04-18
-->

<template>
  <div class="wrap-container sn-container"> 
    <div class="sn-content"> 
      <div class="sn-title">彩虹轨道</div> 
      <div class="sn-body"> 
        <div class="wrap-container"> 
          <div class="chartsdom" id="chart_rbt"></div>

          <div class="preinfo" :class="`preinfo${index}`" v-for="(item, index) in arrData" :key="index">
            <span>{{ item.percent }}%</span>
            <span>{{ item.name }}</span>
          </div>

          <div class="preinfos" :class="`pre${i}`" v-for="(v, i) in arrData">
            <span></span>
            <span></span>
          </div>
        </div> 
      </div> 
    </div>   
  </div>
</template>

<script>
export default {
  name: "rainbow",
  data() {
    return {
      option: null,
      arrData: [{
        name: '食品类',
        percent: 73
      },{
        name: '工业类',
        percent: 20
      },{
        name: '医疗类',
        percent: 32
      },{
        name: '政务类',
        percent: 60
      },{
        name: '金融类',
        percent: 14
      }]
    }
  },
  mounted() {
    this.getEchart();
  },
  methods: {
    getEchart() {
      let myChart = echarts.init(document.getElementById('chart_rbt'));
      let itemStyle = {
        normal: {
          color: 'rgba(0, 0, 0, 0)',
        }
      }

      this.option = {
        color: ['#125ec1', '#3fa5c0', '#d68639', '#ad5b68', '#6082a5'],
        series: [{
          name: '金融类',
          type: 'pie',
          clockWise: false,
          startAngle: 90,
          hoverAnimation: false,
          radius: ['85%', '90%'],
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
          itemStyle: {
            shadowColor: '#125ec1',
            shadowBlur: 15
          },
          data: [{
            value: 15,
            name: '15%',
            itemStyle: {
              normal: {
                color: '#125ec1'
              }
            }
          },{
            value: 85,
            name: '50%',
            itemStyle: itemStyle
          }]
        },{
          name: '政务类',
          type: 'pie',
          clockWise: false,
          startAngle: 90,
          hoverAnimation: false,
          radius: ['72%', '77%'],
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
          itemStyle: {
            shadowColor: '#3fa5c0',
            shadowBlur: 15
          },
          data: [{
            value: 60,
            name: '60%',
            itemStyle: {
              normal: {
                color: '#3fa5c0'
              }
            }
          },{
            value: 40,
            name: '40%',
            itemStyle: itemStyle
          }]
        },{
          name: '医疗类',
          type: 'pie',
          clockWise: false,
          startAngle: 90,
          hoverAnimation: false,
          radius: ['59%', '64%'],
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
          itemStyle: {
            shadowColor: '#d68639',
            shadowBlur: 15
          },
          data: [{
            value: 32,
            name: '32%',
            itemStyle: {
              normal: {
                color: '#d68639'
              }
            }
          },{
            value: 68,
            name: '68%',
            itemStyle: itemStyle
          }]
        },{
          name: '工业类',
          type: 'pie',
          clockWise: false,
          startAngle: 90,
          hoverAnimation: false,
          radius: ['46%', '51%'],
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
          itemStyle: {
            shadowColor: '#ad5b68',
            shadowBlur: 15
          },
          data: [{
            value: 20,
            name: '20%',
            itemStyle: {
              normal: {
                color: '#ad5b68'
              }
            }
          },{
            value: 80,
            name: '80%',
            itemStyle: itemStyle
          }]
        },{
          name: '食品类',
          type: 'pie',
          clockWise: false,
          startAngle: 90,
          hoverAnimation: false,
          radius: ['33%', '38%'],
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
          itemStyle: {
            shadowColor: '#6082a5',
            shadowBlur: 15
          },
          data: [{
            value: 73,
            name: '73%',
            itemStyle: {
              normal: {
                color: '#6082a5'
              }
            }
          },{
            value: 27,
            name: '27%',
            itemStyle: itemStyle
          }]
        }]
      }

      // 使用制定的配置项和数据显示图表
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
  top: 2838px;
  width: 432px;
  height: 400px;
  .chartsdom {
    width: 100%;
    height: 100%;
  }

  .preinfo {
    position: absolute;
    left: 63%;
    top: 50%;
    margin-left: -2.5em;
    -webkit-transform: translate(0%,-50%);
    -moz-transform: translate(0%,-50%);
    -ms-transform: translate(0%,-50%);
    -o-transform: translate(0%,-50%);
    transform: translate(0%,-50%);
    white-space: nowrap;
    font-size: 13px;
    span {
      &:nth-child(1) {
        margin-right: 10px;
      }
    }
    &.preinfo0 {
      color: rgb(99, 139, 176); 
      margin-top: -65px;
    }
    &.preinfo1 {
      color: rgb(180, 91, 111); 
      margin-top: -87px;
    }
    &.preinfo2 {
      color: rgb(232, 138, 50); 
      margin-top: -109px;
    }
    &.preinfo3 {
      color: rgb(70, 179, 200); 
      margin-top: -131px;
    }
    &.preinfo4 {
      color: rgb(19, 98, 201); 
      margin-top: -153px;
    }
  }

  .preinfos {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 1px;
    height: 58px;
    background-color: rgb(99, 139, 176);
    -webkit-transform-origin: 50% 0;
    -moz-transform-origin: 50% 0;
    -ms-transform-origin: 50% 0;
    -o-transform-origin: 50% 0;
    transform-origin: 50% 0;
    span {
      &:nth-child(1) {
        width:8px;
        height:8px;
        -webkit-border-radius:100%;
        -moz-border-radius:100%;
        border-radius:100%;
        position:absolute;
        left: -3px;
        top: 50%;
      }
      &:nth-child(2) {
        width: 0;
        height: 0;
        border-width: 12px 5px 5px 5px;
        border-style: solid;
        position: absolute;
        left: -5px;
        top: 100%;
      }
    }
    &.pre0 {
      height: 65px; 
      background-color: rgb(99, 139, 176); 
      transform: rotate(-62.614deg);
      span {
        &:nth-child(1) {
          background-color: rgb(99, 139, 176);
        }
        &:nth-child(2) {
          border-color: rgb(99, 139, 176) transparent transparent;
        }
      }
    }
    &.pre1 {
      height: 87px; 
      background-color: rgb(180, 91, 111); 
      transform: rotate(125.593deg);
      span {
        &:nth-child(1) {
          background-color: rgb(180, 91, 111);
        }
        &:nth-child(2) {
          border-color: rgb(180, 91, 111) transparent transparent;
        }
      }
    }
    &.pre2 {
      height: 109px; 
      background-color: rgb(232, 138, 50); 
      transform: rotate(86.2006deg);
      span {
        &:nth-child(1) {
          background-color: rgb(232, 138, 50);
        }
        &:nth-child(2) {
          border-color: rgb(232, 138, 50) transparent transparent;
        }
      }
    }
    &.pre3 {
      height: 131px; 
      background-color: rgb(70, 179, 200); 
      transform: rotate(-18.845deg);
      span {
        &:nth-child(1) {
          background-color: rgb(70, 179, 200);
        }
        &:nth-child(2) {
          border-color: rgb(70, 179, 200) transparent transparent;
        }
      }
    }
    &.pre4 {
      height: 153px; 
      background-color: rgb(19, 98, 201); 
      transform: rotate(149.666deg);
      span {
        &:nth-child(1) {
          background-color: rgb(19, 98, 201);
        }
        &:nth-child(2) {
          border-color: rgb(19, 98, 201) transparent transparent;
        }
      }
    }
  }
}
</style>
