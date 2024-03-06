import { View, Text } from 'react-native'
import React from 'react'
import Heading from '../../Components/Heading'
import PageHeading from '../../Components/PageHeading'

export default function BookingScreen() {
  return (
    <View style={{paddingTop: 40, paddingLeft: 20}}> 
      <Text style={{fontFamily: 'outfit-medium', fontSize: 26}}>My Bookings</Text>
    </View>
  )
}