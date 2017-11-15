import * as types from './mutation_type'
export default{
  [types.NEWSHOW](state,bData){
    state.show=bData;
  },
  [types.NEWNUM](state,data){
    state.num=data;
  }
}
