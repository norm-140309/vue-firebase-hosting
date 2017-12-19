<template>
  <div id="app">
    <div><button @click="toggleLogo">Toggle Logo</button></div>
    <img src="./assets/logo.png" v-if="showLogo">
    <h1>{{ msg }}</h1>
    <vfhHelloWorld></vfhHelloWorld>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue';

export default {
  name: 'app',
  components: {
    vfhHelloWorld: HelloWorld
  },
  data () {
    return {
      msg: 'Your Vue.js App',
      showLogo: true
    }
  },
  methods: {
    toggleLogo() {
      this.showLogo = !this.showLogo;
    }
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1 {
    font-weight: normal;
    font-size: 48px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
