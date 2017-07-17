<template>
    <div :class="$style.task">
      <todaylist></todaylist>
    </div>
</template>

<script>
  import todayList from  './todayList/todayList'

  const ERR_OK = 0;
  export default {
    data() {
      return {
        task: {}
      }
    },
    created() {
    },
    components: {
      'todaylist': todayList
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" module>


</style>
