import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading'
import Colors from '../../Utils/Colors'
import { useNavigation } from '@react-navigation/native'

export default function Categorys() {
  const [categories,setCategories]=useState([])
  const navigation=useNavigation()
  useEffect(()=>{
    getCategories()
  },[])
  const getCategories=()=>{
    GlobalApi.GetCategories().then(resp=>{
      setCategories(resp?.categories)
      console.log(categories)
    })
  }
  
  return (
    <View style={{marginTop: 10}}>
      <Heading text={'Categories'} isViewAll={true}/>
      <FlatList data={categories}
      numColumns={4}
      renderItem={({item,index})=>index<=3 && (
        <TouchableOpacity onPress={()=>navigation.push('business-list',{category: item.name})} style={styles.container}> 
          <View style={styles.iconContainer}>
            <Image source={{uri: item?.icon?.url}}
            style={{width: 30, height: 30}}/>
          </View>
          <Text style={{fontFamily: 'outfit-medium', marginTop: 5}}>{item?.name}</Text>
        </TouchableOpacity>
      )}/>
    </View>
  )
}

const styles=StyleSheet.create({
  iconContainer:{
    backgroundColor: Colors.LIGHT_GRAY,
    padding: 17,
    borderRadius: 99

  },
  container:{
    flex: 1,
    alignItems:'center',
    marginTop: 7
  }
})