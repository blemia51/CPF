import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'

const Challenges = ({ energy }) => {

  const [slug, setSlug] = useState()
  const [label, setLabel] = useState()
  const [wattHour, setWattHour] = useState()

  useEffect(() => {
    setSlug(require('../assets/email2.png'))
    setLabel('Envoyer un email de 1Mo')
    setWattHour('3Wh')
  }, [])

  const updateEnergy = useCallback(() => {
    if (energy <= 7 && energy > 3) {
      setSlug(require('../assets/lightBulb.png'))
      setLabel('Une heure d"ampoule LED')
      setWattHour('7Wh')
    }
    if (energy <= 10 && energy > 7) {
      setSlug(require('../assets/smartphone1.png'))
      setLabel('Une charge de téléphone')
      setWattHour('10Wh')
    }
    if (energy <= 21 && energy > 10) {
      setSlug(require('../assets/freezer.png'))
      setLabel('Une heure de congélateur')
      setWattHour('21Wh')
    }
    if (energy <= 41 && energy > 21) {
      setSlug(require('../assets/plasticBag.png'))
      setLabel('Produire un sac Plastique')
      setWattHour('41Wh')
    }
    if (energy <= 60 && energy > 41) {
      setSlug(require('../assets/lightBulb1.png'))
      setLabel('Une heure d\'ampoule classique')
      setWattHour('60Wh')
    }
    if (energy > 60) {
      setSlug(require('../assets/laptop2.png'))
      setLabel('Travailler une heure sur portable')
      setWattHour('100Wh')
    }
  },[energy])

  useEffect(() => {
    updateEnergy()
  },[updateEnergy])

  return (
    <View style={{alignItems: 'center'}} >
      <Image
        source={slug}
        //style={{ width:180 }}
        resizeMode="contain"
      />
      <Text style={styles.energy}>{wattHour}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  energy: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'#0c5266'
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#0c5266'
  }
})

export default Challenges
