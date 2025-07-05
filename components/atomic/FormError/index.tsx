import React, { useMemo } from 'react'
import Typograph from '../Typograph'
import { useColorScheme } from 'react-native';
import {Colors} from "@/constants";
import { styles } from './styles';

type FormErrorProps = {
  error: boolean;
  message: string
}

export default function FormError({error, message}: FormErrorProps) {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? 'light'];
  const style = useMemo(() =>styles(themeColors), [themeColors]);
  return  error && <Typograph variant='body' style={style.container}>{message}</Typograph>
}