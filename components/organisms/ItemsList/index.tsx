import { View } from "@/styles/Themed";

import { memo } from "react";
import { FlatList } from "react-native";
import { Product } from "@/repositories/pending.respository";
import ItemCard from "@/components/molecules/ItemCard";

import { styles } from "./styles";

type ItemsListProps = {
  list: Product[]; 
}

function ItemsList({ list }: ItemsListProps) {

  return (
    <FlatList
      style={styles.container}
      data={list}
      keyExtractor={(item) => item._id!.toString()}
      renderItem={({ item }) => <ItemCard {...item} />}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      extraData={list}
    />
  );
}

export default memo(ItemsList);