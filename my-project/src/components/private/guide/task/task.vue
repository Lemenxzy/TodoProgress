<template>
    <div :class="$style.task">
      <todaylist :task="task"></todaylist>
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
      this.$http.get('static/json/data.json').then((response) => {
        let res = response.body
        console.log("this res is: ", res)
        if(res.status === ERR_OK) {
            this.task = res.task
            console.log("this.task is: ", this.task)

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
