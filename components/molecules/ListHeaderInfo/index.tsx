import 'intl'
import 'intl/locale-data/jsonp/pt-BR'


import { View } from "@/styles/Themed";

import { formatToBRL } from '@/utils/formatCurrency';
import Typograph from "@/components/atomic/Typograph";

import { styles } from "./styles";

type ListHeaderInfoProps = {
  type: 'sucessoBorda' | 'alertaBorda'
  title: string
  value: number
}
export default function ListHeaderInfo({type, title, value}: ListHeaderInfoProps) {
  const valeuRaw = type === 'sucessoBorda' ? formatToBRL(value) : value;
  return (
    <View style={styles.container}>
      <Typograph variant='body' type={type}>{title}</Typograph>
      <Typograph variant='title' type={type}>{valeuRaw}</Typograph>
    </View>
  )
}