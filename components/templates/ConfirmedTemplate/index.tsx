import { View } from "@/styles/Themed";

import ItemsListContainer from "@/components/organisms/ItemsListContainer";

import { styles } from "./confirmed.template.styles";
import { useListConfirmed } from "@/stores";
import { useEffect } from "react";
import ListConfirmedHeader from "@/components/molecules/ListConfirmedHeader";

export default function ConfirmedTemplate() {
  const {getAllConfirmed, confirmeds, loading} = useListConfirmed();
  useEffect(() => {
    getAllConfirmed()
  }, [])
  return (
    <View style={styles.container}>
      <ListConfirmedHeader />
      <ItemsListContainer list={confirmeds} loading={loading}/>
    </View>
  )
}