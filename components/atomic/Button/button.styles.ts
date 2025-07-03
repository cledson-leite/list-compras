import { StyleSheet } from "react-native";

export const styles = (colors: any, type: string) =>StyleSheet.create({
  container: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors[`${type}Preenchimento`] || colors.principalPreenchimento,
    borderColor: colors[`${type}Borda`] || colors.principalBorda,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 6
  }
})