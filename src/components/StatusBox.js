import React from  'react'
import { View, Text, StyleSheet } from 'react-native'

const StatusBox = ({amount, units}) => {
  return(
  <View style={styles.container}>
    <Text style={styles.amount}>{amount}<Text style={[styles.units, units === 'W' && {fontSize: 24}]}>{units}</Text></Text>
  </View>
  )
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d5e746",
    alignItems: 'center',
    justifyContent:'center',
    padding: 12,
    margin:4,
    borderRadius: 4,
    height: 60

  },
  amount: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#0c5266'
  },
  units: {
    fontSize: 12,
    color: '#0c5266'
  }
})

export default StatusBox
