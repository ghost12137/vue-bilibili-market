<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <main-tab-bar v-if="this.$route.meta.showTab"/>
  </div>
</template>

<script>
import MainTabBar from './components/content/mainTabBar/MainTabBar.vue'
export default {
  name: 'App',
  components: {MainTabBar},
}
</script>

<style>
  @import 'assets/css/base.css';
</style>
