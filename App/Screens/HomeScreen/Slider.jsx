import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading'

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
      <Heading text={'Offers for You'}/>
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
  sliderImage:{
    width: 270,
    height: 150,
    borderRadius: 20,
    objectFit:'fill'
  }
})