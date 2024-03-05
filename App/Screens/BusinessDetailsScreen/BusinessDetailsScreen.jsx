import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';

export default function BusinessDetailsScreen() {
    const param=useRoute().params
    const [business,setBusiness]=useState()
    const navigation=useNavigation()
    useEffect(()=>{
        setBusiness(param?.business)
    },[param])
  return (
  
    <View>
        <TouchableOpacity  onPress={()=>navigation.goBack()}style={styles.backBtnContainer}>
            <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Image source={{uri: business?.images[0]?.url}} 
            style={{width: '100%', height: 300, zIndex: 1}}/>
        <View style={styles.infoContainer}>
            <Text style={{fontFamily: 'outfit-bold', fontSize: 25}}>{business?.name}</Text>
            <View style={styles.subContainer}>
                <Text style={{fontFamily: 'outfit-medium', color: Colors.PRIMARY, fontSize: 20}}>{business?.contactPerson} 🌟 </Text>
                <Text style={{color: Colors.PRIMARY, backgroundColor: Colors.PRIMARY_LIGHT,
                padding: 3, borderRadius: 5, fontSize: 14}}>{business?.category.name}</Text>
            </View>
            
            <Text>{business?.address}</Text>
        </View>

        
     
    </View>
    
  )
}

const styles=StyleSheet.create({
    backBtnContainer:{
        zIndex: 10,
        position: 'absolute',
        padding: 20
    },
    infoContainer:{
        padding: 20,
        display: 'flex',
        gap: 7
    },
    subContainer:{
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'

    }
})