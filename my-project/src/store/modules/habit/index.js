/**
 * Created by 小黑 on 2017/7/17.
 */

//habit-list

export default {
  //initial state
  namespaced: true,
  state:{
    habitList:[]
  },

  //set computed attr
  getters:{
    doneTodos: state => {
      return state.habitList.filter(listitem => listitem.finished)
    },
    undoTodos: state => {
      return state.habitList.filter(listitem => !listitem.finished)
    }
  },

  mutations: {},
  actions: {}
}


