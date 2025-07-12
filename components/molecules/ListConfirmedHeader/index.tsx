import { View } from '@/styles/Themed'

import { memo, use, useEffect } from 'react'
import { useListConfirmed, useListPending } from '@/stores'
import ListHeaderInfo from '../ListHeaderInfo'

import { styles } from './styles'

function ListConfirmedHeader() {
  const {totalPrice, countConfirmed, getCountConfirmed, confirmeds} = useListConfirmed()
  const price = totalPrice / 100
  useEffect(() => {
    getCountConfirmed()
  }, [confirmeds])
  return (
    <View style={styles.container}>
      <ListHeaderInfo type='alertaBorda' title='Itens Restantes' value={countConfirmed | 0}/>
      <ListHeaderInfo type='sucessoBorda' title='Custo Estimado' value={price}/>
    </View>
  )
}

export default memo(ListConfirmedHeader)