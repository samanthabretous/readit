import {GET_ALL_POSTS} from './homeActions';

const INITIAL_STATE = {
  posts: null
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case GET_ALL_POSTS: 
      let key = Object.keys(action)[1]
      return Object.assign({}, state, {[key]: action[key]})
    default: 
      return state
  }
}