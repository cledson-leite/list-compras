import { StyleSheet } from "react-native";

export const styles = (colors: any) =>StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    borderColor: colors.principalBorda,
    borderStyle: 'solid',
    borderWidth: 2,
    backgroundColor: colors.principalPreenchimento,
    borderRadius: 10,
    justifyContent: 'center',
    padding: 10
  },
  content: {
    flex: 2, 
    height: '100%', 
    justifyContent: 'space-between', 
    backgroundColor: colors.principalPreenchimento
  },
  rowTitle: {
    backgroundColor: colors.principalPreenchimento,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10
  },
  rowInfo: {
    backgroundColor: colors.principalPreenchimento,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  name: {
    fontSize: 28,
    color: colors.textoPrincipal,
  },
  info: {
    flex:1,
    fontSize: 18,
    color: colors.textoPrincipal,
  },
  actions: {
    flex: 1,
    width: 140,
    backgroundColor: 'red',
    marginLeft: 10
  }
})