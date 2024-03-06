import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useAuth, useUser } from '@clerk/clerk-expo';
import Colors from '../../Utils/Colors';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const {user}=useUser()
  const {isLoaded, signOut}=useAuth()
  const navigation=useNavigation()
  const profileMenu=[
    {
      id:1,
      name: 'Home',
      icon: 'home'
    },
    {
      id: 2,
      name: 'My Bookings',
      icon: 'bookmark-sharp'
    },
    {
      id: 3,
      name: 'Contact Us',
      icon: 'mail'
    },
    {
      id: 4,
      name: 'LogOut',
      icon: 'log-out'
    }
  ]
  const handlePress=(item)=>{
    switch (item.name) {
      case 'Home':
        navigation.push('home')
        break;
      case 'My Bookings':
        navigation.push('bookings')
        break;
      case 'Contact Us':
        Linking.openURL('mailto: homeservice@gmail.com')
        break;
      case 'LogOut':
        signOut()
        break;
      default:
        break;
    }
  }
  return (
    <View>
    <View style={{padding: 20, paddingTop: 40, backgroundColor: Colors.PRIMARY}}>
      <Text style={{fontSize: 30, fontFamily: 'outfit-bold', color: Colors.WHITE}}>Profile</Text>
      <View style={{display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    
    }}>
          <Image source={{uri:user?.imageUrl}} style={styles.userIcon}/>
          <Text style={{fontSize: 26, marginTop: 8, fontFamily: 'outfit-medium', color: Colors.WHITE}}>{user?.fullName}</Text>
          <Text style={{fontSize: 18, marginTop: 8, fontFamily: 'outfit', color: Colors.WHITE}}>{user?.primaryEmailAddress.emailAddress}</Text>
      </View>
    </View>
    <View style={{paddingTop: 100}}>
      <FlatList
        data={profileMenu}
        renderItem={({item,index})=>(
          <TouchableOpacity onPress={()=>handlePress(item)}style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10,marginBottom: 30, paddingHorizontal: '25%' }}>
          <Ionicons name={item.icon} size={35} color={Colors.PRIMARY}/>
          <Text style={{fontFamily: 'outfit', fontSize: 20}}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
    </View>
  )
}

const styles=StyleSheet.create({
  userIcon:{
    height: 90,
    width: 90,
    borderRadius: 99
  }
})