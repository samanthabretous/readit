import $ from 'jquery'
import {GET_ALL_POSTS, sortPost, getAllPosts} from '../homePage/homeActions'


export const getCategoryAysnc = (id) => (dispatch) =>{
  console.log('/api/category/' + id)
  $.ajax({
    url: '/api/category/' + id,
    dataType: 'json',
    type: 'get'
  })
  .done(posts => {
    console.log(posts.Posts)
    dispatch(getAllPosts(sortPost(posts.Posts)));
  })
}