import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from './homeActions'
import Home from './Home'

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(actions, dispatch)
)

const mapStateToProps = state => {
return {
  posts: state.home.posts
}}


export default connect(mapStateToProps, mapDispatchToProps)(Home)