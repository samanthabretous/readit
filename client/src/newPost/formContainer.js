import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import FormPage from './FormPage'

// const mapDispatchToProps = (dispatch) => (
//   bindActionCreators(actions, dispatch)
// )

const mapStateToProps = state => {
  console.log(state)
return {
  categories: state.home.categories,
  form: state.form.simple
}}


export default connect(mapStateToProps)(FormPage)