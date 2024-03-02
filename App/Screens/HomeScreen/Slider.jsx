import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'

export default function Slider() {
    const [sliders,setSliders]=useState([])
    useEffect(()=>{
        getSliders()
        console.log(sliders)
    },[])
    const getSliders=()=>{
        GlobalApi.getSlider().then(resp=>{
            console.log(resp)
            setSliders(resp?.sliders)
        })
    }
   
  return (
    <View>
      <Text style={styles.heading}>Offers for You</Text>
      <FlatList
      horizontal={true}
      data={sliders}
      showsHorizontalScrollIndicator={false}
      renderItem={({item,index})=>(
        <View style={{marginRight: 20}}>
          <Image source={{uri:item?.image?.url}}
          style={styles.sliderImage}/>
        </View>
      )
      }/>
    </View>
  )
}

const styles=StyleSheet.create({
  heading: {
    fontSize: 20,
    fontFamily: 'outfit-medium',
    marginBottom: 10
  },
  sliderImage:{
    width: 270,
    height: 150,
    borderRadius: 20,
    objectFit:'fill'
  }
})