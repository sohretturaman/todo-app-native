import React from 'react'
import { Text, View, StyleSheet, Dimensions, FlatList, ScrollView } from 'react-native'
import ListComp from '../components/ListComp'

const data = [
  { id: 1, note: 'this is first note ' },
  { id: 2, note: 'this is second note ' }
]
const AllNotes = ({ notes }) => {

  const renderItem = (noteItem) => {
    return (
      <View>
       {/*<Text style={styles.item}>{noteItem.item.note}</Text> */} 
        <ListComp listItem={noteItem.item.note} />
      </View>
    )
  }
  console.log('notes data is here', notes)
  return (
    <View  style={styles.container}>
      <Text style={{fontSize:20,fontWeight:600}}>All Notes</Text>
      <View>
        <FlatList
          data={notes}
          renderItem={renderItem}
        />
      </View>

      {/* 
      <ScrollView>
        <View>
          {notes.map((noteItem) => {
            return (
              <View>
                <Text style={styles.item}>{noteItem.note}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
     */}




    </View>
  )
}

export default AllNotes;


const styles = StyleSheet.create({
  item: { color: 'black', fontSize: 17 },
  container:{
    alignItems:'center'
  }
})