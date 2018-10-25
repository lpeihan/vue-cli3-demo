<template>
  <div class="home">
    <mt-button @click="go">
      <icon name="logout" />about
    </mt-button>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    go() {
      this.$router.push({
        path: "/about"
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.home
  .icon-logout
    size: 24px

  .navbar
    height: 50px
    line-height: 50px
    background: gray
</style>
