<!--
 描述: 环形跑道图
 作者: Jack Chen
 日期: 2020-04-29
-->

<template>
  <div class="wrap-container sn-container"> 
    <div class="sn-content"> 
      <div class="sn-title">环形跑道图</div> 
      <div class="sn-body"> 
        <div class="wrap-container">
          <div class="chartsdom" id="chart_run"></div>
          <div class="pdt-info" :class="`info${index}`" v-for="(item, index) in arrData" :key="index">
            <span></span>
            <span>{{ item.name }}：</span>
            <span>{{ item.number }}</span>
            <span>（{{ item.percentage }}%）</span>
          </div>
        </div> 
      </div> 
    </div>   
  </div>
</template>

<script>
export default {
  name: "circleRunway",
  data() {
    return {
      option: null,
      arrData: [{
        name: '联盟链',
        number: 725,
        percentage: 41.50
      },{
        name: '私有链',
        number: 460,
        percentage: 30.95
      },{
        name: '公有链',
        number: 382,
        percentage: 22.48
      }]
    }
  },
  mounted() {
    this.getEchart();
  },
  methods: {
    getEchart() {
      // 初始化echarts实例
      let myChart = echarts.init(document.getElementById('chart_run'));
      let itemStyle = {
        normal: {
          color: '#091f45',
        }
      }

      this.option = {
        color: ['#0772bb', '#00ffff', '#f48b3b'],
        series: [{
          name: '联盟链',
          type: 'pie',
          clockWise: false,
          startAngle: 90,
          hoverAnimation: false,
          radius: ['86%', '90%'],
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
          data: [{
            value: 5,
            name: '50%',
            itemStyle: {
              normal: {
                color: '#0772bb'
              }
            }
          },{
            value: 5,
            name: '50%',
            itemStyle: itemStyle
          }]
        },{
          name: '私有链',
          type: 'pie',
          clockWise: false,
          startAngle: 90,
          hoverAnimation: false,
          radius: ['66%', '70%'],
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
          data: [{
            value: 3,
            name: '50%',
            itemStyle: {
              normal: {
                color: '#00ffff'
              }
            }
          },{
            value: 7,
            name: '50%',
            itemStyle: itemStyle
          }]
        },{
          name: '公有链',
          type: 'pie',
          clockWise: false,
          startAngle: 90,
          hoverAnimation: false,
          radius: ['46%', '50%'],
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
          data: [{
            value: 2,
            name: '50%',
            itemStyle: {
              normal: {
                color: '#f48b3b'
              }
            }
          },{
            value: 8,
            name: '50%',
            itemStyle: itemStyle
          }]
        }]
      }

      // 使用制定的配置项和数据显示图表
      myChart.setOption(this.option, true);

      window.addEventListener('resize', () => {
        myChart.resize();
      });

    },
  },
  beforeDestroy() {
    
  }
};
</script>

<style lang="scss" scoped>
.sn-container {
  left: 974px;
  top: 1120px;
  width: 432px;
  height: 400px;
  .chartsdom {
    width: 100%;
    height: 90%;
  }
  
  .pdt-info {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -1px;
    transform: translate(0%, -50%);
    white-space: nowrap;
    &.info0 {
      margin-top: -160.5px;
      span {
        &:nth-child(1) {
          background-color: rgb(0, 114, 188);
        }
      }
    }
    &.info1 {
      margin-top: -128.5px;
      span {
        &:nth-child(1) {
          background-color: rgb(0, 255, 255);
        }
      }
    }
    &.info2 {
      margin-top: -96.5px;
      span {
        &:nth-child(1) {
          background-color: rgb(255, 146, 50);
        }
      }
    }
    > span {
      font-size: 16px;
      color: #0072bc;
      vertical-align: middle;
      &:nth-child(1) {
        margin-right: 6px;
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        box-shadow: 0 0 2em, 0 0 4em, 0 0 6em, 0 0 8em, 0 0 10em, 0 0 0 0.5em rgba(255, 255, 0, 0.1);
        text-decoration: underline;
        cursor: pointer;
        &:hover {
          color: #00aeef;
        }
      }
      &:nth-child(2) {
        font-family: Arial;
        color: #00aeef;
      }
    }
  }
}
</style>
