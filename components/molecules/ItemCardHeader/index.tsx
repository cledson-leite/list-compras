import Checkbox from '@/components/atomic/CheckBox'
import Typograph from '@/components/atomic/Typograph'
import { View } from '@/styles/Themed'
import { useColorScheme } from 'react-native'
import Colors from '@/constants/Colors'
import { styles } from './itemCardHeader.styles'

type ItemCardHeaderProps = {
  title: string
}

export default function ItemCardHeader({title}: ItemCardHeaderProps) {
  const colorScheme = useColorScheme();
  const style = styles(Colors[colorScheme ?? 'light']);
  return (
    <View style={style.container}>
      <Checkbox
        value={true}
        onValueChange={() => {}}
      />
      <Typograph variant='title'>{title}</Typograph>
    </View>
  )
}