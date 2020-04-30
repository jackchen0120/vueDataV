<!--
 描述: 扫描半径图
 作者: Jack Chen
 日期: 2020-04-30
-->

<template>
  <div class="wrap-container sn-container"> 
    <div class="sn-content"> 
      <div class="sn-title">扫描半径图</div> 
      <div class="sn-body"> 
        <div class="wrap-container"> 
          <div class="chartsdom" id="chart_scan"></div>
          <div class="box">
            <div class="nodetext text0">
              <span>区块链</span>
            </div>
            <div class="nodetext text1">
              <span>人工智能</span>
            </div>
            <div class="nodetext text2">
              <span>大数据</span>
            </div>
            <div class="nodetext text3">
              <span>云计算</span>
            </div>
            <div class="nodetext text4">
              <span>移动互联网</span>
            </div>
          </div>
        </div> 
      </div> 

    </div>   
  </div>
</template>

<script>
export default {
  name: "scanRadius",
  data() {
    return {
      option: null,
      option2: null,
      val: 0
    }
  },
  mounted() {
    this.getEchart();
  },
  methods: {
    getEchart() {
      let myChart = echarts.init(document.getElementById('chart_scan'));
      let arrData = [{
        value: 3, 
        name: '区块链',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0, 
              color: '#4284dd'
            },{
              offset: 1, 
              color: '#0c3371'
            }])
          }
        }
      },{
        value: 4.5, 
        name: '人工智能',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0, 
              color: '#5253d3'
            },{
              offset: 1, 
              color: '#072559'
            }])
          }
        }
      },{
        value: 3, 
        name: '大数据',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0, 
              color: '#8b5c85'
            },{
              offset: 1, 
              color: '#183571'
            }])
          }
        }
      },{
        value: 5.5, 
        name: '云计算',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0, 
              color: '#b4734f'
            },{
              offset: 1, 
              color: '#443e5f'
            }])
          }
        }
      },{
        value: 3, 
        name: '移动互联网',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0, 
              color: '#3ab1d9'
            },{
              offset: 1, 
              color: '#124c94'
            }])
          }
        }
      }]

      for (let i = 0; i < arrData.length; i++) {
        this.val += arrData[i].value;
      }

      arrData.push({
        value: this.val, 
        name: '__other', 
        itemStyle: {
          normal: {
            color: 'rgba(0, 0, 0, 0)'
          }
        }
      });

      let arrData2 = [{
        value: 10,
        itemStyle: {
          normal: {
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(17, 93, 217, 0.4)',
            borderWidth: 1
          }
        }
      },{
        value: 10,
        itemStyle: {
          normal: {
            color: 'rgba(0, 0, 0, 0)'
          }
        }
      }]

      let tooltip = {
        formatter: ' ',
        backgroundColor: 'rgba(0, 0, 0, 0)'
      }

      this.option = {
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
        tooltip: {
          trigger: 'item' 
        },
        series: [{
          name: '现代技术',
          type: 'pie',
          startAngle: -180,
          radius: '190%',
          center: ['50%', '50%'],
          roseType: 'radius',
          z: 0,
          tooltip: {
            formatter: '{b0}: {c0} ({d0}%)' 
          },
          label: {
            show: false
          },
          emphasis: {
            label: {
              show: false
            }
          },
          data: arrData
        },{
          name: '2020年',
          type: 'pie',
          clockWise: false,
          startAngle: 0,
          hoverAnimation: false,
          radius: ['90%', '90%'],
          center: ['50%', '50%'],
          tooltip: tooltip,
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
            itemStyle: {
              normal: {
                color: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(21, 103, 214, 1)',
                borderWidth: 2,
                borderType: 'dashed'
              }
            }
          },{
            value: 10,
            itemStyle: {
              normal: {
                color: 'rgba(0, 0, 0, 0)'
              }
            }
          }]
        },{
          name: '2019年',
          type: 'pie',
          clockWise: false,
          startAngle: 0,
          hoverAnimation: false,
          radius: ['70%', '70%'],
          center: ['50%', '50%'],
          tooltip: tooltip,
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
          data: arrData2
        },{
          name: '2018年',
          type: 'pie',
          clockWise: false,
          startAngle: 0,
          hoverAnimation: false,
          radius: ['50%', '50%'],
          center: ['50%', '50%'],
          tooltip: tooltip,
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
          data: arrData2
        },{
          name: '2017年',
          type: 'pie',
          clockWise: false,
          startAngle: 0,
          hoverAnimation: false,
          radius: ['30%', '30%'],
          center: ['50%', '50%'],
          tooltip: tooltip,
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
          data: arrData2
        },{
          name: '2016年',
          type: 'pie',
          clockWise: false,
          startAngle: 0,
          hoverAnimation: false,
          radius: ['10%', '10%'],
          center: ['50%', '50%'],
          tooltip: tooltip,
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
          data: arrData2
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
  top: 1120px;
  width: 432px;
  height: 400px;
  .chartsdom {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .box {
    overflow: hidden;
    .nodetext{
      position: absolute;
      left: 50%;
      top: 51%;
      margin-left: -9px;
      -webkit-transform: translate(0%, -60%);
      -moz-transform: translate(0%, -60%);
      -ms-transform: translate(0%, -60%);
      -o-transform: translate(0%, -60%);
      transform: translate(0%, -60%);
      color: #00c2ff;
      font-size: 13px;
      &.text0{
        border-right: 2px rgba(29,122,248,0.54) solid;
        border-bottom: 2px rgba(29,122,248,0.54) solid;
        width: 70px;
        height: 50px;
        margin-left: -110px;
        margin-top: 25px;
        span {
          position: absolute;
          margin-top: 50px;
        }
        &:before {
          content: '';
          position: absolute;
          width: 5px;
          height: 5px;
          margin-top: 47px;
          -webkit-border-radius: 100%;
          -moz-border-radius: 100%;
          border-radius: 100%;
          background: rgb(47,138,240);
        }
      }
      &.text1{
        border-right: 2px rgba(29,122,248,0.54) solid;
        border-bottom: 2px rgb(134,92,255) solid;
        width: 30px;
        height: 80px;
        margin-left: -50px;
        margin-top: 44px;
        -webkit-border-image: -webkit-gradient( linear, left top, left bottom, from(rgba(29,122,248,0.54)), to(rgb(134,92,255))) 2 2;
        -webkit-border-image: -webkit-linear-gradient( rgba(29,122,248,0.54), rgb(134,92,255)) 2 2;
        -moz-border-image: -moz-linear-gradient( rgba(29,122,248,0.54), rgb(134,92,255)) 2 2;
        -o-border-image: -o-linear-gradient( rgba(29,122,248,0.54), rgb(134,92,255)) 2 2;
        border-image: -webkit-gradient( linear, left top, left bottom, from(rgba(29,122,248,0.54)), to(rgb(134,92,255))) 2 2;
        border-image: linear-gradient( rgba(29,122,248,0.54), rgb(134,92,255)) 2 2;
        span {
          position: absolute;
          margin-left: -50px;
          margin-top: 83px;
        }
        &:before {
          content: '';
          position: absolute;
          width: 5px;
          height: 5px;
          margin-top: 77px;
          -webkit-border-radius: 100%;
          -moz-border-radius: 100%;
          border-radius: 100%;
          background: rgb(117,94,255);
        }
      }
      &.text2{
        border-right: 2px rgba(29,122,248,0.54) solid;
        width: 30px;
        height: 93px;
        margin-top: 53px;
        margin-left: -31px;
        -webkit-border-image: -webkit-gradient( linear, left top, left bottom, from(rgb(10,106,255)), color-stop(rgba(112,107,189,0.54)),to(rgb(214,108,123))) 2 2;
        -webkit-border-image: -webkit-linear-gradient( rgb(10,106,255), rgba(112,107,189,0.54),rgb(214,108,123)) 2 2;
        -moz-border-image: -moz-linear-gradient( rgb(10,106,255), rgba(112,107,189,0.54),rgb(214,108,123)) 2 2;
        -o-border-image: -o-linear-gradient( rgb(10,106,255), rgba(112,107,189,0.54),rgb(214,108,123)) 2 2;
        border-image: -webkit-gradient( linear, left top, left bottom, from(rgb(10,106,255)), color-stop(rgba(112,107,189,0.54)),to(rgb(214,108,123))) 2 2;
        border-image: linear-gradient( rgb(10,106,255), rgba(112,107,189,0.54),rgb(214,108,123)) 2 2;
        span {
          position: absolute;
          display: block;
          width: 330px;
          margin-left: 8px;
          margin-top: 100px;
        }
        &:before {
          content: '';
          position: absolute;
          width: 5px;
          height: 5px;
          margin-top: 92px;
          margin-left: 26px;
          -webkit-border-radius: 100%;
          -moz-border-radius: 100%;
          border-radius: 100%;
          background: rgb(197,73,89);
        }
      }
      &.text3{
        border-left: 2px rgba(29,122,248,0.54) solid;
        border-bottom: 2px rgba(29,122,248,0.54) solid;
        width: 30px;
        height: 80px;
        margin-left: 18px;
        margin-top: 44px;
        -webkit-border-image: -webkit-gradient( linear, left top, left bottom, from(rgba(29,122,248,0.54)), color-stop(rgba(136,135,162,0.5)),to(rgb(249,161,77))) 2 2;
        -webkit-border-image: -webkit-linear-gradient( rgba(29,122,248,0.54), rgba(136,135,162,0.5),rgb(249,161,77)) 2 2;
        -moz-border-image: -moz-linear-gradient( rgba(29,122,248,0.54), rgba(136,135,162,0.5),rgb(249,161,77)) 2 2;
        -o-border-image: -o-linear-gradient( rgba(29,122,248,0.54), rgba(136,135,162,0.5),rgb(249,161,77)) 2 2;
        border-image: -webkit-gradient( linear, left top, left bottom, from(rgba(29,122,248,0.54)), color-stop(rgba(136,135,162,0.5)),to(rgb(249,161,77))) 2 2;
        border-image: linear-gradient( rgba(29,122,248,0.54), rgba(136,135,162,0.5),rgb(249,161,77)) 2 2;
        span {
          position: absolute;
          display: block;
          width: 330px;
          margin-left: 6px;
          margin-top: 83px;
        }
        &:before {
          content: '';
          position: absolute;
          width: 5px;
          height: 5px;
          margin-top: 77px;
          margin-left: 27px;
          -webkit-border-radius: 100%;
          -moz-border-radius: 100%;
          border-radius: 100%;
          background: rgb(230,137,50);
        }
      }
      &.text4{
        border-left: 2px rgba(29,122,248,0.54) solid;
        border-bottom: 2px rgba(29,122,248,0.54) solid;
        width: 70px;
        height: 50px;
        margin-left: 40px;
        margin-top: 25px;
        -webkit-border-image: -webkit-gradient( linear, left top, left bottom, from(rgba(29,122,248,0.54)), color-stop(rgba(51,181,255,0.64)),to(rgb(92,255,255))) 2 2;
        -webkit-border-image: -webkit-linear-gradient( rgba(29,122,248,0.54), rgba(51,181,255,0.64),rgb(92,255,255)) 2 2;
        -moz-border-image: -moz-linear-gradient( rgba(29,122,248,0.54), rgba(51,181,255,0.64),rgb(92,255,255)) 2 2;
        -o-border-image: -o-linear-gradient( rgba(29,122,248,0.54), rgba(51,181,255,0.64),rgb(92,255,255)) 2 2;
        border-image: -webkit-gradient( linear, left top, left bottom, from(rgba(29,122,248,0.54)), color-stop(rgba(51,181,255,0.64)),to(rgb(92,255,255))) 2 2;
        border-image: linear-gradient( rgba(29,122,248,0.54), rgba(51,181,255,0.64),rgb(92,255,255)) 2 2;
        span {
          position: absolute;
          display: block;
          width: 330px;
          margin-left: 10px;
          margin-top: 50px;
        }
        &:before {
          content: '';
          position: absolute;
          width: 5px;
          height: 5px;
          margin-top: 47px;
          margin-left: 63px;
          -webkit-border-radius: 100%;
          -moz-border-radius: 100%;
          border-radius: 100%;
          background:rgb(56,208,231);
        }
      }
    }
  }
}
</style>
