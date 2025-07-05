import {Colors} from "@/constants";
import { useColorScheme } from "react-native";
import { Snackbar } from "react-native-paper";
import { styles } from "./styles";

type ToastProps = {
  show: boolean
  message: string
  onClose: () => void
  type: 'alerta' | 'sucesso'
}

export default function Toast({show, onClose, type, message}: ToastProps) {
  const colorScheme = useColorScheme();
  const style = styles(Colors[colorScheme ?? 'light'], type === 'alerta');
  return (
    <Snackbar
        style={style.snackbar}
        visible={show} 
        onDismiss={onClose}
        duration={1000}
      >
        {message}
      </Snackbar>
  )
}