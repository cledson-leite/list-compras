// components/molecules/FABAction.tsx
import { FABButton } from '@/components/atomic/FABButton'
import Colors from '@/constants/Colors'
import { FontAwesome } from '@expo/vector-icons'
import { ComponentProps } from 'react'
import { useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated'

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
