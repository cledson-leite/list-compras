import { View } from '@/styles/Themed'

import { memo } from 'react'
import { useListPending } from '@/stores'
import ListHeaderInfo from '../ListHeaderInfo'

import { styles } from './styles'

function ListHeader() {
  const {countList} = useListPending()
  return (
    <View style={styles.container}>
      <ListHeaderInfo type='alertaBorda' title='Itens Restantes' value={countList | 0}/>
      <ListHeaderInfo type='sucessoBorda' title='Custo Estimado' value={0}/>
    </View>
  )
}

export default memo(ListHeader)