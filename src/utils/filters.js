import dayjs from "dayjs";

export default {
  install(Vue) {
    Vue.filter("date", time => {
      const date = dayjs(time);

      return date.format("YY-MM-DD HH:mm:ss");
    });
  }
};
