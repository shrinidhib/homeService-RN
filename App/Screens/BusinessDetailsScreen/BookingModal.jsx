import { View, Text, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CalendarPicker from 'react-native-calendar-picker'
import Colors from '../../Utils/Colors';
import Heading from '../../Components/Heading';
import GlobalApi from '../../Utils/GlobalApi';
import {  useUser } from '@clerk/clerk-expo';
import moment from 'moment';



export default function BookingModal({businessId, hideModal}) {
    const navigator=useNavigation()
    const [timeList,setTimeList]=useState([])
    const [selectedTime,setSelectedTime]=useState()
    const [selectedDate,setSelectedDate]=useState()
    const [note,setNote]=useState('')
    const {user}=useUser();

    
    useEffect(()=>{
        getTime();
    },[])
    
    const getTime=()=>{
        const times=[]
        for (let i=8;i<=12;i++){
            times.push({
                time:i+':00 AM'
            })
            times.push({
                time:i+':30 AM'
            })
           
        }
        for (let i=1;i<=7;i++){
            times.push({
                time:i+':00 PM'
            })
            times.push({
                time:i+':30 PM'
            })
           
        }
        setTimeList(times)
    }

    const createNewBooking=()=>{
        if (!selectedDate || !selectedTime ){
            ToastAndroid.show('Please select date and time', ToastAndroid.LONG)
            return
        }
        const data={
            userName: user?.fullName,
            userEmail: user?.primaryEmailAddress.emailAddress,
            time: selectedTime,
            date: moment(selectedDate).format('DD-MM-yyyy'),
            note: note,
            businessId: businessId
        }
        GlobalApi.createBooking(data).then(resp=>{
            console.log('resp: ',resp)
            ToastAndroid.show('Booking Created Successfully!', ToastAndroid.LONG)
            hideModal()
        })
    }

  return (
    <ScrollView>
        {/* keyboard avodiing view to make sure the text area is visible when user types */}
    <KeyboardAvoidingView style={{padding: 20}}>
        <TouchableOpacity onPress={()=>hideModal()} style={{display: 'flex', flexDirection: 'row', gap: 10,
        alignItems: 'center', marginBottom: 15
            }}>
            <Ionicons name="arrow-back" size={30} color="black" />
            <Text style={{fontSize: 25, fontFamily: 'outfit-medium'}}>Booking</Text>
        </TouchableOpacity>

        {/* Calender section */}
        <Heading text={'Select Date'}/>
        <View style={styles.calenderContainer}> 
            <CalendarPicker
                onDateChange={setSelectedDate}
                width={340}
                minDate={Date.now()}
                todayBackgroundColor={Colors.PRIMARY}
                todayTextStyle={{color: Colors.WHITE}}
                selectedDayColor={Colors.PRIMARY}
                selectedDayTextColor={Colors.WHITE}/>
        </View>

        {/* Time select section */}
        <View style={{marginTop: 10}}>
            <Heading text={'Select Time Slot'}/>
            <FlatList
            data={timeList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index})=>(
                <TouchableOpacity style={{margin: 5}} onPress={()=>setSelectedTime(item.time)}>
                    <Text style={[selectedTime==item.time? styles.selectedTime : styles.unselectedTime]}>{item.time}</Text>
                </TouchableOpacity>
            )}
            />
        </View>

        {/* Note section */}

        <View>
            <Heading text={'Any suggessions? '}/>
            <TextInput onChange={(text)=>setNote(text)} numberOfLines={4} multiline={true} placeholder='Note' style={styles.noteTextArea}/>
        </View>

        {/* Confirmation Button  */}

        <TouchableOpacity onPress={()=>createNewBooking()} style={{marginTop: 15}} >
            <Text style={styles.confirmButton}>Confirm & Book</Text>
        </TouchableOpacity>
      
        

    </KeyboardAvoidingView>
    </ScrollView>
  )
}
const styles=StyleSheet.create({
    calenderContainer:{
        backgroundColor: Colors.PRIMARY_LIGHT,
        padding: 20,
        borderRadius: 15
    },
    selectedTime:{
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        borderRadius: 99,
        paddingHorizontal: 18,
        color: Colors.WHITE,
        backgroundColor: Colors.PRIMARY
    },
    unselectedTime:{
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        borderRadius: 99,
        paddingHorizontal: 18,
        color: Colors.PRIMARY
    },
    noteTextArea:{
        borderWidth: 1,
        borderRadius: 15,
        textAlignVertical: 'top',
        padding: 20,
        fontSize: 16,
        fontFamily: 'outfit',
        borderColor: Colors.PRIMARY
    },
    confirmButton:{
        textAlign: 'center',
        fontFamily: 'outfit-medium',
        fontSize: 17,
        backgroundColor: Colors.PRIMARY,
        color: Colors.WHITE,
        padding: 10,
        borderRadius: 99,
        elevation: 3,
    
    }
})