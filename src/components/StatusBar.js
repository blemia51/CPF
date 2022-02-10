import React from  'react'
import { View, Text, StyleSheet, Image } from 'react-native'



const StatusBar = ({amount}) => {
  return(
    <View style={{justifyContent: 'center', width: '100%', marginTop: 18}}>
      <View style={{width: amount < 10 ? `${amount+18}%`: `${amount+8}%`}}>
        <Text style={{textAlign: 'right', fontWeight: 'bold'}}>{`${amount}Wh`}</Text>
      </View>
      <View style={{flexDirection:"row", justifyContent:'space-between', alignItems: 'center'}}>
      <View style={styles.container}>
        <View style={[styles.progressBar, amount && {width:`${amount}%`}]} />
        <Image
          source={require('../assets/invalidName.png')}
          style={{ marginLeft: 8 }}
          resizeMode="contain"
        />
        </View>
        <Image
          source={require('../assets/angleUpDuotone.png')}
          style={{ marginLeft: 8 }}
          resizeMode="contain"
        />
      </View>
    </View>
  )
}
  
const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 36,
    borderColor: "#83ddfa",
    borderWidth: 1.5,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingVertical: 4 ,
    margin:4,
    borderRadius: 4
   
  },
  progressBar: {
    width: '40%',
    height: 34,
    backgroundColor: "#83ddfa",
    position: 'absolute',
    borderRadius: 4
  }
})

export default StatusBar
