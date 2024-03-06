import { View, Text, Image, StyleSheet, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ScrollView, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import Colors from '../../Utils/Colors';
import Heading from '../../Components/Heading';
import BusinessPhotos from './BusinessPhotos';
import BookingModal from './BookingModal';

export default function BusinessDetailsScreen() {
    const param=useRoute().params
    const [isReadMore, setIsReadMore]=useState(false)
    const [showModal, setShowModal]=useState(false)
    const [business,setBusiness]=useState()
    const navigation=useNavigation()
    useEffect(()=>{
        setBusiness(param.business)
    },[param])
  return business && ( 
    <View>
    <ScrollView style={{height: '90%'}}>
        <TouchableOpacity  onPress={()=>navigation.goBack()}style={styles.backBtnContainer}>
            <Ionicons name="arrow-back" size={30} color="white" />
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
    <View style={{display: 'flex', flexDirection: 'row', margin: 8, gap: 8, justifyContent:'space-around'}}>
        <TouchableOpacity style={styles.messageBtn}>
            <Text 
            style={{textAlign: 'center',
            fontFamily: 'outfit-medium',
            color: Colors.PRIMARY,
            fontSize: 18
            }}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setShowModal(true)} style={styles.bookingBtn}>
            <Text 
            style={{textAlign: 'center',
            fontFamily: 'outfit-medium',
            color: Colors.WHITE,
            fontSize: 18
            }}>Book</Text>
        </TouchableOpacity>
    </View>

    {/* Booking modal */}
    <Modal
    animationType='slide'
    visible={showModal}>
        <BookingModal
            businessId={business.id}
            hideModal={()=>{
            console.log(1)
            setShowModal(false)}}/>
    </Modal>
    </View>
    
  )
}

const styles=StyleSheet.create({
    backBtnContainer:{
        zIndex: 10,
        position: 'absolute',
        padding: 30
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

    },
    messageBtn:{
        padding: 15,
        backgroundColor: Colors.WHITE,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        borderRadius: 99,
        width: 150
      
    },
    bookingBtn:{
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        borderRadius: 99,
        width: 150
       
    }
})