import { StyleSheet } from "react-native";

export const styles = (colors: any) =>StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    borderColor: colors.principalBorda,
    borderStyle: 'solid',
    borderWidth: 2,
    backgroundColor: colors.principalPreenchimento,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
});