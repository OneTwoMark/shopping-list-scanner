import { View, Text } from 'react-native'
import React from 'react'

export default function HomeScreen() { // I should put this component into a "screen" folder. Well, all components that are just screens really. 
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Start scanning to add items!</Text>
    </View>
  )
}