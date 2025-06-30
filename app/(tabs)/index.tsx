import ItemCard from '@/components/ItemCard';
import { Text, View } from '@/components/Themed';
import { styles } from '@/styles/Global.styles';
import { LISTA } from '@/utils/lista';
import { useCallback } from 'react';
import { FlatList } from 'react-native';

export default function Lista() {
  const renderItem = useCallback(({ item }: any) => (
    <ItemCard {...item} />
  ), [])
  return (
    <View style={styles.container}>
    <FlatList
    style={{width: '100%', paddingHorizontal: 10}}
      data={LISTA}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
     />
     </View>
  );
}