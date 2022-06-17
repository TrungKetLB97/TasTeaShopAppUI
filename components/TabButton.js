import { View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../constants'

export default function TabButton({containerStyle, label, selected, onPress}) {
  return (
    <TouchableOpacity
        style={{
            alignItems: 'center',
            ...containerStyle
        }}
        onPress={onPress}
    >
    {/* text */}
    <Text
        style={{
            color: selected ? COLORS.primary : COLORS.gray,
            ...FONTS.body2,
            fontSize: 18
        }}
    >
        {label}
    </Text>

    {/* Line */}
    <View
        style={{
            marginTop: selected ? 3 : 4,
            height: selected ? 4 : 2,
            width: "100%",
            backgroundColor: selected ? COLORS.primary : COLORS.gray
        }}
    >

    </View>


    </TouchableOpacity>
  )
}