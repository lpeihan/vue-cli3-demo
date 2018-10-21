import Vue from "vue";
import App from "./app";
import router from "./router";
import store from "./store";
import "./service-worker";
import "./utils/vconsole";
import "./assets/styles/index.styl";
import icon from "./components/icon";
import filters from "./utils/filters";
import fastclick from "fastclick";

Vue.use(filters);
Vue.use(icon);

fastclick.attach(document.body);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
