import IconButton from "@/components/atomic/IconButton";
import { View } from "@/styles/Themed";
import Colors from "@/constants/Colors";
import { useColorScheme } from "react-native";
import { styles } from "./itemCardActions.styles";
import { useModal } from "@/stores/useModal";

export default function ItemCardActions({id}: {id: string}) {
  const {sendId, onOpen} = useModal();
  const colorScheme = useColorScheme();
  const style = styles(Colors[colorScheme ?? 'light']);

  const onClick = () => {
    sendId(id)
    onOpen()
  }
  return (
    <View style={style.container}>
      <IconButton icon='edit' onClick={onClick} />
      <IconButton icon='trash-o' onClick={() => {}} />
    </View>
  )
}