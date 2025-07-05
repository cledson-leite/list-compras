import { ComponentProps } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated'
import {Colors} from "@/constants"
import { FABButton } from '@/components/atomic/FABButton'

type FABActionProps = {
  index: number
  icon: ComponentProps<typeof FontAwesome>['name']
  open: any
  backgroundColor?: keyof typeof Colors.light
}

export const FABAction = ({ index, icon, open, backgroundColor }: FABActionProps) => {
  const offset = 70 * index

  const style = useAnimatedStyle(() => ({
    transform: [{ translateY: withSpring(open.value ? -offset : 0) }],
    opacity: withTiming(open.value ? 1 : 0),
    position: 'absolute',
    bottom: 0,
  }))

  return <FABButton icon={icon} style={style} backgroundColor={backgroundColor} />
}
