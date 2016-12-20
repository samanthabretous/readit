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
    console.log([upCount, post])
    post.upCount = upCount
    post.downCount = downCount

    mostVotes.push([upCount, post])
  })

  let sortVotes = mostVotes.sort((a,b)=> a[0] < b[0])

  let sortedPost = sortVotes.map(element =>{
    return element[1]
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