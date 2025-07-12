import { StyleSheet } from "react-native";

export const styles = (colors: any) =>StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 70,
    marginLeft: 20,
    backgroundColor: colors.principalPreenchimento,
  },
  confirmed: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
  },
});