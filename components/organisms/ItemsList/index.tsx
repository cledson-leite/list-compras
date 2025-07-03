import { FlatList, useColorScheme } from 'react-native'
import { Suspense, useCallback } from 'react'
import ItemCard from '@/components/molecules/ItemCard';
import { LISTA } from '@/utils/lista';
import Colors from '@/constants/Colors';
import { styles } from './itemList.styles';
import { View } from '@/styles/Themed';
import { ProgressBar } from 'react-native-paper';
import Typograph from '@/components/atomic/Typograph';

export default function ItemsList() {
  const list = LISTA;
  const colorScheme = useColorScheme();
  const style = styles(Colors[colorScheme ?? 'light']);
  if (list.length === 0) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}}>
        <Typograph variant='title'>Nenhum item adicionado ainda.</Typograph>
        <Typograph variant='subtitle'>Toque no botão “+” para criar seu primeiro produto!</Typograph>
      </View>
    )
  }
  const renderItem = useCallback(({ item }: any) => (
      <ItemCard {...item} />
    ), [])
    return (
      <Suspense fallback={<ProgressBar color={Colors[colorScheme ?? 'light'].principalPreenchimento} />}>
        <FlatList
          style={style.container}
          data={list}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        />
      </Suspense>
    );
}