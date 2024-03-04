import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Heading from '../../Components/Heading'
import BusinessListItemSmall from './BusinessListItemSmall'
import GlobalApi from '../../Utils/GlobalApi'

export default function BusinessList() {
  const [BusinessList,setBusinessList]=useState([])
  useEffect(()=>{
    getBusinessList()
  },[]) 

  const getBusinessList=()=>{
    GlobalApi.getBusinessList().then(resp=>{
      console.log(resp)
      setBusinessList(resp.businessLists)
    })
  }
  return (
    <View style={{marginTop: 10}}>
      <Heading text={'Latest Businesses'} isViewAll={true}/>
      <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={BusinessList}
      renderItem={({item,index})=>(
        <View style={{marginRight: 10}}>
          <BusinessListItemSmall business={item}/>
        </View>
  )}/>
    </View>
  )
}