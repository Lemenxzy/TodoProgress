<template>
<div class="todaylist">
  <div v-if="taskData.task.currentTask" v-for="item in taskData.task.currentTask">
    <div class="title">{{item.title}}</div>
    <div class="lists">
      <ul>
        <li v-for="listitem in item.list">{{listitem.content}}</li>
      </ul>
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
    export default {
      data() {
        return {

        }
      },
      props: {
        taskData: {
          type: Object
        }
      },
      created() {

      }
    };
</script>

<style lang="sass" module>


</style>
