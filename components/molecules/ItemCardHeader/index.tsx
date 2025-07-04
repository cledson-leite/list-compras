import { View } from '@/styles/Themed'

import { useEffect, useMemo, useState } from 'react'
import { useColorScheme } from 'react-native'
import {Colors} from "@/constants"
import Checkbox from '@/components/atomic/CheckBox'
import Typograph from '@/components/atomic/Typograph'

import { styles } from './styles'

type ItemCardHeaderProps = {
  title: string
}

export default function ItemCardHeader({title}: ItemCardHeaderProps) {
  const [checked, setChecked] = useState(false);
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? 'light'];
  const style = useMemo(() =>styles(themeColors), [themeColors]);
  useEffect(() => {
    if(checked) console.log('checked')
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