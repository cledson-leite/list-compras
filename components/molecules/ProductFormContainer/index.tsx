import { View } from "@/styles/Themed";

import { Product } from "@/repositories/pending.respository";
import { useProductFormHandler } from "@/hooks/useProductFormHandler";
import FormHeader from "@/components/atomic/FormHeader";
import Toast from "@/components/atomic/Toast";
import FieldsForm from "../FieldsForm";
import FormActions from "../FormActions";

import { styles } from "./styles";

type ProductFormContainerProps = {
  product?: Product;
}

export const ProductFormContainer = ({ product }: ProductFormContainerProps) => {
  const { control, onSubmit, onCancel, snackError, setSnackError } = useProductFormHandler(product);

  return (
    <View style={styles.container}>
      <FormHeader>Item de Compra</FormHeader>
      <FieldsForm control={control} />
      <FormActions onSubmit={onSubmit} onCancel={onCancel} />
      <Toast show={!!snackError} onClose={() => setSnackError('')} type='alerta' message={snackError} />
    </View>
  );
};