<template>
  <div :class="$style.hello">

    <h1>{{ msg }}</h1>
    <h2>thanks</h2>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" module>
  .hello{
    display: block;
  }

</style>
