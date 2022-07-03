import { View, Text,StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { Colors } from '../utils/Color'

const FocusItems = ({items}) => {

  if(!items || !items.length){ 
    return <Text style={styles.text} > Currently no items to display.. </Text>
  }

const handleItem =({item})=>{
     return (
     <View style={styles.container}>
      <Text style={styles.text}>{item}</Text>
      </View>
     )
}

  return (
    <View  >
      <Text style={styles.text}> Things recently focused on </Text>
      <FlatList 
      data={items}
      renderItem={handleItem}
       style={styles.list}/>
    </View>
  )
}

export default FocusItems

const styles = StyleSheet.create({
  text:{
    padding:20,
    color:Colors.timingtitle
  },
  container:{
    padding:3,
    justifyContent:'space-around'
  

  },
  item:{
    color:Colors.color1
  },
  list:{
backgroundColor:Colors.progress
  }
})