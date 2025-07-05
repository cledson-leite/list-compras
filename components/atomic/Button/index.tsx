import { TouchableOpacity, useColorScheme } from "react-native";
import {Colors} from "@/constants";
import Typograph from "../Typograph";
import { styles } from "./styles";

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