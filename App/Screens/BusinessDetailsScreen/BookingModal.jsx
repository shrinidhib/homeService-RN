import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CalendarPicker from 'react-native-calendar-picker'
import Colors from '../../Utils/Colors';
import Heading from '../../Components/Heading';


export default function BookingModal({hideModal}) {
    const navigator=useNavigation()
    const [timeList,setTimeList]=useState([])
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
  return (
    <View style={{padding: 20}}>
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
                onDateChange={this.onDateChange}
                width={340}
                minDate={Date.now()}
                todayBackgroundColor={Colors.PRIMARY}
                todayTextStyle={{color: Colors.WHITE}}
                selectedDayColor={Colors.PRIMARY}
                selectedDayTextColor={Colors.WHITE}/>
        </View>

        {/* Time select section */}
        <View>
            <FlatList
            data={timeList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index})=>(
                <TouchableOpacity >
                    <Text style={styles.unselectedTime}>{item.time}</Text>
                </TouchableOpacity>
            )}
            />
        </View>
      
        

    </View>
  )
}
const styles=StyleSheet.create({
    calenderContainer:{
        backgroundColor: Colors.PRIMARY_LIGHT,
        padding: 20,
        borderRadius: 15
    },
    selectedTime:{

    },
    unselectedTime:{

    }
})