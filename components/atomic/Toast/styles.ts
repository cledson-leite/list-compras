import { StyleSheet } from "react-native";

export const styles = (colors: any, type: boolean) =>StyleSheet.create({
  container: {
    // position: 'absolute',
    // top: 50,
    // right: 16,
    // zIndex: 999,
    // width: 'auto',
    // maxWidth: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  snackbar: {
    backgroundColor: type ? colors.alertaPreenchimento : colors.sucessoPreenchimento,
    borderColor: type ? colors.alertaBorda : colors.sucessoBorda,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
  }
});