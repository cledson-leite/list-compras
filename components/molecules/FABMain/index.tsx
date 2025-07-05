import { useState } from 'react'
import { 
  useAnimatedStyle, 
  withTiming, 
  useAnimatedReaction, 
  runOnJS, 
  SharedValue 
} from 'react-native-reanimated'
import { FABButton } from '@/components/atomic/FABButton'

type FABProps = {
  open: SharedValue<boolean>
  onToggle: () => void
}

export const FABMain = ({ open, onToggle }: FABProps) => {
  const [isOpen, setIsOpen] = useState(false)

  useAnimatedReaction(
    () => open.value,
    (value, prev) => {
      if (value !== prev) {
        runOnJS(setIsOpen)(value)
      }
    },
    []
  )

  const rotate = useAnimatedStyle(() => ({
    transform: [{ rotate: withTiming(open.value ? '45deg' : '0deg') }],
  }))

  return (
    <FABButton
      icon={isOpen ? 'close' : 'bars'}
      style={rotate}
      onPress={onToggle}
    />
  )
}
