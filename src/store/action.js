import * as types from './mutation_type'
export default{
  newShow({commit},bData){
    commit(types.NEWSHOW,bData);
  }
}
