import dayjs from "dayjs";

export default {
  install(Vue) {
    /**
     * @param {number} time 时间戳
     * @return {string} 2018-10-10 10:10:08
     */
    Vue.filter("date", time => {
      return dayjs(time).format("YY-MM-DD HH:mm:ss");
    });
  }
};
