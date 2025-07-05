import { memo } from "react";
import { usePathname } from "expo-router";
import { useFabButtonActions } from "@/hooks/useFabButtonActions";
import { FABButton } from "@/components/atomic/FABButton";
import FABMenu from "../FABMenu";

import { styles } from "../FABMenu/styles"

function AppFab() {
  const pathname = usePathname();
  const { handleAddProduct } = useFabButtonActions()
  console.log(pathname)
  if (pathname === '/historico') {
    return <FABMenu />; 
  } else {
    return (
      <FABButton
        style={styles.container}
        icon='plus'
        onPress={handleAddProduct}
      />
    );
  }
}

export default memo(AppFab)