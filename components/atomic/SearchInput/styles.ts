import { StyleSheet } from 'react-native'

export const styles = (colors: any) =>
  StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 3,
      borderRadius: 6,
      borderColor: colors.cinzaClaro,
      backgroundColor: colors.background,
      paddingHorizontal: 10,
      paddingVertical: 6,
      marginVertical: 6,
    },
    icon: {
      fontSize: 22,
      color: colors.cinzaEscuro,
      marginRight: 8,
    },
    input: {
      flex: 1,
      fontSize: 20,
      color: colors.textoPrincipal,
    },
  })

