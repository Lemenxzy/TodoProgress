<template>
<div :class="$style.todaylist" v-if="taskdata.currentTask" class="container">
  <div :class="$style.outer" v-for="item in taskdata.currentTask">
    <div :class="$style.title"><h5>{{item.title}}</h5></div>
    <div :class="$style.lists">
      <ul>
        <li v-for="listitem in item.list">
          <div class="input-field">
            <v-checkbox v-model="listitem.finished" :label="listitem.content" hide-details></v-checkbox>
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
          checked:true
        }
      },
      props: {
        task: {
          type: Object
        }
      },
      computed:{
        taskdata: function () {
          return this.$store.state.totalList
        }
      },
      beforeCreate() {
        console.log("beforeCreate: this.taskdata is: ", this.taskdata);
      },

      created() {
        console.log("created: this.taskdata is: ", this.taskdata);
      },

      beforMount() {
        console.log("beforeMount: this.taskdata is: ", this.taskdata);
      },

      mounted() {
        console.log("mounted: this.taskdata is: ", this.taskdata);
      },

      beforeUpdate() {
        console.log("beforeUpdate: this.taskdata is: ", this.taskdata);
      },

      updated(){
        console.log("updated: this.taskdata is: ", this.taskdata);
      },

      beforeDestroy() {
        console.log("beforeDestroy: this.taskdata is: ", this.taskdata);
      },

      destroyed() {
        console.log("destroyed: this.taskdata is: ", this.taskdata);
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
