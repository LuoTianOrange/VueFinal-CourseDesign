<template>
  <div id="app">
    <MainHeader />
    <router-view />
    <MainFooter />
  </div>
</template>

<script>
import MainFooter from "./components/MainFooter.vue";
import MainHeader from "./components/MainHeader.vue";

export default {
  name: "App",
  components: {
    MainFooter,
    MainHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.body head {
  margin: 0;
  padding: 0;
}
</style>
