import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function BusinessListItem({business}) {
    const navigator=useNavigation()
  return (
    <TouchableOpacity onPress={()=>navigator.push('business-details', {business: business})} style={styles.container}>
      <Image source={{uri:business?.images[0]?.url}} style={styles.image}/>
      <View style={styles.subContainer}>
        <Text style={{fontFamily: 'outfit', color: Colors.GRAY, fontSize: 15}}>{business.contactPerson}</Text>
        <Text style={{fontFamily:'outfit-bold', fontSize: 19}}>{business.name}</Text>
        <Text style={{fontFamily: 'outfit', color: Colors.GRAY, fontSize: 16}}><MaterialIcons name="location-pin"  size={20} color={Colors.PRIMARY} />{business.address}</Text>
      </View>
    </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
    image:{
        width: 100,
        height: 100,
        borderRadius: 15
    },
    container: {
        padding: 10,
        backgroundColor:Colors.WHITE,
        borderRadius: 15,
        marginVertical: 15,
        display: 'flex',
        flexDirection: 'row',
        gap: 10

    },
    subContainer:{
        display: 'flex',
        gap: 10,
    }
    
    
})