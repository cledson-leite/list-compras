import { View } from '@/styles/Themed'

import { useMemo } from "react";
import { useColorScheme } from 'react-native'
import {Colors} from "@/constants"
import Button from '@/components/atomic/Button';

import { styles } from './styles';

type ActionsProps = {
  onSubmit: () => Promise<void>
  onCancel: () => void
}

export default function FormActions({onSubmit, onCancel}: ActionsProps) {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? 'light'];
  const style = useMemo(() =>styles(themeColors), [themeColors]);
  return (
    <View style={style.container}>
      <Button type='sucesso' onPress={onSubmit}>Salvar</Button>
      <Button type='alerta' onPress={onCancel}>Cancelar</Button>
    </View>
  )
}