import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Categorys from './Categorys'
import BusinessList from './BusinessList'

export default function HomeScreen() {
  return (
    <View>
      <Header/>
      <View style={{padding: 20}}>
        <Slider/>
        <Categorys/>
        <BusinessList/>
      </View>
      
    </View>
  )
}