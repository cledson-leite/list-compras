import { View } from '@/styles/Themed'

import { useEffect, useMemo, useState } from 'react'
import { useColorScheme } from 'react-native'
import {Colors} from "@/constants"
import Checkbox from '@/components/atomic/CheckBox'
import Typograph from '@/components/atomic/Typograph'

import { styles } from './styles'
import { useListPending, useModal } from '@/stores'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry'

type ItemCardHeaderProps = {
  title: string
  id: string
}

export default function ItemCardHeader({title, id}: ItemCardHeaderProps) {
  const [checked, setChecked] = useState(false);
  const {onOpenConfirm} = useModal()
  const { getPending } = useListPending();
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? 'light'];
  const style = useMemo(() =>styles(themeColors), [themeColors]);
  const checkedAction = async () => {
    await getPending(id)
    onOpenConfirm()
  }
  useEffect(() => {
    if(checked) {
      checkedAction()
    }
  }, [checked])
  return (
    <View style={style.container}>
      <Checkbox
        value={checked}
        onValueChange={() => setChecked(!checked)}
      />
      <Typograph variant='title'>{title}</Typograph>
    </View>
  )
}