import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen'
import BookingScreen from '../Screens/BookingScreen/BookingScreen'
import HomeScreen from '../Screens/HomeScreen/HomeScreen'


const Stack=createStackNavigator()
export default function ProfileNavigations() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='profile' component={ProfileScreen}/>
        <Stack.Screen name='bookings' component={BookingScreen}/>
        <Stack.Screen name='home' component={HomeScreen}/>
    </Stack.Navigator>
  )
}