<template>
    <div :class="$style.task">
      <todaylist :taskData="task"></todaylist>
      <v-btn-link class="waves-effect waves-light btn">Toast!</v-btn-link>
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
        let res = response.body
        console.log(res)
        if(res.status === ERR_OK) {
            this.task = res.task
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
