import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, responsiveSize } from '../themes/themePrincipal'
import CardScheduleTime from './CardScheduleTime'

const Reminder = () => {
const {fz,hp,wp}=responsiveSize
  return (
    <View>
      <Text style={{color:colors.black,fontWeight:'bold',fontSize:fz(2),marginBottom:hp(1)}}>Reminder</Text>

      <Text >Dont forget schedule for tomorrow</Text>

      <CardScheduleTime />
    </View>
  )
}

export default Reminder

const styles = StyleSheet.create({})