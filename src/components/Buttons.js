import React from 'react'
import {Text, TouchableHighlight} from 'react-native'
import {Scomponents} from '../styles/styles'


export default props =>{
  const styleButtons = [Scomponents.buttonDefault]
  if(props.double)
    styleButtons.push(Scomponents.buttonDouble)

  if(props.triple)
    styleButtons.push(Scomponents.buttonTriple)

  if(props.operetion)
    styleButtons.push(Scomponents.operetionButton)

  return(
    <TouchableHighlight onPress={ _ => props.onClick(props.Text)} >
      <Text style={styleButtons}>{props.Text}</Text>
    </TouchableHighlight>
  )
}