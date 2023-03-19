import React from 'react'
import { Platform, StyleSheet, Text, View ,Dimensions} from 'react-native'
import BackButton from './BackButton';

const bgColor = '#f5f5f5';
const Header = () => {
  return (
    <View style={styles.container}>
   
        <Text style={styles.title}>Your Sticky Notes</Text>
    </View>
  )
}

export default Header

const styles =StyleSheet.create({
    container:{ 
        height:110,
        width:Dimensions.get('window').width -10,
        backgroundColor:'#D8A9DE',
        borderRadius:10,
        justifyContent:'center',
        marginTop:5,
        elevation:10,
        shadowColor:'black',
        shadowOffset:{height:10,width:2},
        shadowRadius:10,
        marginBottom:10  ,
        padding:10


    },
    title:{
        color:Platform.OS=='android'?'black':'Black',
        fontSize:25,
         paddingVertical:20,
         paddingHorizontal:10
        

    }
})