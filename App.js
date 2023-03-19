 // kod hizalamak için shift + alt + f
import React,{useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BackButton from './components/BackButton';
import Header from './components/Header';
import { ScreenTypes } from './constants/Constants';
import AddNotes from './screens/AddNotes';
import AllNotes from './screens/AllNotes'
import HomeScreen from './screens/HomeScreen';



function App(){
const [screen, setScreen] = useState(ScreenTypes.home);
const [clickedNotes,setClickedNotes] =useState([])
const updateScreen =(data)=>{
  setScreen(data)
} // here is important we rendered data with a function but data veraible not in 
//curly bracets

   let constant ;
if(screen==ScreenTypes.addNote){
  constant=<AddNotes onComplement={updateScreen} onAddNote={(data)=>setClickedNotes([...clickedNotes,{id:Date.now(),note:data}])}/>;
} else if (screen==ScreenTypes.allNotes){
  constant=<AllNotes  notes={clickedNotes}/> ;
}else if (screen==ScreenTypes.home){
  constant=<HomeScreen onExit={updateScreen}/>;
}

console.log('clicked notes ',clickedNotes)
 return(
   <SafeAreaView style={styles.container}>
      <View>
      <Header />
      {screen !==ScreenTypes.home && (<BackButton onclick={(data)=>setScreen(data)}/>)}
        {constant}
      </View>
   </SafeAreaView>
 )

}


 export default App ;
 const styles = StyleSheet.create({
  container:{
    alignContent: 'center',
    alignItems: 'center',
  }
 })