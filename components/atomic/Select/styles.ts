import { StyleSheet } from "react-native";

export const styles = (colors: any) =>StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    borderWidth: 3,
    borderRadius: 6,
    borderColor: colors.cinzaClaro,
    height: 50,
    width: 170,
  },
  option: {
    backgroundColor: colors.background,
    height: 200,
    marginTop: 10,
  },
  text: {
    fontFamily: 'GochiHand',
    fontSize: 28,
    color: colors.textoPrincipal
  }
});