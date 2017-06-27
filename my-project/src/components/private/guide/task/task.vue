<template>
    <div :class="$style.task">
        11111111111111111
      <todaylist></todaylist>
    </div>
</template>

<script>
  import todayList from  './todayList/todayList';

  export default {
    data() {
      return {}
    },
    created() {
      this.$http.get('static/json/data.json').then((response) => {
        console.log(response.body)
      })
    },
    components: {
      'todaylist': todayList
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" module>


</style>
