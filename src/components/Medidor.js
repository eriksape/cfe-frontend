import React, { Component } from 'react';
import Counter from './counter'
import Flexbox from 'flexbox-react'
import Dropdown from 'react-toolbox/lib/dropdown';
import { Button } from 'react-toolbox/lib/button';


export default class extends Component{
  render(){
    const { medidor, increase, decrease, selected } = this.props;
    const medicion = medidor.get('value').toString().split('');
     console.log(medidor.get('selected'))
    return(
      <Flexbox flexDirection="column">
        <Flexbox justifyContent="center">
          <Dropdown
            allowBlank={true}
            source={medidor.get('data').toJS()}
            onChange={selected}
            value={medidor.get('selected')}
            valueKey="id"
            labelKey="no_medidor"
          />
        </Flexbox>
        <Flexbox flexDirection="row">
          {
            medicion.map( (value, key) =>
              <Counter
                  key={key}
                  value={value}
                  increase={increase.bind(null,1*Math.pow(10,medicion.length-1-key))}
                  decrease={decrease.bind(null,1*Math.pow(10,medicion.length-1-key))}
                />
            )
          }

        </Flexbox>
        <Flexbox  alignContent="center" justifyContent="center" padding="20px">
          <Button icon='save' label='Guardar' raised primary />
        </Flexbox>
      </Flexbox>
    )
  }
}