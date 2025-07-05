import {Colors} from "@/constants";
import { TextInput } from "@/styles/Themed";
import { useColorScheme } from "react-native";
import { styles } from "./styles";
import { useMemo } from "react";

type InputProps = {
  value: string;
  onChange: (text: string) => void;
}

export default function Input({value, onChange}: InputProps) {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? 'light'];
  const style = useMemo(() =>styles(themeColors), [themeColors]);
  return (
    <TextInput style={style.container} value={value} onChangeText={onChange} />
  )
}