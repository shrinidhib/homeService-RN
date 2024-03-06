import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Heading from '../../Components/Heading'
import PageHeading from '../../Components/PageHeading'
import GlobalApi from '../../Utils/GlobalApi'
import { useUser } from '@clerk/clerk-expo'
import BusinessListItem from '../BusinessListByCategoryScreen/BusinessListItem'

export default function BookingScreen() {
  const {user}=useUser()
  const [bookingList,setBookingList]=useState([])
  const [loading,setLoading]=useState(false)

  const getUserBookings=()=>{
    setLoading(true)
    GlobalApi.getUserBookings(user?.primaryEmailAddress.emailAddress).then(resp=>{
      setBookingList(resp.bookings)
      setLoading(false)
    })
  }

  useEffect(()=>{
    
    getUserBookings()
  },[])
  return (
    <View style={{paddingTop: 40, paddingLeft: 20}}> 
      <Text style={{fontFamily: 'outfit-medium', fontSize: 26}}>My Bookings</Text>
      <View>
        <FlatList 
        onRefresh={()=>getUserBookings()}
        refreshing={loading}
        data={bookingList}
        renderItem={({item,index})=>(
          
          <BusinessListItem business={item?.businessList} booking={item}/>
        )}
        />
      </View>
    </View>
  )
}