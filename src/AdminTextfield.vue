<template>
  <div class="bbAdminTextfield">
    <label>{{props.val}}</label>
  </div>
</template>

<script>
  export default {
    props: [
      "val"
    ],
    data () {
      return {
        title: "Admin Textfield Component"
      }
    }
  }
</script>

<style lang="scss">
  .bbAdminTextfield {
    label {
      font-weight: bold;
    }
  }
</style>
