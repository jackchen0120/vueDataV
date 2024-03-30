<!--
 描述: 3D立体柱状图
 作者: Jack Chen
 日期: 2020-04-18
-->

<template>
  <div class="wrap-container trigle">
    <div class="bar bar-img"></div>
    <div class="bar bar-img1"></div>
    <div class="bar bar-img2"></div>

    <div class="chartsdom" id="chart_3d"></div>
  </div>
</template>

<script>
export default {
  name: "bar3d",
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
      let myChart = echarts.init(document.getElementById('chart_3d'));
      let xData = ['20-25','25-30','30-35','35-40','40-45','45-50'];
      let days = ['1', '2', '3', '4', '5', '6'];
      let sex = ['女','男'];
      let data = [
        [0, 0, 3, sex[0], xData[0], 500, 25],
        [0, 1, 2.5, sex[0], xData[3], 1000, 35],
        [0, 2, 1.5, sex[1], xData[4], 3000, 5],
        [0, 3, 1, sex[1], xData[1], 300, 15],
        [0, 4, 2, sex[0], xData[2], 500, 55],
        [0, 5, 3, sex[0], xData[3], 1500, 45],

        [1, 5, 6, sex[1], xData[0], 300, 25],
        [1, 1, 4, sex[0], xData[1], 500, 22],
        [1, 2, 2, sex[0], xData[2], 1500, 38],
        [1, 3, 1.5, sex[1], xData[3], 2500, 25],
        [1, 4, 3, sex[0], xData[4], 3500, 49],
        [1, 0, 4, sex[1], xData[5], 5500, 15],

        [2, 2, 3, sex[1], xData[0], 300, 25],
        [2, 1, 2, sex[0], xData[4], 1300, 25],
        [2, 2, 5, sex[0], xData[2], 900, 25],
        [2, 5, 1, sex[1], xData[3], 2000, 25],
        [2, 0, 3, sex[1], xData[1], 2300, 25],
        [2, 0, 10, sex[1], xData[5], 3500, 25],

        [3, 2, 3, sex[0], xData[5], 500, 35],
        [3, 3, 2, sex[0], xData[4], 2300, 55],
        [3, 2, 1, sex[1], xData[3], 3300, 15],
        [3, 5, 5, sex[1], xData[2], 500, 10],
        [3, 1, 2, sex[1], xData[1], 1000, 35],
        [3, 0, 1, sex[0], xData[0], 300, 45],

        [4, 2, 3, sex[1], xData[1], 600, 25],
        [4, 0, 5, sex[0], xData[0], 500, 15],
        [4, 1, 3.5, sex[1], xData[3], 4000, 5],
        [4, 4, 7, sex[0], xData[0], 300, 75],
        [4, 1, 0, sex[1], xData[5], 3000, 85],
        [3, 1, 3, sex[0], xData[2], 2500, 65],

        [5, 2, 3, sex[0], xData[2], 500, 15],
        [5, 1, 2, sex[1], xData[3], 3300, 52],
        [5, 1, 5, sex[0], xData[4], 1000, 88],
        [5, 5, 8, sex[1], xData[0], 200, 12],
        [5, 2, 7, sex[0], xData[0], 300, 45],
        [3, 2, 2, sex[1], xData[1], 5000, 51]
      ];

      this.option = {
        tooltip: {
          borderColor: '#8a704e',
          borderWidth: 1,
          padding: 15,
          formatter: (params) => {
            let html = `${params.seriesName} <br> <span style="color: #fff;">性别：${params.value[3]} <br> 年龄：${params.value[4]}岁<br> 贷款金额：${params.value[5]} <br> 总人数：${params.value[6]}</span>`;
            return html;
          },
          textStyle: {
            color: '#8a704e',
            fontSize: 16
          }
        },
        xAxis3D: {
          type: 'category',
          data: xData
        },
        yAxis3D: {
          type: 'category',
          data: days
        },
        zAxis3D: {
          type: 'value'
        },
        grid3D: {
          show: false,
          boxWidth: 160,
          boxDepth: 80,
          viewControl: {
            alpha: 10,
            beta: 15
          }
        },
        series: [{
          type: 'bar3D',
          name: '当前值',
          data: data.map((item) => {
            return {
              value: [item[1], item[0], item[2], item[3], item[4], item[5], item[6]],
            }
          }),
          shading: 'lambert',
          label: {
            show: false
          },
          itemStyle: {
            color: '#0084ff',
            opacity: 0.8
          },
          emphasis: {
            label: {
              show: false
            },
            itemStyle: {
              color: '#0084ff'
            }
          }
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
.trigle {
  left: 644px;
  top: 2409px;
  width: 620px;
  height: 400px;
  .chartsdom {
    width: 100%;
    height: 100%;
  }

  .bar {
    width: 100%;
    height: 100%;
    position: absolute;
    &.bar-img {
      bottom: 0;
      background: url(../../assets/img/bk_circle.png) no-repeat center 97%;
      background-size: 100%;
      filter: hue-rotate(180deg);
    }
    &.bar-img1 {
      bottom: 30%;
      background: url(../../assets/img/bk_circle1.png) no-repeat center 97%;
      background-size: 75%;
      filter: hue-rotate(180deg);
    }
    &.bar-img2 {
      bottom: 60%;
      background: url(../../assets/img/bk_circle2.png) no-repeat center 97%;
      background-size: 50%;
      filter: hue-rotate(180deg);
    }
  }

 
}
</style>
