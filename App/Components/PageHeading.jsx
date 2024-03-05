import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function PageHeading({title}) {
    const navigation=useNavigation()
  return (
    <TouchableOpacity onPress={()=>navigation.goBack()} style={{display: 'flex', flexDirection: 'row', gap: 10,
        alignItems: 'center'
            }}>
            <Ionicons name="arrow-back" size={30} color="black" />
            <Text style={{fontSize: 25, fontFamily: 'outfit-medium'}}>{title}</Text>
    </TouchableOpacity>
  )
}