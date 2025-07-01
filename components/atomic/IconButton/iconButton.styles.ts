import { StyleSheet } from "react-native";

export const styles = (colors: any, type: boolean) =>StyleSheet.create({
  container: {
    width: 35,
    height:35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  icon: {
    fontSize: 30,
    color: type ? colors.sucessoBorda : colors.alertaBorda 
  }
})