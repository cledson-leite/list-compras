import { View } from '@/styles/Themed'

import { useEffect, useMemo, useState } from 'react'
import { useColorScheme } from 'react-native'
import {Colors} from "@/constants"
import Checkbox from '@/components/atomic/CheckBox'
import Typograph from '@/components/atomic/Typograph'

import { styles } from './styles'
import { useListPending, useModal } from '@/stores'
import { ItemCardProps } from '../ItemCard'

export default function ItemCardHeader(props: ItemCardProps) {
  const [checked, setChecked] = useState(false);
  const {onOpenConfirm} = useModal()
  const { getPending } = useListPending();
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? 'light'];
  const style = useMemo(() =>styles(themeColors), [themeColors]);
  const checkedAction = async () => {
    await getPending(props.id!)
    onOpenConfirm()
  }
  useEffect(() => {
    if(checked) {
      checkedAction()
    }
  }, [checked])
  return (
    <View style={style.container}>
      {!props.price && <Checkbox
        value={checked}
        onValueChange={() => setChecked(!checked)}
      />}
      <Typograph variant='title'>{props.nome}</Typograph>
    </View>
  )
}