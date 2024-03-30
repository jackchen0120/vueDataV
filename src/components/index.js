/*
 * 描述: 封装组件库
 * 作者: Jack Chen
 * 日期: 2020-04-18
 */

import bgAnimation from './bgAnimation' // 登录界面背景图动画
import modal from './modal' // 自定义全局模态框
import sinan from './sinan' // 司南排名图
import seamless from './seamless' // 新闻无缝滚动
import pyramid from './pyramid' // 金字塔动画
import scrollArc from './scrollArc' // 滚动弧形线
import szBar from './szBar' // 双轴柱状图
import ringPin from './ringPin' // 环形气泡图
import rotateColorful from './rotateColorful' // 旋转多彩图
import circleRunway from './circleRunway' // 环形跑道图
import scanRadius from './scanRadius' // 扫描半径图
import cakeLinkage from './cakeLinkage' // 柱饼组合联动
import dynamicLine from './dynamicLine' // 动态轮播折线图
import pyramidTrend from './pyramidTrend' // 金字塔趋势
import staffMix from './staffMix' // 人员占比
import flashCloud from './flashCloud' // 闪动云
import ringPie from './ringPie' // 环形饼图
import colorfulRadar from './colorfulRadar' // 多彩雷达
import dynamicList from './dynamicList' // 动态列表动画
import bar3d from './bar3d' // 3D立体柱状图
import colorfulArea from './colorfulArea' // 多彩轮播面积
import rainbow from './rainbow' // 彩虹轨道图
import gauge from './gauge' // 仪表盘
import waterPolo from './waterPolo' // 水球图
import circleNesting from './circleNesting' // 圆环套圆环

import business from './companySummary/business' // 业务范围
import talent from './companySummary/talent' // 人才队伍
import income from './companySummary/income' // 营业收入
import wordCloud from './companySummary/wordCloud' // 产品热词
import distribution from './companySummary/distribution' // 客户分布
import history from './companySummary/history' // 发展历程

const components = {
  bgAnimation,
  modal,
  sinan,
  seamless,
  pyramid,
  scrollArc,
  szBar,
  ringPin,
  rotateColorful,
  circleRunway,
  scanRadius,
  cakeLinkage,
  dynamicLine,
  pyramidTrend,
  staffMix,
  flashCloud,
  ringPie,
  colorfulRadar,
  dynamicList,
  bar3d,
  colorfulArea,
  rainbow,
  gauge,
  waterPolo,
  circleNesting,

  business,
  talent,
  income,
  wordCloud,
  distribution,
  history,
  
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
