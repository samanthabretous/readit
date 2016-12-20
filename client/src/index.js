import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'

import posts from './posts/postsReducer'
import home from './homePage/homeReducer'

export const rootReducer = combineReducers({
  home,
  posts,
  form: formReducer 
});