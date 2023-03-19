import React, { useState } from 'react'
import { Text, View ,StyleSheet,Dimensions, TextInput, Button} from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import { ScreenTypes } from '../constants/Constants'

const AddNotes = ({onAddNote,onComplement}) => {
  const[onchangetext,setOnChangeText]=useState("")
  const handleInput=(value)=>{
    setOnChangeText(value)
  }
  const handleClick=()=>{
    console.log(onchangetext);
    if(onchangetext.trim().length > 0){
      onAddNote(onchangetext)
      onComplement(ScreenTypes.allNotes)
    }
    
  }
  return (
    <View>
      <Text style={{fontSize:15,marginHorizontal:5,fontWeight:'bold',color:'black'}}>Add a note as you wish.... </Text>
      <View style={styles.inputWprapper}>
          <TextInput onChangeText={handleInput}  style={styles.input} multiline={true}/>
      </View>
      <View style={styles.buttonWrapper}>
      <Button title='add note' titleStyle={{color:'black'}}  color={'#D8A9DE'} onPress={handleClick} style={styles.button} />
      </View>
      
    </View>
  )
}

export default AddNotes;

const styles =StyleSheet.create({
    container:{
            flex:1,
            alignItems:'center',

    },
    inputWprapper:{
          borderColor:'black',
          borderWidth:2,
          marginBottom:10,
          borderRadius:10,
          height:'50%',
          backgroundColor:'#f5ebe0',
          margin:10,
          
    },
    input:{
       justifyContent:'flex-start',
       borderRadius:10,  
       fontSize:16 
       
    },
    button:{
      width:'50%',
      alignItems:'center',
   
   
    },
    buttonWrapper:{
      alignSelf:'center',
      width:'50%',
      alignContent:'center',   
     textAlign:'center',
     borderRadius:10

    }
})