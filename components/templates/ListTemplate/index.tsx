import { View } from "@/styles/Themed";

import ListHeader from "@/components/molecules/ListHeader";
import Search from "@/components/molecules/Search";
import ItemsListContainer from "@/components/organisms/ItemsListContainer";
import CreateEditModal from "@/components/organisms/CreateEditModal";

import { styles } from "./list.template.styles"
import ConfirmModal from "@/components/organisms/ConfirmModal";
import { useEffect, useMemo, useState } from "react";
import { useListPending } from "@/stores";

export default function ListTemplate() {
  const { list, loading, loadList } = useListPending();
  const [query, setQuery] = useState("");
  const filteredList = useMemo(() => {
    const normalize = (v: any) => String(v ?? '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
    const q = normalize(query.trim())
    if (!q) return list
    return list.filter((item) => normalize(item.nome).includes(q))
  }, [list, query]);
  useEffect(() => {
      loadList();
    }, []);
  return (
    <View style={styles.container}>
      <Search value={query} onChange={setQuery} />
      <ListHeader />
      <ItemsListContainer list={filteredList} loading={loading}/>
      <ConfirmModal />
      <CreateEditModal />
    </View>
  )
}
