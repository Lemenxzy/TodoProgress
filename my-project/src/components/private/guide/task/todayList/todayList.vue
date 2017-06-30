<template>
<div class="todaylist" v-if="taskData.currentTask" >
  <div v-for="item in taskData.currentTask">
    <div class="title">{{item.title}}</div>
    <div class="lists">
      <ul>
        <li v-for="listitem in item.list">{{listitem.content}}
          <div class="input-field">
          <!--<v-checkbox name="checkbox1" id="checkbox1" filled-in checked>Filled In</v-checkbox>-->
          </div>
        </li>

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
//        console.log(this.taskData)
      },
      mounted() {
//        console.log(this.taskData)
      }
    };
</script>

<style lang="sass" module>


</style>
