import { View } from "@/styles/Themed";
import ItemCardHeader from "../ItemCardHeader";
import ItemCardInfo from "../ItemCardInfo";
import { useColorScheme } from "react-native";
import Colors from "@/constants/Colors";
import { styles } from "./itemCardContent.styles";
import { ItemCardProps } from "../ItemCard";
export default function ItemCardContent(props: ItemCardProps) {
  const colorScheme = useColorScheme();
  const style = styles(Colors[colorScheme ?? 'light']);
  return (
    <View style={style.container}>
      <ItemCardHeader  title={props.nome}/>
      <ItemCardInfo {...props} />
    </View>
  )
}