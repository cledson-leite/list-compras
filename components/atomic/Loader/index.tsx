import { Colors } from "@/constants";
import { View } from "@/styles/Themed";
import { useColorScheme } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { styles } from "./styles";
import { useMemo } from "react";

type LoaderProps = {
  isLoading: boolean;
}

export const Loader = ({ isLoading }: LoaderProps) => {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? 'light'];
  const style = useMemo(() =>styles(themeColors), [themeColors]);
  if (!isLoading) return null;

  return (
    <View style={style.container}>
      <ActivityIndicator animating size={'large'} color={Colors[colorScheme ?? 'light'].principalPreenchimento} />
    </View>
  );
};