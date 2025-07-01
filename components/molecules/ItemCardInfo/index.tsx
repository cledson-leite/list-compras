import { useColorScheme } from 'react-native'
import { View } from '@/styles/Themed'
import Typograph from '@/components/atomic/Typograph'
import Colors from '@/constants/Colors'
import { styles } from './itemCardInfo.styles'
import { FormatUnit } from '@/utils/formatUnit'

type ItemCardInfoProps = {
  categoria: string,
  unidade: 'quilo' | 'unidade',
  quantidade: number,
  preco?: number
}

export default function ItemCardInfo({categoria, unidade, quantidade, preco}: ItemCardInfoProps) {
  const colorScheme = useColorScheme();
  const style = styles(Colors[colorScheme ?? 'light']);
  return (
    <View style={style.container}>
      <Typograph variant='subtitle'>{categoria}</Typograph>
      <Typograph variant='subtitle'>{FormatUnit(unidade, quantidade)}</Typograph>
      {preco ? <Typograph variant='subtitle'>{preco}</Typograph> : <View />}
    </View>
  )
}