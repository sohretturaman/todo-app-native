import React from 'react'
import { Button, TouchableOpacity, View,Text,StyleSheet } from 'react-native'
import { ScreenTypes } from '../constants/Constants';

const BackButton = ({onclick}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>onclick(ScreenTypes.home)}>
             <Text style={styles.text}> back </Text>
        </TouchableOpacity>
    </View>
  )
}

export default BackButton;
const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        width:70,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10,
        padding:4,
        justifyContent:'center',
        
    },
    text:{
        fontSize:16,
        color:'#D8A9DE',
        fontWeight:'bold'

    }
})