import { View } from "@/styles/Themed";

import { memo } from "react";
import { FlatList } from "react-native";
import ItemCard from "@/components/molecules/ItemCard";

import { styles } from "./styles";
import { Confirmed, Product } from "@/DTO";

type ItemsListProps = {
  list: Product[] | Confirmed[]; 
}

function ItemsList({ list }: ItemsListProps) {

  return (
    <FlatList
      style={styles.container}
      data={list}
      keyExtractor={(item) => item.id!.toString()}
      renderItem={({ item }) => <ItemCard {...item} />}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      extraData={list}
    />
  );
}

export default memo(ItemsList);