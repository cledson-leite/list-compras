import Colors from "@/constants/Colors";
import { TextInput } from "@/styles/Themed";
import { useColorScheme } from "react-native";
import { styles } from "./input.styles";

type InputProps = {
  value: string;
  onChange: (text: string) => void;
}

export default function Input({value, onChange}: InputProps) {
  const colorScheme = useColorScheme();
  const style = styles(Colors[colorScheme ?? 'light']);
  return (
    <TextInput style={style.container} value={value} onChangeText={onChange} />
  )
}