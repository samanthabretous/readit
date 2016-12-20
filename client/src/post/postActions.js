import $ from 'jquery';

export const GET_ONE_POST = 'get_one_post';

export const getOnePost = (post) => (
  {
    type: GET_ONE_POST,
    post
  }
)

export const getPostAysnc = (id) => (dispatch) =>{
  return $.ajax({
    url: '/api/post/' + id,
    dataType: 'json',
    type: 'get'
  })
  .done(post => {
    console.log(post)
    dispatch(getOnePost(post));
  })
}