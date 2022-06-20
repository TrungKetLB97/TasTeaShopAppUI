import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../constants'

export default function VerticalTextButton({containerStyle, label, selected,
    onPress}) {
  return (
    <TouchableOpacity
        style={{
            alignItems: 'center',
            transform: [{ rotate: '-90deg' }],
            ...containerStyle
        }}
        onPress={onPress}
    >
      <Text
        style={{
            color: selected ? COLORS.white : COLORS.lightGreen,
            ...FONTS.body2,
            fontSize: 20
        }}
      > {label} </Text>
    </TouchableOpacity>
  )
}