import {GET_ALL_POSTS} from './homeActions';
import {GET_ONE_POST} from '../post/postActions';
import {GET_ALL_CATEGORIES} from '../newPost/formActions';

const INITIAL_STATE = {
  posts: null,
  post: null, 
  categories: null,
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case GET_ALL_POSTS: 
    case GET_ONE_POST: 
    case GET_ALL_CATEGORIES: 
      let key = Object.keys(action)[1]
      return Object.assign({}, state, {[key]: action[key]})

    default: 
      return state
  }
}