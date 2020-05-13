<!--
 描述: 发展历程
 作者: Jack Chen
 日期: 2020-05-09
-->

<template>
  <div class="history-container">
    <div class="tabs"> 
      <ul class="tab-tilte">
        <li v-for="(itemTit, index) in tabTitle" @mouseover="handleMouseOver(index)" @mouseout="handleMouseOut(index)" :class="{active: cur == index}">
          {{ itemTit }}
        </li>
      </ul>
      <div class="indicatorDots">
        <span :class="{active: cur == i}" v-for="(v, i) in tabTitle" :key="i"></span>
      </div>
      <div class="tab-content">
        <div v-for="(itemCon, index) in tabCon" v-show="cur == index">
          <div v-for="(v, i) in itemCon" :key="i" class="content">
            {{ v }}
          </div>
        </div>
      </div>
    </div>   
  </div>
</template>

<script>
export default {
  name: "history",
  data() {
    return {
      timer: null,
      tabTitle: ['2015', '2016', '2017', '2018', '2019', '2020'],
      tabCon: [
        [
          '2015.10，公司成立，正式布局区块链、大数据方向',
          '2015.11，与国家超算吕梁云计算中心签订战略合作协议',
          '2015.12，建设高性能计算服务平台，基于区块链技术打造文创基础云平台'
        ],
        [
          '2016.03，公司提供的高性能计算服务得到中科院认可，就此达成合作',
          '2016.07，与国家超算广州中心签订战略合作协议，启动区块链底层公链开发技术论证',
          '2016.10，启动区块链底层公链开发，开拓数字资产管理业务',
          '2016.11，与国家超级计算长沙中心签订战略合作协议'
        ],
        [
          '2017.03，与国家级长沙经开区共建博士创新创业园',
          '2017.07，开发GBI区块链资讯信息平台',
          '2017.09，打造区块链信息服务平台，开拓区块链安全业务',
          '2017.12，区块链底层公链测试链上线运行，启动链上DAPP开发'
        ],
        [
          '2018.05，与长沙经开区共建区块链产业园，区块链底层公链上线运行',
          '2018.08，公链分布式存储网络正式运行',
          '2018.10，区块链安全技术检测中心正式运行，公链多侧链技术落地，链上应用上线',
          '2018.12，被评为中国区块链百强企业'
        ],
        [
          '2019.03，上线分布式存储系统UDFS，更新优壹号V2.0.0版，完成Ulord V2.0版白皮书全部规划',
          '2019.07，文创版权公共服务平台优版权正式上线',
          '2019.08，承担国家网信办区块链相关课题研究',
        ],
        [
          '2020.03，完成分布式计算框架和贡献证明算法的设计和开发',
          '2020.05，完成分布式计算资源动态调度和管理开发',
          '2020.10，推出链云计算生态，完成计算平台和API接口开发，完成优壹号对计算Dapp支持'
        ]
      ],
      cur: 0, //默认选中第一个tab
    }
  },
  mounted() {
    this.getTimer();
  },
  methods: {
    getTimer() {
      this.timer = setInterval(() => {
        this.cur++;
        if (this.cur == this.tabTitle.length) {
          this.cur = 0;
        }
      }, 2000)
    },
    handleMouseOver(index) {
      this.cur = index;
      clearInterval(this.timer);
    },
    handleMouseOut(index) {
      this.getTimer();
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style lang="scss" scoped>
.history-container {
  margin: 0 0.125rem;
  .tabs {
    display: flex;
    .tab-tilte {
      li {
        color: #fff;
        background-color: rgba(36, 196, 255, 0.5);
        text-align: center;
        cursor: pointer;
        width: 1.0rem;
        height: 0.35rem;
        line-height: 0.35rem;
        margin-bottom: 0.175rem;
        -webkit-border-radius: 5px;
        -ms-border-radius: 5px;
        -o-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        &.active{
          background: linear-gradient(to right, #1b81bc, 20%, #24c4ff);
          color: #fff;
        }
      }
    }
    .indicatorDots {
      background-color: rgba(36, 196, 255, 0.5);
      width: 1px;
      height: 2.8rem;
      margin: 0.0625rem 0 0 0.375rem;
      span {
        display: block;
        height: 0.525rem;
        margin-left: -0.0875rem;
        &:after {
          content: '';
          display: block;
          width: 0.125rem;
          height: 0.125rem;
          background: #ddd;
          -webkit-border-radius: 50%;
          -ms-border-radius: 50%;
          -o-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          border: 2px solid #1b81bc;
        }
        &.active {
          &:after {
            background: #24c4ff;
            -webkit-box-shadow: 0 0 0.125rem #1b81bc;
            box-shadow: 0 0 0.125rem #1b81bc;
          }
        }
      }
    }
    .tab-content {
      display: flex;
      align-items: center;
      div {
        margin-left: 0.1875rem;
        color: #fff;
        .content {
          line-height: 0.275rem;
          padding: 0.125rem 0;
        }
      }
    }
  }
}
</style>
