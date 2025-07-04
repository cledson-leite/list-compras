import Colors from '@/constants/Colors'
import { useColorScheme } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { styles } from './select.styles'
import { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'

type SelectProps = {
  value: string
  options: string[]
  onChange: (value: any) => void
}

export default function Select({value, onChange, options}: SelectProps) {
  const colorScheme = useColorScheme();
  const style = styles(Colors[colorScheme ?? 'light']);

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(options.map((option) => ({label: option, value: option})));
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={(callback) => {
        const valueRaw = callback(value)
        onChange(valueRaw)
      }}
      setItems={setItems}
      placeholder=""
      ArrowUpIconComponent={() => (
        <FontAwesome 
          name="chevron-up" 
          size={15} 
          color={Colors[colorScheme ?? 'light'].textoPrincipal} 
        />
      )}
      ArrowDownIconComponent={() => (
        <FontAwesome 
          name="chevron-down" 
          size={15} 
          color={Colors[colorScheme ?? 'light'].textoPrincipal} 
        />
      )}
      TickIconComponent={() => (
        <FontAwesome 
          name="check" 
          size={15} 
          color={Colors[colorScheme ?? 'light'].sucessoBorda} 
        />
      )}
      style={style.container}
      textStyle={style.text}
      dropDownContainerStyle={[style.container, style.option]}
    />
  )
}