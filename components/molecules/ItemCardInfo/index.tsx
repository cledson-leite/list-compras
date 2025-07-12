import { View } from '@/styles/Themed'

import { useMemo } from 'react'
import { useColorScheme } from 'react-native'
import {Colors} from "@/constants"
import { FormatUnit } from '@/utils/formatUnit'
import Typograph from '@/components/atomic/Typograph'

import { styles } from './styles'
import { formatToBRL } from '@/utils/formatCurrency'

type ItemCardInfoProps = {
  categoria: string,
  unidade: string,
  quantidade: number,
  price?: number
}

export default function ItemCardInfo({categoria, unidade, quantidade, price}: ItemCardInfoProps) {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? 'light'];
  const style = useMemo(() =>styles(themeColors), [themeColors]);
  const totalPrice = price! * quantidade
  if(price) {
    return (
      <View style={style.container}>
        <Typograph variant='subtitle'>{FormatUnit(unidade, quantidade)}</Typograph>
        <Typograph variant='subtitle'>X</Typograph>
        <Typograph variant='subtitle'>{formatToBRL(price/100)}</Typograph>
        <Typograph variant='subtitle'>=</Typograph>
        <Typograph variant='subtitle'>{formatToBRL(totalPrice/100)}</Typograph>
      </View>
    )
  }
  return (
    <View style={style.container}>
      <Typograph variant='subtitle'>{categoria}</Typograph>
      <Typograph variant='subtitle'>{FormatUnit(unidade, quantidade)}</Typograph>
      <View />
    </View>
  )
}