/**
 * Created by 小黑 on 2017/7/17.
 */
export default {
  //initial state
  namespaced: true,
  state:{
    planList:[]
  },

  //set computed attr
  getters:{
    doneTodos: state => {
      return state.planList.filter(listitem => listitem.finished)
    },
    undoTodos: state => {
      return state.planList.filter(listitem => !listitem.finished)
    }
  },

  mutations: {},
  actions: {}
}
