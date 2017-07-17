/**
 * Created by 小黑 on 2017/7/17.
 */
export default {
  //initial state
  namespaced: true,
  state:{
    taskList:[]
  },

  //set computed attr
  getters:{
    doneTodos: state => {
      return state.taskList.filter(listitem => listitem.finished)
    },
    undoTodos: state => {
      return state.taskList.filter(listitem => !listitem.finished)
    }
  },

  mutations: {},
  actions: {}
}
