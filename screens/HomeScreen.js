import React from 'react'
import { Text, View, StyleSheet, Pressable,Dimensions } from 'react-native'
import Header from '../components/Header';
import { ScreenTypes } from '../constants/Constants';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons'

const HomeScreen = ({ onExit }) => {
  return (
    <View style={styles.container}>
     <Text style={{color:'#D9A9D1',fontWeight:500,fontSize:15,elevation:2,shadowColor:'black',shadowOffset:{height:10,width:2}}}>Welcome ....</Text>
      <View style={styles.notesContainer}>
        <Pressable onPress={() => onExit(ScreenTypes.addNote)} style={styles.innerContainer} >
          <View style={styles.wrapper} >
            <Text style={styles.text_note}>Add notes</Text>
            <Icon name='arrow-right-bold-hexagon-outline' size={30} color='black' />
          </View>
        </Pressable>
        {/*  all notes container */}
        <Pressable onPress={() => onExit(ScreenTypes.allNotes)} style={styles.innerContainer}>
          <View style={styles.wrapper} >
            <Text style={styles.text_note}>All notes</Text>
            <Icon name='arrow-right-bold-hexagon-outline' size={30} color='black' />
          </View>
        </Pressable>

      </View>
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {

    alignContent: 'center',
    alignItems: 'center',

  },
  text_note: {
    color:'black',
    fontSize:25,
    fontWeight:500

  },
  notesContainer: {

  },
  innerContainer: {
    marginVertical: 10
  },

  wrapper: {
    height: 200,
    width: Dimensions.get('window').width - 100,
    backgroundColor: 'white', //changed
    borderRadius: 10,
    marginTop: 5,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { height: 10, width: 2 },
    shadowRadius: 10,




  },
  title: {
    color: Platform.OS == 'android' ? 'white' : 'Black',
    fontSize: 25,
    paddingHorizontal: 10,
    paddingTop: -30,
    alignContent: 'center',
    justifyContent: 'center',


  }

})