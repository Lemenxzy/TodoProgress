<template>
<div :class="$style.todaylist" v-if="task.currentTask" class="container">
  <div :class="$style.outer" v-for="item in task.currentTask">
    <div :class="$style.title"><h5>{{item.title}}</h5></div>
    <div :class="$style.lists">
      <transition-group name="list" tag="ul">
        <li v-for="(listitem,index) in item.list" v-bind:key="'list-' + listitem.id" v-if="!listitem.finished">
            <v-checkbox   v-model="listitem.finished" :label="listitem.content" hide-details></v-checkbox>
        </li>
      </transition-group>
    </div>
  </div>
  <div id="demo">
    <button v-on:click="change">
      Toggle
    </button>
    <transition>
      <p v-if="show">test</p>
    </transition>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
    export default {
      data() {
        return {
          show: true,
          checked: true
        }
      },
      computed:{
        task: function () {
          return this.$store.state.totalList
        }
      },
      methods:{
        change: function(e){
          this.show = !this.show;
        }
      },
      beforeCreate() {
        console.log("beforeCreate: this.task is: ", this.task);
      },

      created() {
        console.log("created: this.task is: ", this.task);
      },

      beforMount() {
        console.log("beforeMount: this.task is: ", this.task);
      },

      mounted() {
        console.log("mounted: this.task is: ", this.task);
      },

      beforeUpdate() {
        console.log("beforeUpdate: this.task is: ", this.task);
      },

      updated(){
        console.log("updated: this.task is: ", this.task);
      },

      beforeDestroy() {
        console.log("beforeDestroy: this.task is: ", this.task);
      },

      destroyed() {
        console.log("destroyed: this.task is: ", this.task);
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
      height:300px;
      li{
        margin:10px 0;
        height:30px;
      }
    }
  }

 /*p{*/
      /*height:200px;*/
      /*width:200px;*/
      /*opacity: 1;*/
  /*}*/


  .v-enter-active, .v-leave-active {
    transition: opacity 1s
  }
  .v-enter, .v-leave-to{
    opacity: 0
  }

</style>
