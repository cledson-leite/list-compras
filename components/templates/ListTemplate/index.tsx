import ItemList from "@/components/organisms/ItemList";
import { View } from "@/styles/Themed";
import { styles } from "./listTemplate.styles";
import Header from "@/components/organisms/Header";
import { FABMenu } from "@/components/organisms/FABMenu";

export default function ListTemplate() {
  return (
    <View style={styles.container}>
      <Header />
      <ItemList />
      <FABMenu />
    </View>
  )
}