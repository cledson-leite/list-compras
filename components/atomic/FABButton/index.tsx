import React, { ComponentProps } from 'react'
import { ViewStyle, Pressable, useColorScheme } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import Animated, { AnimatedStyle } from 'react-native-reanimated'
import {Colors} from "@/constants"
import { styles } from './styles'

type Props = {
  icon: ComponentProps<typeof FontAwesome>['name']
  size?: number
  style?: AnimatedStyle<ViewStyle>
  onPress?: () => void
  backgroundColor?: keyof typeof Colors.light
}

export const FABButton = ({ icon, size = 24, style, onPress, backgroundColor = 'secundarioBorda' }: Props) => {
  const colorScheme = useColorScheme()
  const styleRaw = styles(Colors[colorScheme ?? 'light'][backgroundColor])
  return (
    <Animated.View style={[styleRaw.container, style]}>
      <Pressable onPress={onPress}>
        <FontAwesome 
          name={icon} 
          size={size} 
          color="#fff" 
          style={icon === 'close' ? styleRaw.normal : styleRaw.rotate} 
        />
      </Pressable>
    </Animated.View>
  )
}
