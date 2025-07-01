import { Text, View } from '@/styles/Themed'
import { TouchableOpacity, useColorScheme } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { styles } from './iconButton.styles'
import Colors from '@/constants/Colors';
import { ComponentProps } from 'react';

type IconButtonProps = {
  icon: ComponentProps<typeof FontAwesome>['name']
}

export default function IconButton({icon}: IconButtonProps) {
  const isEdit = icon.startsWith('edit');
  const colorScheme = useColorScheme();
  const style = styles(Colors[colorScheme ?? 'light'], isEdit);
  return (
    <TouchableOpacity>
      <View style={style.container}>
        <FontAwesome style={style.icon} name={icon} />
      </View>
    </TouchableOpacity>
  )
}