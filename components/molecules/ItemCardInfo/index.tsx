import { View } from '@/styles/Themed'

import { useMemo } from 'react'
import { useColorScheme } from 'react-native'
import {Colors} from "@/constants"
import { FormatUnit } from '@/utils/formatUnit'
import Typograph from '@/components/atomic/Typograph'

import { styles } from './styles'

type ItemCardInfoProps = {
  categoria: string,
  unidade: string,
  quantidade: number,
  preco?: number
}

export default function ItemCardInfo({categoria, unidade, quantidade, preco}: ItemCardInfoProps) {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? 'light'];
  const style = useMemo(() =>styles(themeColors), [themeColors]);
  return (
    <View style={style.container}>
      <Typograph variant='subtitle'>{categoria}</Typograph>
      <Typograph variant='subtitle'>{FormatUnit(unidade, quantidade)}</Typograph>
      {preco ? <Typograph variant='subtitle'>{preco}</Typograph> : <View />}
    </View>
  )
}