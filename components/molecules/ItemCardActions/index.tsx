import { View } from "@/styles/Themed";

import { memo, useMemo } from "react";
import { useColorScheme } from "react-native";
import { useItemCardActions } from "@/hooks/useItemCardActions";
import { Colors } from "@/constants";
import IconButton from "@/components/atomic/IconButton";

import { styles } from "./styles";

function ItemCardActions({ id, isConfirmed}: { id: string, isConfirmed: boolean }) {
  const { handleEditClick, handleDeleteClick, handleDeleteConfirmedClick } = useItemCardActions()
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? 'light'];
  const style = useMemo(() =>styles(themeColors), [themeColors]);

  if (isConfirmed) {
    return (
      <View style={[style.container, style.confirmed]}>
        <IconButton icon='trash-o' onClick={() => handleDeleteConfirmedClick(id)} />
      </View>
    );
  }

  return (
    <View style={style.container}>
      <IconButton icon='edit' onClick={() => handleEditClick(id)} />
      <IconButton icon='trash-o' onClick={() => handleDeleteClick(id)} />
    </View>
  );
}

export default memo(ItemCardActions)