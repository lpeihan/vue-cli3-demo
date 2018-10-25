import { cssSupport, throttle } from "./index";

const handleScroll = throttle(function(el, params) {
  const top = el.getBoundingClientRect().y;
  const child = el.firstElementChild;

  if (top <= params.top) {
    child.style["position"] = "fixed";
    child.style["top"] = params.top + "px";
    child.style["z-index"] = 1;
  } else {
    child.style["position"] = "static";
  }
}, 100);

export default {
  install(Vue) {
    /**
     * 示例: <div v-sticky="{ top: 0 }"><div>hello world</div>></div>
     */
    Vue.directive("sticky", {
      inserted(el, binding) {
        const params = binding.value;

        if (cssSupport("position", "sticky")) {
          el.style["position"] = "sticky";
          el.style["top"] = params.top + "px";
        } else {
          el.parentNode.addEventListener(
            "scroll",
            handleScroll.bind(null, el, params)
          );
        }
      }
    });
  }
};
