import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from './postActions'
import Post from './Post'

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(actions, dispatch)
)

const mapStateToProps = state => {
  console.log(state.home)
return {
  post: state.home.post
}}


export default connect(mapStateToProps, mapDispatchToProps)(Post)