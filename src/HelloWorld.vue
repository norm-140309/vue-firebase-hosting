<template>
  <div class="vfhHelloWorld">
    <h1>Hello {{target}}</h1>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        target: "World"
      }
    }
  }
</script>

<style lang="scss">
  .vfhHelloWorld {
    h1 {
      font-size: 36px;
    }
  }
</style>
