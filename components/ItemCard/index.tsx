import { useColorScheme } from 'react-native'
import { styles } from './item-card.styles'
import Colors from '@/constants/Colors';
import { Text, View } from '../Themed';
import Checkbox from 'expo-checkbox';
import { FormatUnit } from '@/utils/formatUnit';

type ItemCardProps = {
  nome: string,
  categoria: string,
  unidade: 'quilo' | 'litro' | 'unidade',
  quantidade: number,
  preco?: number
}

export default function ItemCard({nome, categoria, unidade, quantidade}: ItemCardProps) {
  const colorScheme = useColorScheme();
  const style = styles(Colors[colorScheme ?? 'light']);
  return (
    <View style={style.container}>
      <View style={{flex: 2, height: '100%', justifyContent: 'space-between', backgroundColor: Colors[colorScheme ?? 'light'].principalPreenchimento}}>
        <View style={style.rowTitle}>
          <Checkbox
            value={true}
            onValueChange={() => {}}
            color={Colors[colorScheme ?? 'light'].secundarioBorda}
          />
          <Text  style={style.name}>{nome}</Text>
        </View>
        <View style={style.rowInfo}>
          <Text  style={style.info}>{categoria}</Text>
          <Text  style={style.info}>{FormatUnit(unidade, quantidade)}</Text>
          <View style={{flex:1, backgroundColor: Colors[colorScheme ?? 'light'].principalPreenchimento}} />
        </View>
      </View>
      <View style={style.actions}>
        <Text>Teste</Text>
      </View>
    </View>
  )
}