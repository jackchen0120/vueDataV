/*
 * 描述: 注册全局消息提示框组件
 * 作者: Jack Chen
 * 日期: 2020-04-18
 */

import Vue from 'vue'
import Toast from './index.vue'
  
const ToastMsg = Vue.extend(Toast)
  
Toast.install = (options, type) => {
	if (options === undefined || options === null) {
		options = {
		  content: ''
		}
	} else if (typeof options === 'string' || typeof options === 'number') {
		options = {
			content: options
		}
		if (type !== undefined && options !== null) {
			options.type = type
		}
	}
	  
	let instance = new ToastMsg({
		data: options
	}).$mount()
	  
	document.body.appendChild(instance.$el)
	  
	Vue.nextTick(() => {
		instance.visible = true
	})
}
  
export default Toast.install