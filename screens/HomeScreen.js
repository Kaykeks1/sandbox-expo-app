import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {
  return (
    <View>
        <Text className='text-red-500'>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
    </View>
  )
}

export default HomeScreen