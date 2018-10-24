import "mint-ui/lib/button/style.css";

import { Button } from "mint-ui";

export default {
  install(Vue) {
    Vue.component(Button.name, Button);
  }
};
