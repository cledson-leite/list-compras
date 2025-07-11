import { schema } from "@/constants";
import { Product } from "@/repositories/pending.respository";
import { useListPending, useModal } from "@/stores";
import { getProductFormDefaultValues, mapFormDataToProduct } from "@/utils/productFormUtils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

type FormData = z.input<typeof schema>;

export const useProductFormHandler = (product?: Product) => {
  const { onClose, onCloseConfirm} = useModal();
  const { addProduct, uptadePending, loading } = useListPending();
  const [snackError, setSnackError] = useState('');

  const { control, handleSubmit, reset } = useForm<FormData>({
    resolver: zodResolver(schema, undefined, {raw: true}),
    defaultValues: getProductFormDefaultValues(product),
  });

  useEffect(() => {
    reset(getProductFormDefaultValues(product));
  }, [product, reset]);

  const onSubmit = handleSubmit(
    async (data) => {
      const newProduct = mapFormDataToProduct(data, product);
      if (product?.id) {
        uptadePending(newProduct);
      } else {
        addProduct(newProduct);
      }
      reset();
      onClose();
      onCloseConfirm();
    },
    (errors) => {
      const message = Object.values(errors)[0]?.message;
      if (message) setSnackError(message);
    }
  );

  const onCancel = () => {
    reset();
    setSnackError('');
    onCloseConfirm();
    onClose();
  };

  return {
    control,
    onSubmit,
    onCancel,
    snackError,
    setSnackError,
    loading,
  };
};