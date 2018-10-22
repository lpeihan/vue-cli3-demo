import Vue from "vue";
import App from "./app";
import router from "./router";
import store from "./store";
import "./service-worker";
import "./utils/vconsole";
// 引入全局 styles
import "./assets/styles/index.styl";
import fastclick from "fastclick";

import filters from "./utils/filters";
import mintUi from "./mint-ui";
import icon from "./components/icon";

Vue.use(filters);
Vue.use(mintUi);
Vue.use(icon);

fastclick.attach(document.body);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
