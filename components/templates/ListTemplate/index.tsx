import { View } from "@/styles/Themed";

import ListHeader from "@/components/molecules/ListHeader";
import ItemsListContainer from "@/components/organisms/ItemsListContainer";
import CreateEditModal from "@/components/organisms/CreateEditModal";

import { styles } from "./list.template.styles"
import ConfirmModal from "@/components/organisms/ConfirmModal";
import { useEffect } from "react";
import { useListPending } from "@/stores";

export default function ListTemplate() {
  const { list, loading, loadList } = useListPending();
  useEffect(() => {
      loadList();
    }, []);
  return (
    <View style={styles.container}>
      <ListHeader />
      <ItemsListContainer list={list} loading={loading}/>
      <ConfirmModal />
      <CreateEditModal />
    </View>
  )
}