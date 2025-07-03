import { Text, TextProps } from "@/styles/Themed"
import { ReactNode } from "react"
import { styles } from "./typograph.styles"
import { useColorScheme } from "react-native"
import Colors from "@/constants/Colors"

type TypographProps = TextProps & {
  variant: 'title' | 'subtitle' | 'body'
  type?: 'sucessoBorda' | 'alertaBorda'
  children: ReactNode
}
export default function Typograph({variant, type, children, ...rest}: TypographProps) {
  const color = type ?? 'textoPrincipal'
  const colorScheme = useColorScheme();
  const style = styles(Colors[colorScheme ?? 'light'][color]);
  return (
      <Text style={[style[variant], {textAlign: 'center'}]} {...rest}>{children}</Text>
  )
}