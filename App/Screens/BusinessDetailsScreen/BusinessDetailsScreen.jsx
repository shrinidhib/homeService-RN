import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import Colors from '../../Utils/Colors';
import Heading from '../../Components/Heading';
import BusinessPhotos from './BusinessPhotos';

export default function BusinessDetailsScreen() {
    const param=useRoute().params
    const [isReadMore, setIsReadMore]=useState(false)
    const [business,setBusiness]=useState()
    const navigation=useNavigation()
    useEffect(()=>{
        setBusiness(param.business)
    },[param])
  return business && ( 
  
    <ScrollView>
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
            
            <Text style={{fontSize:20, fontFamily: 'outfit', color: Colors.GRAY}}>
                <MaterialIcons name="location-pin"  size={25} color={Colors.PRIMARY} />{business?.address}</Text>

            <View style={{borderWidth: 0.4, borderColor: Colors.GRAY, marginTop: 30, marginBottom: 20}}></View>

            <View>
                <Heading text={"About Me"}/>
                <Text style={{fontFamily: 'outfit', color: Colors.GRAY, lineHeight: 28, fontSize: 16}} numberOfLines={isReadMore?20:5}>{business?.about}</Text>
                <TouchableOpacity onPress={()=>setIsReadMore((prev)=>!prev)}>
                    <Text style={{color: Colors.PRIMARY, fontSize: 16, fontFamily:'outfit'}}>{isReadMore? 'Read Less':'Read More'}</Text>
                </TouchableOpacity>
            </View>

            <View style={{borderWidth: 0.4, borderColor: Colors.GRAY, marginTop: 30, marginBottom: 20}}></View>

            <BusinessPhotos business={business}/>

        </View>

        
     
    </ScrollView>
    
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