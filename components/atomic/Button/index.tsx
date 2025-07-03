import { Text } from "@/styles/Themed";
import { TouchableOpacity, useColorScheme } from "react-native";
import Colors from "@/constants/Colors";
import { styles } from "./button.styles";
import Typograph from "../Typograph";

type ButtonProps = {
  onPress: () => void
  type: 'sucesso' | 'alerta' | 'principal'
  children: React.ReactNode
}

export default function Button({children, type, onPress}: ButtonProps) {
  const colorScheme = useColorScheme();
  const style = styles(Colors[colorScheme ?? 'light'], type);
  return (
    <TouchableOpacity style={style.container} onPress={onPress}>
      <Typograph variant='body'>{children}</Typograph>
    </TouchableOpacity>
  )
}