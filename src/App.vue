<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view/>
  </div>
</template>

<script>
  //import HelloWorld from './components/HelloWorld.vue'
  import NavBar from './components/NavBar.vue'
  import Home from './pages/Home'

  export default {
    name: 'app',
    components: {
      Home,
      NavBar
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("../public/anise-aroma-art-277253.jpg");
  background-size: 100%;
  height: 100vh;
  box-sizing: border-box;
}
</style>
