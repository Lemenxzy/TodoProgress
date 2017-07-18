<template>
<div :class="$style.todaylist"
     v-if="task"
     class="container">
  <div :class="$style.outer"
       v-for="item in task">
    <div :class="$style.title">
      <h5>{{item.title}}</h5>
    </div>
    <div :class="$style.lists">
      <transition-group tag="ul"
                        v-on:leave="leave"
                        v-bind:css="false">
        <li v-for="(listitem,index) in item.list"
            v-bind:key="'list-' + listitem.id"
            @click="deletList(item, index )" >

            <v-checkbox  v-model="listitem.finished"
                         :label="listitem.content"
                         hide-details>
            </v-checkbox>
        </li>
      </transition-group>
      <transition name="done"
                  :enter-class="$style.doneEn"
                  :enter-active-class="$style.doneActive"
                  :enter-to-class="$style.doneEnto">
        <div :class="$style.done" v-if="item.allDone">
          今天的{{item.title}}做完了！
        </div>
      </transition>

    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
    export default {
      data() {
        return {
          checked: true
        }
      },
      computed:{
        task: function () {
          return this.$store.state.totalList
        }
      },
      methods:{
        deletList:function(item,index){
          item.list.splice(index,1);
          console.log("this item is: ", item.list);
          if(item.list.length === 0){
              item.allDone = true;
          }
        },
        doneBeforeEnter: function(el,done){
          console.log(1111);
          Velocity(el, {
            translateX: '1200px',
            opacity: 0
          }, {
            delay: 500,
            complete: done })
        },
        doneEnter: function (el, done) {

        },

        leave: function (el, done) {
          Velocity(el, {
            translateX: '1200px',
            opacity: 0
          }, {
            delay: 500,
            complete: done })
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
  $height:300px;

  .todaylist{
    margin-top:60px;
    font-size:14px;
  }

  .outer {

    margin-bottom: 60px;

    .title {
      color: #00bfa5;
      border-bottom: 2px solid #00bfa5;
    }

    .lists {
      height: $height;
      overflow: hidden;
      li {
        margin: 10px 0;
        height: 30px;
      }

      .done {
        height:$height;
        line-height:$height;
        text-align:center;
      }
     }/*end lists*/

    .doneEn{
      opacity: 0
    }

    .doneActive{
      transition: opacity 1s ease 1s
    }
  }
</style>
