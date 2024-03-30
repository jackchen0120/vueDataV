<!--
 描述: 消息提示框模板
 作者: Jack Chen
 日期: 2020-04-18
-->

<template>
  <transition name="fade">
    <div class="toast-container" v-if="visible">  
      <div class="toast" :class="type">
        <div class="content">
          <i class="iconfont" :class="'icon-' + type"></i>
          <span>{{ content }}</span>
        </div>
        <i v-if="hasClose" class="iconfont icon-close close" @click="visible = false"></i>
      </div>
    </div>
  </transition>
</template>
 
<script>

export default {
  name: 'Toast',
  data() {
    return {  
      content: '',
      time: 3000,
      visible: false,
      type: 'error',  //四种类型：info, success, warning, error
      hasClose: false,     
    }
  },
  mounted() {
    this.close();
  },
  methods: {    
    close () {
      setTimeout(() =>{
        this.visible = false;
      }, this.time);
    }
  }
}
</script>

<style lang="scss" scoped>
/* 动画效果 淡入淡出 */
.fade-enter-active, .fade-leave-active{
   transition: all 0.5s ease;
 }
 .fade-enter, .fade-leave-active{
   opacity: 0;
 }

.toast-container {
  position: fixed; 
  top: 0; 
  right: 0; 
  bottom: 0; 
  left: 0;  
  display: flex; 
  justify-content: center; 
  align-items: center;
  z-index: 99999;
  .toast {
    width: 340px;
    padding: 20px;
    border-radius: 6px;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    .content {
      span {
        padding-left: 10px;
      }
    }
    &.info {
      background: #edf2fc;
      border: 1px solid #e0eafc;
      color: #909399;
    }
    &.success {
      background: #f0f9eb;
      border: 1px solid #e7f9de;
      color: #67c23a;
    }
    &.warning {
      background: #fdf6ec;
      border: 1px solid #f9ecda;
      color: #e6a23c;
    }
    &.error {
      background: #fef0f0;
      border: 1px solid #fbdfdf;
      color: #f56c6c;
    }
    .close {
      cursor: pointer;
      color: #909399
    }
  }
}
</style>
