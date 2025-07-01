import ItemList from "@/components/organisms/ItemList";
import { View } from "@/styles/Themed";
import { styles } from "./listTemplate.styles";

export default function ListTemplate() {
  return (
    <View style={styles.container}>
      <ItemList />
    </View>
  )
}