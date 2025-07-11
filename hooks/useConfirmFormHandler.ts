import { useState, useCallback } from "react";
import { Product } from "@/repositories/pending.respository";
import { useModal } from "@/stores";

export const useConfirmFormHandler = (product?: Product) => {
  const { onCloseConfirm } = useModal();
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

    const confirmProduct = {
      ...product,
      preco: Number(value),
    };

    console.log(confirmProduct);
    handleClose();
  }, [value, product, handleClose]);

  return {
    value,
    error,
    handleChange,
    handleSubmit,
    handleClose,
    clearError: () => setError(""),
  };
};
