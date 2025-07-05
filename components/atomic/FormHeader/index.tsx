import { ReactNode, useMemo } from 'react'
import { useColorScheme } from 'react-native'
import { View } from '@/styles/Themed';
import Typograph from '../Typograph'
import {Colors} from "@/constants";
import { styles } from './styles';

export default function FormHeader({children}: {children: ReactNode}) {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? 'light'];
  const style = useMemo(() =>styles(themeColors), [themeColors]);
  return (
    <View style={style.container}>
        <Typograph variant='title'>{children}</Typograph>
      </View>
  )
}