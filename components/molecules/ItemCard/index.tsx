import { useColorScheme } from 'react-native'
import { memo } from 'react';
import { View } from '@/styles/Themed';
import Colors from '@/constants/Colors';
import ItemCardContent from '../ItemCardContent';
import ItemCardActions from '../ItemCardActions';
import { styles } from './item-card.styles'

export type ItemCardProps = {
  id?: string,
  nome: string,
  categoria: string,
  unidade: 'quilo' | 'unidade',
  quantidade: number,
  preco?: number
}

function ItemCard(props: ItemCardProps) {
  const colorScheme = useColorScheme();
  const style = styles(Colors[colorScheme ?? 'light']);
  return (
    <View style={style.container}>
      <ItemCardContent {...props} />
      <ItemCardActions id={props.id || '1'} />
    </View>
  )
}

export default  memo(ItemCard);