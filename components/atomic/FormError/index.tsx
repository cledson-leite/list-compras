import React from 'react'
import Typograph from '../Typograph'
import { useColorScheme } from 'react-native';
import Colors from '@/constants/Colors';
import { styles } from './formError.styles';

type FormErrorProps = {
  error: boolean;
  message: string
}

export default function FormError({error, message}: FormErrorProps) {
  const colorScheme = useColorScheme();
  const style = styles(Colors[colorScheme ?? 'light']);
  return  error && <Typograph variant='body' style={style.container}>{message}</Typograph>
}