import bgAnimation from './bgAnimation'

const components = {
  bgAnimation,
  // particles
};

const install = (Vue = {}) => {
  if (install.installed) return;
  Object.keys(components).forEach(component => {
    Vue.component(components[component].name, components[component]);
  });

  Vue.prototype.$notice = Notification;
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
