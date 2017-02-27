import React from 'react'
import Medidor from './Medidor'
import { medidor_actions } from './../actions'

export default React.createClass({
  componentWillMount(){
    this.props.dispatch(medidor_actions.request());
  },
  render(){
    return(
      <Medidor/>
    )
  }
});