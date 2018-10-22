<template>
  <div class="home">
    <router-link to="/about">about</router-link>
    <icon name="logout" />
    {{Date.now() | date}}
    <mt-button>mint-button</mt-button>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style lang="stylus" scoped>
.home
  .icon-logout
    size: 28px
    color: red
</style>
