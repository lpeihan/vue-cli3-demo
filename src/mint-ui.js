import "mint-ui/lib/style.css";
import { Button } from "mint-ui";

export default {
  install(Vue) {
    Vue.component(Button.name, Button);
  }
};
