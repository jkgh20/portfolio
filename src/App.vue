<template>
  <div id="app">
    <router-view></router-view>

<!--
    <div>
      <router-link to="/home">home</router-link>
    </div>
    <div>
      <router-link to="/about">about</router-link>
    </div>
    <div>
      <router-link to="/projects">projects</router-link>
    </div>
    <div>
      <router-link to="/contact">contact</router-link>
    </div>
-->

  </div>
</template>

<script>


export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 24px;
  height: 200vh;
}
</style>
