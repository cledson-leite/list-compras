import { Text, TextProps } from "@/styles/Themed"
import { ReactNode } from "react"
import { styles } from "./typograph.styles"
import { useColorScheme } from "react-native"
import Colors from "@/constants/Colors"

type TypographProps = TextProps & {
  variant: 'title' | 'subtitle' | 'body'
  children: ReactNode
}
export default function Typograph({variant, children, ...rest}: TypographProps) {
  const colorScheme = useColorScheme();
    const style = styles(Colors[colorScheme ?? 'light']);
  return (
      <Text style={style[variant]} {...rest}>{children}</Text>
  )
}