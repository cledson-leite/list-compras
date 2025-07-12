import { useColorScheme } from 'react-native'
import { memo, useMemo } from 'react';
import { View } from '@/styles/Themed';
import {Colors} from "@/constants";
import ItemCardContent from '../ItemCardContent';
import ItemCardActions from '../ItemCardActions';

import { styles } from './styles'

export type ItemCardProps = {
  id?: string,
  nome: string,
  categoria: string,
  unidade: string,
  quantidade: number,
  price?: number
}

function ItemCard(props: ItemCardProps) {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? 'light'];
  const style = useMemo(() =>styles(themeColors), [themeColors]);
  return (
    <View style={style.container}>
      <ItemCardContent {...props} />
      <ItemCardActions id={props.id!} isConfirmed={!!props.price}/>
    </View>
  )
}

export default  memo(ItemCard);