/**
 * Created by 小黑 on 2017/7/17.
 */
import * as types from './mutation_types'

export default {
  [types.INIT_DATA]( state, data ){
    state.totalList = data;
    console.log("this state.totalList is: ", state.totalList);
  }
}

