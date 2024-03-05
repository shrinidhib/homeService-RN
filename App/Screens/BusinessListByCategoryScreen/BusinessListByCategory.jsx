import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from 'react-native';
import GlobalApi from '../../Utils/GlobalApi';
import BusinessListItem from './BusinessListItem'
import Colors from '../../Utils/Colors';
import PageHeading from '../../Components/PageHeading';

export default function BusinessListByCategory() {
    const param=useRoute().params
    const navigation=useNavigation()
    const [businessList, setBusinessList]=useState([])
    useEffect(()=>{
        getBusinessByCategory()
    },[])

    const getBusinessByCategory=()=>{
        GlobalApi.getBusinessListByCategory(param.category).then(resp=>{
            setBusinessList(resp.businessLists)
        })
    }
  return (
    <View style={{padding: 20, paddingTop:30}}>
        <PageHeading title={param.category}/>
        {businessList?.length>0? <FlatList data={businessList}
        renderItem={({item,index})=>(
            <BusinessListItem business={item}/>
        )}/>:
        <Text style={{fontFamily:'outfit-medium', fontSize: 20, textAlign: 'center', marginTop: 20, color:Colors.GRAY }}>No Business Found</Text>
        }
    </View>
  )
}