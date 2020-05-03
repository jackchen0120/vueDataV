<!--
 描述: 仪表盘
 作者: Jack Chen
 日期: 2020-05-03
-->

<template>
  <div class="wrap-container sn-container"> 
    <div class="sn-content"> 
      <div class="sn-title">仪表盘</div> 
      <div class="sn-body"> 
        <div class="wrap-container"> 
          <div class="chartsdom" id="chart_gauge"></div> 
        </div> 
      </div> 
    </div>   
  </div>
</template>

<script>
export default {
  name: "gauge",
  data() {
    return {
      
      
    }
  },
  mounted() {
    
  },
  methods: {
    
  },
  beforeDestroy() {
    
  }
};
</script>

<style lang="scss" scoped>
.sn-container {
  left: 512px;
  top: 2838px;
  width: 432px;
  height: 400px;
  .chartsdom {
    width: 100%;
    height: 100%;
  }
}
</style>
