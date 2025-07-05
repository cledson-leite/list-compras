import { StyleSheet } from "react-native";

export const styles = (colors: any) =>StyleSheet.create({
  container: {
    backgroundColor: colors.principalPreenchimento,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10
  },
});