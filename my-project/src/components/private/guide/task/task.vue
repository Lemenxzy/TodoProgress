<template>
    <div :class="$style.task">
        11111111111111111
      <todaylist :task="task"></todaylist>
    </div>
</template>

<script>
  import todayList from  './todayList/todayList';

  const ERR_OK = 0;
  export default {
    data() {
      return {
        task: {}
      }
    },
    created() {
      this.$http.get('static/json/data.json').then((response) => {
        let res = response.body;
        if(res.status === ERR_OK) {
            this.task = res.data;
        }
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
