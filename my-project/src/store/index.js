// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'
import habit from './modules/habit'
import plan from './modules/plan'
import task from './modules/task'


Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  mutations,
  state:{
    totalList:{}
  },
  getters:{},
  modules: {
    habit,
    plan,
    task
  }
})



