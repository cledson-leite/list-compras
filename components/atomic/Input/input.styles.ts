import { StyleSheet } from "react-native";

export const styles = (colors: any) =>StyleSheet.create({
  container: {
    backgroundColor: colors.cinzaEscuro,
    borderWidth: 3,
    padding: 10,
    marginVertical: 6,
    borderRadius: 6,
    borderColor: colors.cinzaClaro,
    fontSize: 28,
    color: colors.textoPrincipal,
  },
});