<template>
  <div :class="$style.app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  created(){
    this.$store.dispatch('getData')
    this.$store.dispatch('postData')
  }
}
</script>

<style lang="sass" module>


</style>
