import {combineReducers} from 'redux';

import posts from './posts/postsReducer'
import home from './homePage/homeReducer'

export const rootReducer = combineReducers({
  home,
  posts 
});