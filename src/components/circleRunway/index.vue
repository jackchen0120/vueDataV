<template>
  <!-- 环形跑道图 -->
  <div class="wrap-container sn-container"> 
    <div class="sn-content"> 
      <div class="sn-title">环形跑道图</div> 
      <div class="sn-body"> 
        <div class="wrap-container" style="height: 90%"> 
          <canvas width="496" height="455" style="width: 496px; height: 455px;"></canvas> 
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
  left: 1370px;
  top: 110px;
}
</style>
