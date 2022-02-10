import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import StatusBox from '../components/StatusBox'
import StatusBar from '../components/StatusBar'
import Resistance from '../components/Resistance'
import Challenges from '../components/Challenges'

export default function Home() {

  const [amount, setAmount] = useState(null)

  useEffect(() => {
    setAmount(0)
  },[])

  useEffect(() => {
    const interval = setInterval(() => {
      if (amount < 100) {
        setAmount(amount => amount + 0.5)
      }
    }, 1000)
    return () => clearInterval(interval);
  })

  return (
    <View style= {{flex: 1, alignItems: 'center', paddingVertical: 68}} >
      <Challenges energy={amount} />
      <View style={{width: '90%', flexDirection: 'row',  justifyContent: 'center', alignItems: 'center', paddingRight:4}}>
        <StatusBar amount={amount} />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center', width: '90%', alignItems: 'center', marginTop: 18}}>
        <StatusBox amount='7W' />
        <StatusBox amount='12km/h' />
        <StatusBox amount='76RPM' />
      </View>
      <View style={{width: '100%', height: '100%'}}>
        <Resistance />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})