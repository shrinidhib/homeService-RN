import { View, Text, Image } from 'react-native'
import React from 'react'
import Heading from '../../Components/Heading'
import { FlatList } from 'react-native-gesture-handler'

export default function BusinessPhotos({business}) {
  return (
    <View>
        <Heading text={'Images'}/>
        <FlatList data={business?.images}
        numColumns={2}
        
        renderItem={({item})=>(
            <Image source={{uri:item.url}} 
            style={{height: 120, width: '50%', flex: 1,
        borderRadius: 15, margin: 7}}/>
        )}/>
    </View>
  )
}