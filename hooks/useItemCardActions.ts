import { useListPending, useModal } from "@/stores";
import { useCallback } from "react";

export const useItemCardActions = () => {
  const { getPending, deletePending } = useListPending();
  const { onOpen } = useModal();

  const handleEditClick = useCallback(async (id: string) => {
    await getPending(id); 
    onOpen();
  }, [getPending, onOpen]); 
  const handleDeleteClick = useCallback((id: string) => {
    deletePending(id);
  }, [deletePending]);

  return { handleEditClick, handleDeleteClick };
};