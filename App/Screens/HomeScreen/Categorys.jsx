import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading'

export default function Categorys() {
  const [categories,setCategories]=useState([])
  useEffect(()=>{
    getCategories()
  },[])
  const getCategories=()=>{
    GlobalApi.GetCategories().then(resp=>{
      setCategories(resp?.categories)
    })
  }
  
  return (
    <View style={{marginTop: 10}}>
      <Heading text={'Categories'} isViewAll={true}/>
    </View>
  )
}