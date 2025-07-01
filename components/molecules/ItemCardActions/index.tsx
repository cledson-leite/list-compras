import IconButton from "@/components/atomic/IconButton";
import { View } from "@/styles/Themed";
import Colors from "@/constants/Colors";
import { useColorScheme } from "react-native";
import { styles } from "./itemCardActions.styles";

export default function ItemCardActions() {
  const colorScheme = useColorScheme();
    const style = styles(Colors[colorScheme ?? 'light']);
  return (
    <View style={style.container}>
      <IconButton icon='edit' />
      <IconButton icon='trash-o' />
    </View>
  )
}