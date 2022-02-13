import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Challenges = ({ slug, watt, label, challenge }) => {

  return (
    <View style={{alignItems: 'center'}} >
      <Text style={styles.challenge}>{`challenge #${challenge}`}</Text>
      <Image
        source={slug}
        style={{ height: 100 }}
        resizeMode="contain"
      />
      <Text style={styles.energy}>{watt}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  energy: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'#0c5266',
    paddingVertical: 4
  },
  label: {
    fontSize: 20,
    color:'#0c5266',
    position: 'absolute',
    top: 164
  },
  challenge: {
    paddingBottom: 8,
    color: '#bbcfd6', 
    fontSize: 16
  }
})

export default Challenges
