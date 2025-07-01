import { FABAction } from '@/components/molecules/FABAction'
import { FABMain } from '@/components/molecules/FABMain'
import { View, StyleSheet } from 'react-native'
import { useSharedValue } from 'react-native-reanimated'
import { usePathname } from 'expo-router'
import { FABButton } from '@/components/atomic/FABButton'
import { styles } from './FABMenu.styles'

export const FABMenu = () => {
  const pathname = usePathname()
  const open = useSharedValue(false)

  const toggleMenu = () => {
    open.value = !open.value
  }
  return pathname === '/historico'
      ? (
        <View style={styles.container}>
          <FABAction index={2} icon="camera" open={open} backgroundColor='sucessoBorda'/>
          <FABAction index={1} icon="image" open={open} backgroundColor='alertaBorda'/>
          <FABMain open={open} onToggle={toggleMenu} />
        </View>
  )
    : (<FABButton
          style={styles.container}
          icon='plus'
          onPress={() => {}}
        />)
}
