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
          <div class="pd-canvas">
              <canvas-circle v-for="(item, index) in cicleList" :key="index" :classStyle="item.classStyle" :color="item.color" :percent="item.ratio" :lineWidth="item.lineWidth" :id="index"></canvas-circle>
          </div>
          <!-- <div class="chartsdom" id="chart_run"></div> -->
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
import canvasCircle from './canvas'

export default {
  name: "circleRunway",
  components: {
    canvasCircle
  },
  data() {
    return {
      timer: null,
      option: null,
      cicleList: [{
        ratio: '50',
        color: '#0772bb',
        classStyle: 'canvasCircle1',
        lineWidth: 2,
      },{
        ratio: '30',
        color: '#00ffff',
        classStyle: 'canvasCircle2',
        lineWidth: 2,
      },{
        ratio: '20',
        color: '#f48b3b',
        classStyle: 'canvasCircle3',
        lineWidth: 2,
      }],
      arrData: [{
        name: '阿里云',
        number: 725,
        percentage: 41.50
      },{
        name: '腾讯云',
        number: 460,
        percentage: 30.95
      },{
        name: '华为云',
        number: 382,
        percentage: 22.48
      }]
    }
  },
  mounted() {
    // this.getEchart();
  },
  methods: {
    getEchart() {
      // 初始化echarts实例
      // let myChart = echarts.init(document.getElementById('chart_run'));
      // let itemStyle = {
      //   normal: {
      //     color: '#091f45',
      //   }
      // }

      // this.option = {
      //   animation: true,
      //   color: ['#0772bb', '#00ffff', '#f48b3b'],
      //   series: [{
      //     name: '2020年',
      //     type: 'pie',
      //     clockWise: false,
      //     startAngle: 90,
      //     hoverAnimation: false,
      //     radius: ['86%', '90%'],
      //     center: ['50%', '50%'],
      //     label: {
      //       normal: {
      //         show: false
      //       },
      //     },
      //     labelLine: {
      //       normal: {
      //         show: false
      //       }
      //     },
      //     data: [{
      //       value: 5,
      //       name: '50%',
      //       itemStyle: {
      //         normal: {
      //           color: '#0772bb'
      //         }
      //       }
      //     },{
      //       value: 5,
      //       name: '50%',
      //       itemStyle: itemStyle
      //     }]
      //   },{
      //     name: '2019年',
      //     type: 'pie',
      //     clockWise: false,
      //     startAngle: 90,
      //     hoverAnimation: false,
      //     radius: ['66%', '70%'],
      //     center: ['50%', '50%'],
      //     label: {
      //       normal: {
      //         show: false
      //       },
      //     },
      //     labelLine: {
      //       normal: {
      //         show: false
      //       }
      //     },
      //     data: [{
      //       value: 3,
      //       name: '50%',
      //       itemStyle: {
      //         normal: {
      //           color: '#00ffff'
      //         }
      //       }
      //     },{
      //       value: 7,
      //       name: '50%',
      //       itemStyle: itemStyle
      //     }]
      //   },{
      //     name: '2018年',
      //     type: 'pie',
      //     clockWise: false,
      //     startAngle: 90,
      //     hoverAnimation: false,
      //     radius: ['46%', '50%'],
      //     center: ['50%', '50%'],
      //     label: {
      //       normal: {
      //         show: false
      //       },
      //     },
      //     labelLine: {
      //       normal: {
      //         show: false
      //       }
      //     },
      //     data: [{
      //       value: 2,
      //       name: '50%',
      //       itemStyle: {
      //         normal: {
      //           color: '#f48b3b'
      //         }
      //       }
      //     },{
      //       value: 8,
      //       name: '50%',
      //       itemStyle: itemStyle
      //     }]
      //   }]
      // }

      // // 使用制定的配置项和数据显示图表
      // myChart.setOption(this.option, true);

      // window.addEventListener('resize', () => {
      //   myChart.resize();
      // });

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
  .pd-canvas {
    position: relative; 
    overflow: hidden; 
    width: 100%; 
    height: 90%; 
    padding: 0; 
    margin: 0; 
    border-width: 0; 
    cursor: default;
    .canvas {
      position: absolute;
      top: 50%;
      left: 50%;
      user-select: none; 
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0); 
      padding: 0; 
      margin: 0; 
      border-width: 0;
      &.canvasCircle1 {
        left: 66px;
        top: 3px;
      }
      &.canvasCircle2 {
        transform: scale(.8);
        left: 106px;
        top: -10px;
      }
      &.canvasCircle3 {
        left: 154px;
        top: 43px;
      }
    }
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
