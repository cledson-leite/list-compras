import { View } from "@/styles/Themed";

import ListHeader from "@/components/molecules/ListHeader";
import ItemsListContainer from "@/components/organisms/ItemsListContainer";
import CreateEditModal from "@/components/organisms/CreateEditModal";

import { styles } from "./styles"

export default function ListTemplate() {
  return (
    <View style={styles.container}>
      <ListHeader />
      <ItemsListContainer />
      <CreateEditModal />
    </View>
  )
}