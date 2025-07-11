import { useState, useCallback } from "react";
import { useListConfirmed, useListPending, useModal } from "@/stores";
import { Product, Confirmed } from "@/DTO";

export const useConfirmFormHandler = (product: Product) => {
  const { onCloseConfirm } = useModal();
  const {addConfirmed} = useListConfirmed()
  const {deletePending} = useListPending()
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = useCallback((text: string) => setValue(text), []);
  const handleClose = useCallback(() => {
    setError('');
    onCloseConfirm();
  }, [onCloseConfirm]);

  const handleSubmit = useCallback(() => {
    if (!value) {
      setError("Preço obrigatório");
      return;
    }
    const confirmProduct: Confirmed = {
      ...product,
      id: product?.id!,
      price: Number(value),
    }
    addConfirmed(confirmProduct)
    deletePending(product?.id as string)
    
    handleClose()
  }, [value, product, addConfirmed, deletePending, handleClose]);

  return {
    value,
    error,
    handleChange,
    handleSubmit,
    handleClose,
    clearError: () => setError(""),
  };
};
