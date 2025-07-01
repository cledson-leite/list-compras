import 'intl'
import 'intl/locale-data/jsonp/pt-BR'


import Typograph from "@/components/atomic/Typograph";
import Colors from "@/constants/Colors";
import { View } from "@/styles/Themed";
import { useColorScheme } from "react-native";
import { styles } from "./listHeaderInfo.styles";

type ListHeaderInfoProps = {
  type: 'sucessoBorda' | 'alertaBorda'
  title: string
  value: number
}
export default function ListHeaderInfo({type, title, value}: ListHeaderInfoProps) {
  const valeuRaw = type === 'sucessoBorda' ? value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }) : value;
  return (
    <View style={styles.container}>
      <Typograph variant='body' type={type}>{title}</Typograph>
      <Typograph variant='title' type={type}>{valeuRaw}</Typograph>
    </View>
  )
}