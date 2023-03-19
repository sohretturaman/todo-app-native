import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListComp = ({listItem}) => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>{listItem}</Text>
    </View>
  )
}

export default ListComp;

const styles = StyleSheet.create({
  container:{
    borderRadius:10,
    borderColor:'black',
    backgroundColor:'#D8A9DE',
    paddingHorizontal:2,
    paddingVertical:10,
    width:300,
    borderWidth:2,
    marginVertical:5
  },
  text:{
    fontSize:15,
     fontWeight:'bold',
     color:'black',
     padding:2
  }
})