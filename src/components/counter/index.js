import React from 'react'
import {IconButton} from 'react-toolbox/lib/button';
import Flexbox from 'flexbox-react'

export default React.createClass({
  render(){
    return(
      <Flexbox flex="1" flexDirection="column" alignItems="center">

        <Flexbox>
          <IconButton icon='add' accent onClick={this.props.increase}/>
        </Flexbox>
        <Flexbox>
          {this.props.value%10}
        </Flexbox>
        <Flexbox>
          <IconButton icon='remove' accent onClick={this.props.decrease}/>
        </Flexbox>

      </Flexbox>
    )
  }
})