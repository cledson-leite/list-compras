import { Text, TextProps } from "@/styles/Themed"
import { ReactNode } from "react"
import { styles } from "./styles"
import { useColorScheme, Text as DefaultText} from "react-native"
import {Colors} from "@/constants"

type TypographProps = TextProps & {
  variant: 'title' | 'subtitle' | 'body'
  type?: 'sucessoBorda' | 'alertaBorda'
  children: ReactNode
}
export default function Typograph({variant, type, children, style, ...rest}: TypographProps & DefaultText['props']) {
  const color = type ?? 'textoPrincipal'
  const colorScheme = useColorScheme();
  const defaultStyle = styles(Colors[colorScheme ?? 'light'][color]);
  return (
      <Text style={[defaultStyle[variant], {textAlign: 'center'}, style]} {...rest}>{children}</Text>
  )
}