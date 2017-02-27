import { connect } from 'react-redux'
import { medidor_actions } from './../actions'
import Medidor from './../components/Medidor'

const mapStateToProps  = (state, ownProps) => ({
  medidor:state.medidor
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  increase: position => dispatch(medidor_actions.increase(position)),
  decrease: position => dispatch(medidor_actions.decrease(position)),
  selected: value => dispatch(medidor_actions.selected(value)),
})

export default connect(
 mapStateToProps, mapDispatchToProps
)(Medidor)
