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
import mintUi from "./mint-ui";
import "mint-ui/lib/style.css";

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
