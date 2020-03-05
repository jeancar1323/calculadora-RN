import React from 'react'
import {Text,View} from 'react-native'
import {Scomponents} from '../styles/styles'


export default props => 
  <View style={Scomponents.display} >
      <Text style={Scomponents.displayValue} numberOfLines={1}>{props.Text}</Text>
  </View>
  
