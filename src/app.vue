<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="child-view" />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: "slider-left"
    };
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").filter(item => item).length;
      const fromDepth = from.path.split("/").filter(item => item).length;

      this.transitionName =
        toDepth < fromDepth ? "slider-right" : "slider-left";
    }
  }
};
</script>


<style lang="stylus" scoped>
#app
  .child-view
    fixed: top left right bottom
    transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1)
    overflow: auto

    &.slider
      &-left-enter, &-right-leave-active
        transform: translate(100%, 0)

      &-left-leave-active, &-right-enter
        transform: translate(-100%, 0)
</style>
