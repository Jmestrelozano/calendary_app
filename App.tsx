import React from 'react'
import { StyleSheet, View } from 'react-native'
import Navigation from './src/navigation/Navigation'

import Home from './src/views/Home'

const App = () => {
  return (
    <View style={{flex:1}}>
      <Navigation />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})