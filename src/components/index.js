/*
 * 描述: 封装组件库
 * 作者: Jack Chen
 * 日期: 2020-04-18
 */

import bgAnimation from './bgAnimation' // 登录界面背景图动画
import modal from './modal' // 自定义全局模态框
import sinan from './sinan' // 司南排名图
import rimian from './rimian' // 日冕排名图
import pyramid from './pyramid' // 金字塔数据图
import scrollArc from './scrollArc' // 滚动弧形线
import szBar from './szBar' // 双轴柱状图
import ringPin from './ringPin' // 环形气泡图
import rotateColorful from './rotateColorful' // 旋转多彩图
import circleRunway from './circleRunway' // 环形跑道图
import scanRadius from './scanRadius' // 扫描半径图

const components = {
  bgAnimation,
  modal,
  sinan,
  rimian,
  pyramid,
  scrollArc,
  szBar,
  ringPin,
  rotateColorful,
  circleRunway,
  scanRadius
  
};

const install = (Vue = {}) => {
  if (install.installed) return;
  Object.keys(components).forEach(component => {
    Vue.component(components[component].name, components[component]);
  });

  install.installed = true;
};

install.installed = false;

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
  install.installed = true;
}

const Vcomp = {
  ...components,
  install
};


export default Vcomp
