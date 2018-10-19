import Vue from "vue";
import Vuex from "vuex";

import createLogger from "vuex/dist/logger";

import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

import about from "./modules/about";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    about
  },

  plugins: process.env.NODE_ENV === "development" ? [createLogger()] : []
});
