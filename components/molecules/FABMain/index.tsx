import { FABButton } from '@/components/atomic/FABButton'
import { useAnimatedStyle, withTiming, useAnimatedReaction, runOnJS, SharedValue } from 'react-native-reanimated'
import { useState } from 'react'

type Props = {
  open: SharedValue<boolean>
  onToggle: () => void
}

export const FABMain = ({ open, onToggle }: Props) => {
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
