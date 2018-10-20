import dayjs from "dayjs";

export default {
  install(Vue) {
    Vue.filter("date", time => {
      return dayjs(time).format("YY-MM-DD HH:mm:ss");
    });
  }
};
