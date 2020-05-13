<!--
 描述: 自定义全局模态框
 作者: Jack Chen
 日期: 2020-04-18
-->

<template>
  <transition name="fade">
    <div class="modal-backdrop" v-if="visible">
      <div class="modal">
        <div class="modal-header">
          {{ title }}
          <i class="iconfont icon-close close" @click="close"></i>
        </div>
        <div class="modal-body">
            {{ content }}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn-close" @click="close" v-if="showCancle">
            {{cancleText ? cancleText : '取消'}}
          </button>
          <button type="button" class="btn-confirm" @click="confirm">
            {{confirmText ? confirmText : '确定'}}
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>
 
<script>

export default {
  name: 'Modal',
  props: {
    // modal标题
    title: {
      type: String,
      default: '提示'
    },
    // modal内容
    content: {
      type: String,
      default: ''
    },
    // 是否显示
    visible: {
      type: Boolean,
      default: false
    },
    // 是否显示取消按钮
    showCancle: {
      type: Boolean,
      default: true
    },
    // 确认按钮文字
    confirmText: {
      type: String,
      default: '确认'
    },
    // 取消按钮文字
    cancleText: {
      type: String,
      default: '取消'
    }
  },
  watch: {
    visible (curVal) {
      // 监听visible值的变化
      console.log(curVal)
    }
  },
  methods: { 
    // 关闭按钮事件
    close() {
      this.$emit('update:visible', false);
    },
    // 确定按钮事件
    confirm() {
      this.close();
      this.$emit('confirm');
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

.modal-backdrop { 
  position: fixed; 
  top: 0; 
  right: 0; 
  bottom: 0; 
  left: 0; 
  background-color: rgba(0,0,0,.5); 
  width: 100%;
  height: 100%;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  z-index: 99999;
  .modal {
    position: relative; 
    background-color: #fff; 
    box-shadow: 2px 2px 20px 1px; 
    overflow-x: auto;
    border-radius: 16px;
    width: 400px;
  } 
  .modal-header { 
    position: relative;
    border-bottom: 1px solid #eee; 
    color: #313131; 
    padding: 20px; 
    font-size: 20px;
    text-align: center;
    .close {
      position: absolute;
      right: 20px;
      cursor: pointer;
      color: #909399;
      font-size: 18px;
    } 
  } 
  .modal-footer {
    padding: 10px 20px 20px;
    text-align: right;
    .btn-close, .btn-confirm {    
        border-radius: 8px;
        cursor: pointer;
        border: none;
        font-size: 16px;
        padding: 12px 20px;
        outline: none;
    }
    .btn-close {
        color: #606266;
        background-color: #fff;
        border: 1px solid #dcdfe6;
        margin-right: 20px;
        &:hover {
          color: #409eff; 
          background-color: #ecf5ff;
        }
    }
    .btn-confirm {
        color: #fff; 
        background-color: #409eff;
        border-color: #409eff;
        &:hover {
          background-color: #66b1ff;
        }
    }
  } 
  .modal-body { 
    position: relative; 
    padding: 30px 20px; 
    font-size: 16px;
    line-height: 22px;
  }
}
</style>
