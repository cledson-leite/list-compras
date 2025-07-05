import { StyleSheet } from "react-native";

export const styles = (colors: any) =>StyleSheet.create({
  container: {
    backgroundColor: colors,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  rotate : { 
    transform: [{ rotate: '0deg' }] 
  },
  normal: { 
    transform: [{ rotate: '45deg' }] 
}
});