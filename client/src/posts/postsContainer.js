import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from './postsActions'
import Posts from './Posts'

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(actions, dispatch)
)

const mapStateToProps = state => {
return {
  posts: state.home.posts
}}


export default connect(mapStateToProps, mapDispatchToProps)(Posts)