import Vue from "vue";
import App from "./app";
import router from "./router";
import store from "./store";
import "./register-service-worker";
import Icon from "@/components/icon";

Vue.component("icon", Icon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
