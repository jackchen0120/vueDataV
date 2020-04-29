<!--
 描述: 环形气泡图
 作者: Jack Chen
 日期: 2020-04-29
-->

<template>
  <div class="wrap-container sn-container"> 
    <div class="sn-content"> 
      <div class="sn-title">环形气泡图</div> 
      <div class="sn-body"> 
        <div class="wrap-container">
          <div class="chartsdom" id="chart_pin"></div>
          <div class="updef"></div>
          <div class="definfo definfo0"><span>8个</span><span></span></div>
          <div class="definfo definfo1"><span>10个</span><span></span></div>
          <div class="definfo definfo2"><span>35个</span><span></span></div>
          <div class="definfo definfo3"><span>38个</span><span></span></div>
          <div class="definfo definfo4"><span>48个</span><span></span></div>
          <div class="definfo definfo5"><span>55个</span><span></span></div>
          <div class="definfo definfo6"><span>42个</span><span></span></div>
          <div class="definfo definfo7"><span>95个</span><span></span></div>
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
      let linearGradient0 = {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0, 
          color: '#0a49c2'
        },{
          offset: 1, 
          color: '#13adc5'
        }])
      }
      let linearGradient1 = {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0, 
          color: '#0c388d'
        },{
          offset: 1, 
          color: '#137ff6'
        }])
      }
      let linearGradient2 = {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0, 
          color: '#05247a'
        },{
          offset: 1, 
          color: '#183cd7'
        }])
      }
      let linearGradient3 = {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0, 
          color: '#064d9d'
        },{
          offset: 1, 
          color: '#00b977'
        }])
      }
      let linearGradient4 = {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0, 
          color: '#133389'
        },{
          offset: 1, 
          color: '#5e51e3'
        }])
      }
      let linearGradient5 = {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0, 
          color: '#2a54a4'
        },{
          offset: 1, 
          color: '#ff900e'
        }])
      }
      let linearGradient6 = {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0, 
          color: '#5a847f'
        },{
          offset: 1, 
          color: '#e3de24'
        }])
      }
      let linearGradient7 = {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0, 
          color: '#38828a'
        },{
          offset: 1, 
          color: '#61ac62'
        }])
      }

      this.option = {
        color: ['#05bbdf', '#1170e1', '#1b40e3', '#00c86c', '#5e51e3', '#ff9235', '#fef51e', '#399632'],
        legend: {
          show: true,
          orient: 'vertical',
          left: '80%',
          top: 'middle',
          data: ['2020年', '2019年', '2018年', '2017年', '2016年', '2015年', '2014年', '2013年'],
          textStyle: {
            color: '#fff',
            fontSize: 14,
          },
          itemWidth: 20,
          itemHeight: 10
        },
        series: [{
          name: '2020年',
          type: 'pie',
          clockWise: false,
          startAngle: 0,
          hoverAnimation: false,
          radius: ['85%', '90%'],
          center: ['40%', '50%'],
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
            value: 300,
            itemStyle: {
              normal: {
                color: 'rgba(0, 0, 0, 0)'
              }
            }
          },{
            value: 270,
            itemStyle: linearGradient0
          },{
            value: 30,
            itemStyle: {
              normal: {
                color: '#053f67'
              }
            }
          }]
        },{
          name: '2019年',
          type: 'pie',
          clockWise: false,
          startAngle: 0,
          hoverAnimation: false,
          radius: ['75%', '80%'],
          center: ['40%', '50%'],
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
            value: 300,
            itemStyle: {
              normal: {
                color: 'rgba(0, 0, 0, 0)'
              }
            }
          },{
            value: 180,
            itemStyle: linearGradient1
          },{
            value: 120,
            itemStyle: {
              normal: {
                color: '#062d67'
              }
            }
          }]
        },{
          name: '2018年',
          type: 'pie',
          clockWise: false,
          startAngle: 0,
          hoverAnimation: false,
          radius: ['65%', '70%'],
          center: ['40%', '50%'],
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
            value: 300,
            itemStyle: {
              normal: {
                color: 'rgba(0, 0, 0, 0)'
              }
            }
          },{
            value: 220,
            itemStyle: linearGradient2
          },{
            value: 80,
            itemStyle: {
              normal: {
                color: '#0c266a'
              }
            }
          }]
        },{
          name: '2017年',
          type: 'pie',
          clockWise: false,
          startAngle: 0,
          hoverAnimation: false,
          radius: ['55%', '60%'],
          center: ['40%', '50%'],
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
            value: 300,
            itemStyle: {
              normal: {
                color: 'rgba(0, 0, 0, 0)'
              }
            }
          },{
            value: 210,
            itemStyle: linearGradient3
          },{
            value: 90,
            itemStyle: {
              normal: {
                color: '#03414f'
              }
            }
          }]
        },{
          name: '2016年',
          type: 'pie',
          clockWise: false,
          startAngle: 0,
          hoverAnimation: false,
          radius: ['45%', '50%'],
          center: ['40%', '50%'],
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
            value: 300,
            itemStyle: {
              normal: {
                color: 'rgba(0, 0, 0, 0)'
              }
            }
          },{
            value: 150,
            itemStyle: linearGradient4
          },{
            value: 150,
            itemStyle: {
              normal: {
                color: '#142868'
              }
            }
          }]
        },{
          name: '2015年',
          type: 'pie',
          clockWise: false,
          startAngle: 0,
          hoverAnimation: false,
          radius: ['35%', '40%'],
          center: ['40%', '50%'],
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
            value: 300,
            itemStyle: {
              normal: {
                color: 'rgba(0, 0, 0, 0)'
              }
            }
          },{
            value: 150,
            itemStyle: linearGradient5
          },{
            value: 150,
            itemStyle: {
              normal: {
                color: '#373546'
              }
            }
          }]
        },{
          name: '2014年',
          type: 'pie',
          clockWise: false,
          startAngle: 0,
          hoverAnimation: false,
          radius: ['25%', '30%'],
          center: ['40%', '50%'],
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
            value: 300,
            itemStyle: {
              normal: {
                color: 'rgba(0, 0, 0, 0)'
              }
            }
          },{
            value: 50,
            itemStyle: linearGradient6
          },{
            value: 250,
            itemStyle: {
              normal: {
                color: '#35483f'
              }
            }
          }]
        },{
          name: '2013年',
          type: 'pie',
          clockWise: false,
          startAngle: 0,
          hoverAnimation: false,
          radius: ['15%', '20%'],
          center: ['40%', '50%'],
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
            value: 300,
            itemStyle: {
              normal: {
                color: 'rgba(0, 0, 0, 0)'
              }
            }
          },{
            value: 50,
            itemStyle: linearGradient7
          },{
            value: 250,
            itemStyle: {
              normal: {
                color: '#0f3541'
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
  left: 50px;
  top: 1120px;
  width: 432px;
  height: 400px;
  .chartsdom {
    left: 23px;
    top: 15px;
    width: 100%;
    height: 90%;
  }

  .updef {
    position: absolute;
    width: 75%;
    height: 12px;
    left: 12px;
    top: 42%;
    background: rgba(6, 21, 104, 0.5);
    border-radius: 4px;
    box-shadow: 0px 0px 10px #066fe2 inset;
  }
  .definfo {
    position: absolute;
    top: 50%;
    transform: translate(0%,-50%);
    white-space: nowrap;
    font-size: 14px;
    color: #fff;
    span {
      &:nth-child(1) {
        display: block;
        width: 45px;
        height: 45px;
        line-height: 45px;
        text-align: center;
      }
      &:nth-child(2) {
        display: block;
        position: absolute;
        width: 0;
        margin-left: 21px;
      }
    }

    &.definfo0 {
      margin-top: -83px;
      margin-left: 34%;
      span {
        &:nth-child(1) {
          background: url(../../assets/img/icon_ls.png) repeat 0 0 !important;
        }
        &:nth-child(2) {
          height: 62px;
          border: 1px dashed #3a962f;
        }
      }
    }
    &.definfo1 {
      margin-top: -112px;
      margin-left: 41%;
      span {
        &:nth-child(1) {
          background: url(../../assets/img/icon_hs.png) repeat 0 0 !important;
        }
        &:nth-child(2) {
          height: 100px;
          border: 1px dashed #fff600;
        }
      }
    }
    &.definfo2 {
      margin-top: -109px;
      margin-left: 27%;
      span {
        &:nth-child(1) {
          background: url(../../assets/img/icon_cs.png) repeat 0 0 !important;
        }
        &:nth-child(2) {
          height: 112px;
          border: 1px dashed #ff9232;
        }
      }
    }
    &.definfo3 {
      margin-top: -58px;
      margin-left: 23%;
      span {
        &:nth-child(1) {
          background: url(../../assets/img/icon_zs.png) repeat 0 0 !important;
        }
        &:nth-child(2) {
          height: 66px;
          border: 1px dashed #5e50e5;
        }
      }
    }
    &.definfo4 {
      margin-top: -92px;
      margin-left: 18%;
      span {
        &:nth-child(1) {
          background: url(../../assets/img/icon_ml.png) repeat 0 0 !important;
        }
        &:nth-child(2) {
          height: 99px;
          border: 1px dashed #00c172;
        }
      }
    }
    &.definfo5 {
      margin-top: -65px;
      margin-left: 45%;
      span {
        &:nth-child(1) {
          background: url(../../assets/img/icon_sl.png) repeat 0 0 !important;
        }
        &:nth-child(2) {
          height: 118px;
          border: 1px dashed #1342f1;
        }
      }
    }
    &.definfo6 {
      margin-top: -88px;
      margin-left: 52%;
      span {
        &:nth-child(1) {
          background: url(../../assets/img/icon_ql.png) repeat 0 0 !important;
        }
        &:nth-child(2) {
          height: 141px;
          border: 1px dashed #0681fd;
        }
      }
    }
    &.definfo7 {
      margin-top: -70px;
      margin-left: 59%;
      span {
        &:nth-child(1) {
          background: url(../../assets/img/icon_qql.png) repeat 0 0 !important;
        }
        &:nth-child(2) {
          height: 117px;
          border: 1px dashed #2bcbe6;
        }
      }
    }
  }
}
</style>
