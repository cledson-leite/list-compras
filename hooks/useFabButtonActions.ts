import { useListPending, useModal } from "@/stores";
import { useCallback } from "react";

export const useFabButtonActions = () => {
  const { getPending } = useListPending();
  const { onOpen } = useModal();

  const handleAddProduct = useCallback(async () => {
    await getPending('');
    onOpen();
  }, [getPending, onOpen]);

  return { handleAddProduct };
};