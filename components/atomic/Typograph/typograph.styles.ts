import { StyleSheet } from "react-native";

export const styles =  (colors: any) =>StyleSheet.create({
  title: {
    fontSize: 32,
    color: colors.textoPrincipal
  },
  subtitle: {
    fontSize: 20,
    color: colors.textoPrincipal
  },
  body: {
    fontSize: 16,
    color: colors.textoPrincipal
  },
});