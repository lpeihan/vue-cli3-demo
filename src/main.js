import Vue from "vue";
import App from "./app";
import router from "./router";
import store from "./store";
import "./service-worker";
import "./utils/vconsole"; // 在href加上 ?console 就能打开移动端调试
import "./assets/styles/index.styl"; // 引入全局 styles
import fastclick from "fastclick"; // 解决移动端 300ms 延迟

import filters from "./utils/filters";
import directives from "./utils/directives";
import mintUi from "./mint-ui";
import icon from "./components/icon";

Vue.use(filters);
Vue.use(directives);
Vue.use(mintUi);
Vue.use(icon);

fastclick.attach(document.body);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
