import $ from 'jquery'
import _ from 'lodash'

export const GET_ALL_POSTS ='get_all_posts'

export const sortPost = (posts) => {
  let mostVotes = []

  posts.map(post => {
    
    //count all up votes per post
    let upCount = 0;
    let downCount = 0;
    post.Votes.map(vote => {
      vote.vote ? upCount++ : downCount++
    })
    post.upCount = upCount
    post.downCount = downCount

    mostVotes.push({count: upCount, post: post})
  })
  let sortVotes = _.sortBy(mostVotes, (o)=>{
    return o.count
  }).reverse()

  let sortedPost = sortVotes.map(element =>{
    return element.post
  })
  return sortedPost
}

export const getAllPosts = (posts) => (
  {
    type: GET_ALL_POSTS,
    posts
  }
)

export const getPostsAysnc = () => (dispatch) =>{
  return $.ajax({
    url: '/api/post',
    dataType: 'json',
    type: 'get'
  })
  .done(posts => {
    dispatch(getAllPosts(sortPost(posts)));
  })
}
