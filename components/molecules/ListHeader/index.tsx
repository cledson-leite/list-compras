import { View } from '@/styles/Themed'

import { memo, use, useEffect } from 'react'
import { useListConfirmed, useListPending } from '@/stores'
import ListHeaderInfo from '../ListHeaderInfo'

import { styles } from './styles'

function ListHeader() {
  const {countList} = useListPending()
  const {totalPrice, getTotalPrice} = useListConfirmed()
  useEffect(() => {
    getTotalPrice()
  })
  const price = totalPrice / 100
  return (
    <View style={styles.container}>
      <ListHeaderInfo type='alertaBorda' title='Itens Restantes' value={countList | 0}/>
      <ListHeaderInfo type='sucessoBorda' title='Custo Estimado' value={price}/>
    </View>
  )
}

export default memo(ListHeader)