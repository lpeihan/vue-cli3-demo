/**
 * debounce 防抖
 * @param {function} fn
 * @param {number} delay 毫秒
 */
export function debounce(fn, delay) {
  let timer;
  let ctx;
  let args;

  const execute = function() {
    fn.apply(ctx, args);
  };

  return function() {
    ctx = this;
    args = arguments;

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(execute, delay);
  };
}

/**
 * throttle 节流
 * @param {function} fn
 * @param {number} delay 毫秒
 */
export function throttle(fn, delay) {
  let ctx;
  let args;
  let timer;
  let now;
  let previous;

  const execute = function() {
    fn.apply(ctx, args);
    previous = now;
  };

  return function() {
    ctx = this;
    args = arguments;
    now = Date.now();

    if (timer) {
      clearTimeout(timer);
    }

    const diff = now - (previous + delay);

    if (previous) {
      if (diff >= 0) {
        execute();
      } else {
        timer = setTimeout(execute, -diff);
      }
    } else {
      execute();
    }
  };
}

/**
 * cssSupport 是否支持某 css 属性
 * @param {string} attr
 * @param {string} val
 */
export function cssSupport(attr, val) {
  const el = document.createElement("div");

  if (attr in el.style) {
    el.style[attr] = val;

    return el.style[attr] === val;
  }

  return false;
}
