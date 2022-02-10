import React from  'react'
import { View, Text, StyleSheet } from 'react-native'

const StatusBox = ({amount}) => {
  return(
  <View style={styles.container}>
    <Text style={styles.amount}>{amount}</Text>
  </View>
  )
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d5e746",
    alignItems: 'center',
    padding: 18,
    margin:4,
    borderRadius: 4,
    height: 60

  },
  amount: {
    fontWeight: 'bold'
  }
})

export default StatusBox
