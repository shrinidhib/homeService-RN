import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../Utils/Colors'
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
    const {user,isLoading}=useUser()
  return user && (
    <View style={styles.container}>
        {/* profile section */}
        <View style={styles.profileMainContainer}>
            <View style={styles.profileContainer}>
                <Image source={{uri:user?.imageUrl}}
                style={styles.userImage}/>
                <View>
                    <Text style={{color:Colors.WHITE}}>Welcome</Text>
                    <Text style={{color:Colors.WHITE, fontSize: 20}}>{user?.fullName}</Text>
                </View>
            </View>
            <FontAwesome name="bookmark-o" size={27} color="white" />
        </View>
        {/* search bar section */}
    </View>
  )
}

const styles=StyleSheet.create({
    userImage:{
        width:45,
        height: 45,
        borderRadius:99,
    },
    container:{
        padding:20,
        paddingTop: 50,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },
    profileContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    profileMainContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})