import { useMemo } from 'react'
import { View, TextInput } from '@/styles/Themed'
import { useColorScheme } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Colors } from '@/constants'
import { styles } from './styles'

type SearchInputProps = {
  value: string
  onChange: (text: string) => void
  placeholder?: string
}

export default function SearchInput({ value, onChange, placeholder = 'Buscar...' }: SearchInputProps) {
  const colorScheme = useColorScheme()
  const themeColors = Colors[colorScheme ?? 'light']
  const style = useMemo(() => styles(themeColors), [themeColors])

  return (
    <View style={style.container}>
      <FontAwesome name="search" style={style.icon} />
      <TextInput
        style={style.input}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={themeColors.cinzaEscuro}
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="search"
      />
    </View>
  )
}

