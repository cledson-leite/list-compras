import { Product } from "@/DTO";
import { useListConfirmed, useListPending, useModal } from "@/stores";
import { useCallback } from "react";

export const useItemCardActions = () => {
  const {
    deleteConfirmed, 
    getConfirmedById, 
    getCountConfirmed, 
    getTotalPrice,
    getAllConfirmed
  } = useListConfirmed()
  const { getPending, deletePending, addProduct, product } = useListPending();
  const { onOpen } = useModal();

  const handleEditClick = useCallback(async (id: string) => {
    await getPending(id)
    onOpen();
  }, [getPending, onOpen]); 
  const handleDeleteClick = useCallback((id: string) => {
    deletePending(id);
  }, [deletePending]);

  const handleDeleteConfirmedClick = useCallback(async (id: string) => {
    const result = await getConfirmedById(id)
    const product: Product = {
      nome: result?.nome,
      categoria: result?.categoria,
      unidade: result?.unidade,
      quantidade: result?.quantidade
    }
    await addProduct(product)
    await deleteConfirmed(id)
    await getCountConfirmed()
    await getTotalPrice()
    await getAllConfirmed()
  }, [deleteConfirmed, getPending, product, addProduct]);

  return { handleEditClick, handleDeleteClick, handleDeleteConfirmedClick };
};