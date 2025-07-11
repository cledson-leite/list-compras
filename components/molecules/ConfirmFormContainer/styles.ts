import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { 
    paddingHorizontal: 20, 
    paddingBottom: 30, 
    paddingTop: 10, 
  },
  name: {
    alignItems: 'flex-start'
  },
  subtitle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginVertical: 10
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 20,
    marginTop: 10
  }
})