import { View } from "@/styles/Themed";
import { styles } from "./listTemplate.styles";
import { FABMenu } from "@/components/organisms/FABMenu";
import CreateEditModal from "@/components/organisms/CreateEditModal";
import ItemsList from "@/components/organisms/ItemsList";
import ListHeader from "@/components/molecules/ListHeader";

export default function ListTemplate() {
  return (
    <View style={styles.container}>
      <ListHeader />
      <ItemsList />
      <FABMenu />
      <CreateEditModal />
    </View>
  )
}