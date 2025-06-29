import { Text, View } from '@/components/Themed';
import { styles } from '@/styles/Global.styles';
import { LISTA } from '@/utils/lista';
import { FlatList } from 'react-native';

export default function Lista() {
  return (
    <FlatList
      data={LISTA}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Text style={styles.title}>{item.nome}</Text>
          <Text style={styles.subtitle}>{item.categoria}</Text>
        </View>
      )}
     />
  );
}
{/* <View style={styles.container}>
      <Text style={styles.title}>Lista</Text>
    </View> */}