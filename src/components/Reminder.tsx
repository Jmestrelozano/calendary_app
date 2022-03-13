import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, responsiveSize } from '../themes/themePrincipal'

const Reminder = () => {
const {fz}=responsiveSize
  return (
    <View>
      <Text style={{color:colors.black,fontWeight:'bold',fontSize:fz(2)}}>Reminder</Text>

      <Text>Dont forget schedule for tomorrow</Text>
    </View>
  )
}

export default Reminder

const styles = StyleSheet.create({})