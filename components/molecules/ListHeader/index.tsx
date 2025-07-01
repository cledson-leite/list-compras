import { View } from '@/styles/Themed'
import ListHeaderInfo from '../ListHeaderInfo'
import { styles } from './listHeader.styles'

export default function ListHeader() {
  return (
    <View style={styles.container}>
      <ListHeaderInfo type='alertaBorda' title='Itens Restantes' value={10}/>
      <ListHeaderInfo type='sucessoBorda' title='Custo Estimado' value={10000}/>
    </View>
  )
}