import bgAnimation from './bgAnimation' // 登录界面背景图动画
import modal from './modal' // 自定义全局模态框
import sinan from './sinan' // 司南排名图
import rimian from './rimian' // 日冕排名图
import pyramid from './pyramid' // 金字塔数据图

const components = {
  bgAnimation,
  modal,
  sinan,
  rimian,
  pyramid
  
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
