/**
 * Created by 小黑 on 2017/7/17.
 */
import Vue from 'vue'

import * as types from './mutation_types'


export default{

  getData ({ commit }) {
    const ERR_OK = 0;
    Vue.http.get('../static/json/data.json').then((response) => {
      let res = response.body
      console.log("this res is: ", res)
      if(res.status === ERR_OK) {
        commit( types.INIT_DATA, res.task.currentTask )
      }
    })
  },
  postData ({ commit }) {
    console.log('postData sucessed');
  }
}





