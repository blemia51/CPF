import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import StatusBox from '../components/StatusBox'
import StatusBar from '../components/StatusBar'
import Resistance from '../components/Resistance'
import Challenges from '../components/Challenges'

import { DATAS } from '../components/DATAS'

export default function Home() {

  let [amount, setAmount] = useState(null)
  let [totalAmount, setTotalAmount] = useState(null)
  const [progressBar, setProgressBar] = useState(0)
  const [challengeNumber, setChallengeNumber] = useState(1)
  const [challenge, setChallenge] = useState()

  useEffect(() => {
    const challengeDatas = DATAS.find(data => data.challenge === challengeNumber)
    setChallenge(challengeDatas)
    setAmount(0)
    setTotalAmount(0)
  },[])

  useEffect(() => {
    const challengeDatas = DATAS.find(data => data.challenge === challengeNumber)
    setChallenge(challengeDatas)
  },[challengeNumber])

  useEffect(() => {
    const interval = setInterval(() => {
      if (challengeNumber <  8 ) {
        setTotalAmount(totalAmount => totalAmount + 0.5)
        if (totalAmount < challenge.max) {
          setAmount(amount => amount + 0.5)
          setProgressBar(progressBar => progressBar + (100*0.5/challenge.max))
        }
        if (totalAmount === challenge.max) {
          setAmount(0)
          setProgressBar(0)
          setChallengeNumber(challengeNumber => challengeNumber + 1)
          setTotalAmount(0)
        }
        if (totalAmount === challenge.max && challengeNumber === 7) return
      }
    }, 1000)
    return () => clearInterval(interval);
  })

  return (
    <View style= {{flex: 1, alignItems: 'center', paddingVertical: 28}} >
      <Challenges {...challenge} />
      <View style={{width: '90%', flexDirection: 'row',  justifyContent: 'center', alignItems: 'center', paddingRight:4, marginTop: 44}}>
        <StatusBar amount={amount} progressBar={progressBar} />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center', width: '90%', alignItems: 'center', marginTop: 18}}>
        <StatusBox amount='7' units='W' />
        <StatusBox amount='12' units='km/h' />
        <StatusBox amount='76' units='RPM' />
      </View>
      <View style={{width: '100%', height: '100%', backgroundColor: '#fff', marginTop: 28}}>
        <Resistance />
      </View>
    </View>
  )
}
