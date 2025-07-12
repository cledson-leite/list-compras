import { useListConfirmed, useListPending, useModal } from "@/stores";
import { useCallback } from "react";

export const useFabButtonActions = () => {
  const {deleteAllConfirmed, getTotalPrice} = useListConfirmed()
  const { getPending } = useListPending();
  const { onOpen } = useModal();

  const handleAddProduct = useCallback(async () => {
    await getPending('');
    onOpen();
  }, [getPending, onOpen]);
  const handleFinishList= useCallback(async () => {
    await deleteAllConfirmed()
    await getTotalPrice()
  }, [deleteAllConfirmed, getTotalPrice]);

  return { handleAddProduct, handleFinishList };
};