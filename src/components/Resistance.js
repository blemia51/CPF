import React from  'react'
import { View, Text, StyleSheet } from 'react-native'

const Bar = () => {
  return(
    <View style={{backgroundColor:'red', height: 30, width:8, borderRaius: 20, margin: 2}} />
  )
}

const blocks = new Array(3)
console.log('blocks', blocks)

const Resistance = () => {
  return(
  <View style={styles.container}>
    <Text>RESISTANCE</Text>
       <View style={{flexDirection: 'row', margin: 4}}>
        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />
       </View>
  </View>
  )
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 18,
    marginTop: 30,
    width: '100%'
  }
})

export default Resistance
