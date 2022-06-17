import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS } from "../constants";

export default function IconButton({containerStyle, iconStyle, icon, onPress}) {
  return (
    <TouchableOpacity
        style={{
            alignItems: 'center',
            justifyContent: 'center',
            ...containerStyle
        }}
        onPress={onPress}
    >
        <Image 
            source={icon}
            resizeMode="contain"
            style={{
                width: 25,
                height: 25,
                tintColor: COLORS.white,
                ...iconStyle
            }}
        />
    </TouchableOpacity>
  )
}