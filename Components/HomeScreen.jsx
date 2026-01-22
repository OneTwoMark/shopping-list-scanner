import { View, Text } from 'react-native'
import React from 'react'

export default function HomeScreen() { // I should put this component into a "screen" folder. Well, all components that are just screens really. 
  return ( // lets make this a shopping list notepad the user can use like a normal notepad and refer to their scanned items
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
      <Text>Shopping list</Text> 
    </View>
  )
}