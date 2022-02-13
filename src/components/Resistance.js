import React from  'react'
import { View, Text, StyleSheet } from 'react-native'

import DashedBar from './DashedBar'

const Resistance = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>RESISTANCE</Text>
      <DashedBar />
      <Text 
        style={{
          color: '#fb836a',
          position: 'absolute',
          left: 170,
          top: 64,
          fontSize: 12,
          fontWeight: 'bold'
        }}>
          6.1
        </Text>
    </View>
  )
}
  
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    marginTop: 4,
    width: '100%',
    alignItems: 'flex-start'
  },
  title: {
    color: 'lightgrey',
    fontWeight: 'bold',
  
  }
})

export default Resistance
