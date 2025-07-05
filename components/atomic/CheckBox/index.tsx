import {Checkbox as ExpoCheckbox} from 'expo-checkbox';
import {Colors} from "@/constants";
import { useColorScheme } from 'react-native';

type CheckboxProps = {
  value: boolean
  onValueChange: () => void
}

export default function Checkbox({value, onValueChange}: CheckboxProps) {
  const colorScheme = useColorScheme();
  return (
    <ExpoCheckbox
      value={value}
      onValueChange={onValueChange}
      color={Colors[colorScheme ?? 'light'].secundarioBorda}
    />
  )
}