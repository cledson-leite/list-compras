import { FlatList, useColorScheme } from 'react-native'
import { useCallback } from 'react'
import ItemCard from '@/components/molecules/ItemCard';
import { LISTA } from '@/utils/lista';
import Colors from '@/constants/Colors';
import { styles } from './itemList.styles';
import { View } from '@/styles/Themed';

export default function ItemList() {
  const colorScheme = useColorScheme();
  const style = styles(Colors[colorScheme ?? 'light']);
  const renderItem = useCallback(({ item }: any) => (
      <ItemCard {...item} />
    ), [])
    return (
      <FlatList
        style={style.container}
        data={LISTA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
       />
    );
}