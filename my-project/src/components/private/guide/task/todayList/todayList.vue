<template>
<div :class="$style.todaylist"  v-if="taskData.currentTask" class="container">
  <div :class="$style.outer" v-for="item in taskData.currentTask">
    <div :class="$style.title"><h5>{{item.title}}</h5></div>
    <div :class="$style.lists">
      <ul>
        <li v-for="listitem in item.list">
          <div class="input-field">
          <v-checkbox v-bind:name="'list' + listitem.id" v-bind:id="'list' + listitem.id"  checked>{{listitem.content}}</v-checkbox>
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

      },
      mounted() {
//        console.log(this.taskData)
      }
    };
</script>

<style lang="sass" module>
  .todaylist{
    margin-top:60px;


    font-size:14px;
  }

  .outer{
    margin-bottom:60px;
    .title{
      color: #00bfa5;
      border-bottom:2px solid #00bfa5;
    }

    .lists{


      li{
        margin:10px 0;
      }
    }
  }

</style>
