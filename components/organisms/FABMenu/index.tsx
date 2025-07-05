import { View } from "@/styles/Themed"

import { memo } from "react"
import { useSharedValue } from "react-native-reanimated"
import { FABAction } from "@/components/molecules/FABAction"
import { FABMain } from "@/components/molecules/FABMain"

import { styles } from "./styles"

function FABMenu() {
  const open = useSharedValue(false)
  const toggleMenu = () => {
    open.value = !open.value
  }
  return (
    <View style={[styles.container, { backgroundColor: 'transparent' }]}>
      <FABAction index={2} icon="camera" open={open} backgroundColor='sucessoBorda'/>
      <FABAction index={1} icon="image" open={open} backgroundColor='alertaBorda'/>
      <FABMain open={open} onToggle={toggleMenu} />
    </View>
  )
}
export default memo(FABMenu)