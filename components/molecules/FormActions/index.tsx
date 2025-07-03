import Colors from '@/constants/Colors'
import { View } from '@/styles/Themed'
import { useColorScheme } from 'react-native'
import { styles } from './formActions.styles';
import Button from '@/components/atomic/Button';

type ActionsProps = {
  onSubmit: () => Promise<void>
  onCancel: () => void
}

export default function FormActions({onSubmit, onCancel}: ActionsProps) {
  const colorScheme = useColorScheme();
  const style = styles(Colors[colorScheme ?? 'light']);
  return (
    <View style={style.container}>
      <Button type='sucesso' onPress={onSubmit}>Salvar</Button>
      <Button type='alerta' onPress={onCancel}>Cancelar</Button>
    </View>
  )
}