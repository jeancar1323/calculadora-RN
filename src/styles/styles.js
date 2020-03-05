import React from 'react'
import {StyleSheet, Dimensions} from 'react-native'


export const padrao =  StyleSheet.create({
    container:{
      flex:1,
      
    },
    buttons:{
      flexDirection:"row",
      flexWrap: 'wrap',
         
    },
})

const number = 0 ;


export const Scomponents  = StyleSheet.create({

    buttonDefault:{
        fontSize: 40,
        height: (Dimensions.get('window').width /4) + number ,
        width: (Dimensions.get('window').width /4),
        padding:20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'      
    },
    display:{
      flex:1,
      padding:20,
      justifyContent:'center',
      backgroundColor:'rgba(0,0,0,0.6)',
      alignItems:'flex-end',

    },
    displayValue:{
      fontSize:50,
      color: '#fff',
      
    },
    operetionButton:{
      color:'#fff',
      backgroundColor:'green',
    },
    buttonDouble:{
      width: (Dimensions.get('window').width /2),
    },
    buttonTriple:{
      width: ((Dimensions.get('window').width /4) * 3),
    }
})