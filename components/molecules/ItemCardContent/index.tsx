import { View } from "@/styles/Themed";

import { useMemo } from "react";
import { useColorScheme } from "react-native";
import {Colors} from "@/constants";
import ItemCardHeader from "../ItemCardHeader";
import ItemCardInfo from "../ItemCardInfo";
import { ItemCardProps } from "../ItemCard";

import { styles } from "./styles";

export default function ItemCardContent(props: ItemCardProps) {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? 'light'];
  const style = useMemo(() =>styles(themeColors), [themeColors]);
  return (
    <View style={style.container}>
      <ItemCardHeader  {...props} />
      <ItemCardInfo {...props} />
    </View>
  )
}