<template>
  <div id="app">
    <div><button @click="toggleLogo">Toggle Logo</button></div>
    <img src="./assets/logo.png" v-if="showLogo">
    <h1>{{ msg }}</h1>
    <vfhHelloWorld></vfhHelloWorld>
    <div>
      <label>Name:</label>
      <input type="text" v-model="name"/>
      <button @click="submitName">Add</button>
    </div>
    <div>
      <ul>
        <li v-for="person in names" v-bind:key="person['.key']">
          <p>
            {{person.name}}
            <button @click="removeName(person['.key'])">Remove</button>
            <button @click="editName(person.name, person['.key'])">Edit</button>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import HelloWorld from "./HelloWorld.vue";
  import { db, moviesRef, charsRef, namesRef } from "./firebase";

  export default {
    name: "app",
    components: {
      vfhHelloWorld: HelloWorld
    },
    data() {
      return {
        msg: "Your Vue.js App",
        name: "",
        showLogo: true
      };
    },
    firebase: {
      names: namesRef
    },
    methods: {
      toggleLogo() {
        this.showLogo = !this.showLogo;
      },
      submitName() {
        namesRef.push({ name: this.name, edit: false });
        this.name = "";
      },
      removeName(key) {
        namesRef.child(key).remove();
      }
    }
  };
</script>

<style lang="scss">
li { text-align: left; padding: 1px; }
li button { float: right; margin-right: 5px; }
li p { width:30%; margin: 8px auto; }
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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

a {
  color: #42b983;
}
button {
  background-color: transparent;
  border: 2px solid #999;
  padding: 6px;
}
input {
  padding: 7px;
  border: 0.5px solid #999;
}
</style>
