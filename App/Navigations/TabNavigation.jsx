import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
//icons
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../Utils/Colors';
import HomeNavigation from './HomeNavigation';
import BookingNavigation from './BookingNavigation'
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
   <Tab.Navigator screenOptions={{
    headerShown: false,
    tabBarActiveTintColor: Colors.PRIMARY}}>
        <Tab.Screen name='home' component={HomeNavigation} 
        options={{
            tabBarLabel:({color})=>(
                <Text style={{
                    color: color, fontSize: 12,
                    marginTop:-7
                }}>Home</Text>
            
        ),
            tabBarIcon:({color,size})=>(
                <FontAwesome5 name="home" size={size} color={color} />
            )
    
       }}/>

        <Tab.Screen name='booking' component={BookingNavigation}
         options={{
            tabBarLabel:({color})=>(
                <Text style={{
                    color: color, fontSize: 12,
                    marginTop:-7
                }}>Booking</Text>
            
        ),
            tabBarIcon:({color,size})=>(
                <FontAwesome name="bookmark" size={size} color={color} />
            )
    
       }} />
        <Tab.Screen name='profile' component={ProfileScreen}
         options={{
            tabBarLabel:({color})=>(
                <Text style={{
                    color: color, fontSize: 12,
                    marginTop:-7
                }}>Profile</Text>
            
        ),
            tabBarIcon:({color,size})=>(
                <FontAwesome name="user" size={size} color={color} />
            )
    
       }} />
        
   </Tab.Navigator>
  )
}

export default TabNavigation