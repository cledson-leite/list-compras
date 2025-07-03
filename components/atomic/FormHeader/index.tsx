import { ReactNode } from 'react'
import { useColorScheme } from 'react-native'
import { View } from '@/styles/Themed';
import Typograph from '../Typograph'
import Colors from '@/constants/Colors';
import { styles } from './formHeader.styles';

export default function FormHeader({children}: {children: ReactNode}) {
  const colorScheme = useColorScheme();
  const style = styles(Colors[colorScheme ?? 'light']);
  return (
    <View style={style.container}>
        <Typograph variant='title'>{children}</Typograph>
      </View>
  )
}