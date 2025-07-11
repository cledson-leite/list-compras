import {Colors} from "@/constants";
import { useColorScheme } from 'react-native';
import { styles } from '../Input/styles';
import { TextInput } from '@/styles/Themed';
import { formatToBRL } from "@/utils/formatCurrency";
import { number } from 'zod';

type InputCurrencyProps = {
  value: string
  onChange: (value: string) => void
}

export default function InputCurrency({value, onChange}: InputCurrencyProps) {
  const colorScheme = useColorScheme();
  const styleInput = styles(Colors[colorScheme ?? 'light']);
  const price = isNaN(Number(value)) ?  formatToBRL(0) : formatToBRL(Number(value)/100)
  const onChanceText = (value: string) => {
    let number = value.replace(/[^0-9]/g, '')
    if(number.startsWith('0')){
      number = number.slice(1)
    }
    onChange(number)
  }
  return (
    <TextInput
      style={[styleInput.container, {width: 235}]}
      value={price}
      onChangeText={onChanceText}
      keyboardType="numeric"
    />
  )
}