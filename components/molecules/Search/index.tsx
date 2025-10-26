import { memo, useMemo } from 'react'
import { View } from '@/styles/Themed'
import { useColorScheme } from 'react-native'
import { Colors } from '@/constants'
import SearchInput from '@/components/atomic/SearchInput'
import { styles } from './styles'

type SearchProps = {
  value: string
  onChange: (text: string) => void
}

function Search({ value, onChange }: SearchProps) {
  const colorScheme = useColorScheme()
  const themeColors = Colors[colorScheme ?? 'light']
  const style = useMemo(() => styles(themeColors), [themeColors])

  return (
    <View style={style.container}>
      <SearchInput value={value} onChange={onChange} />
    </View>
  )
}

export default memo(Search)
