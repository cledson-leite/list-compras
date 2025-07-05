import {Colors} from "@/constants";
import React from 'react'
import { useColorScheme } from 'react-native';
import { styles } from '../Input/styles';
import { TextInput } from '@/styles/Themed';

type InputNumberProps = {
  value: string
  onChange: (value: string) => void
}

export default function InputNumber({value, onChange}: InputNumberProps) {
  const colorScheme = useColorScheme();
  const styleInput = styles(Colors[colorScheme ?? 'light']);
  return (
    <TextInput
      style={[styleInput.container, {width: 100}]}
      value={value || '0'}
      onChangeText={onChange}
      keyboardType="numeric"
    />
  )
}