import { useColorScheme } from 'react-native'
import { styles } from './item-card.styles'
import Colors from '@/constants/Colors';
import { FormatUnit } from '@/utils/formatUnit';
import { View } from '@/styles/Themed';
import Typograph from '@/components/atomic/Typograph';
import IconButton from '@/components/atomic/IconButton';
import Checkbox from '@/components/atomic/CheckBox';
import ItemCardHeader from '../ItemCardHeader';
import ItemCardInfo from '../ItemCardInfo';
import ItemCardContent from '../ItemCardContent';
import ItemCardActions from '../ItemCardActions';

export type ItemCardProps = {
  nome: string,
  categoria: string,
  unidade: 'quilo' | 'unidade',
  quantidade: number,
  preco?: number
}

export default function ItemCard(props: ItemCardProps) {
  const colorScheme = useColorScheme();
  const style = styles(Colors[colorScheme ?? 'light']);
  return (
    <View style={style.container}>
      <ItemCardContent {...props} />
      <ItemCardActions />
    </View>
  )
}