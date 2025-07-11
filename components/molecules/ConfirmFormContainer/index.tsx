import { useColorScheme } from "react-native";
import { View } from "@/styles/Themed";
import { styles } from "./styles";
import { Colors } from "@/constants";

import { Product } from "@/repositories/pending.respository";
import { FormatUnit } from "@/utils/formatUnit";
import { useConfirmFormHandler } from "@/hooks/useConfirmFormHandler";
import FormHeader from "@/components/atomic/FormHeader";
import Typograph from "@/components/atomic/Typograph";
import Label from "@/components/atomic/Label";
import InputCurrency from "@/components/atomic/InputCurrency";
import Button from "@/components/atomic/Button";
import Toast from "@/components/atomic/Toast";

type Props = {
  product?: Product;
};

export const ConfirmFormContainer = ({ product }: Props) => {
  const colorScheme = useColorScheme();
  const {
    value,
    error,
    handleChange,
    handleSubmit,
    handleClose,
    clearError,
  } = useConfirmFormHandler(product);

  return (
    <View style={styles.container}>
      <FormHeader>Confirmar Produto</FormHeader>

      <Typograph
        variant="title"
        style={{ color: Colors[colorScheme ?? "light"].secundarioBorda }}
      >
        {product?.nome}
      </Typograph>

      <View style={styles.subtitle}>
        <Typograph variant="subtitle">{product?.categoria}</Typograph>
        <Typograph variant="subtitle">
          {FormatUnit(product?.unidade!, product?.quantidade!)}
        </Typograph>
      </View>

      <View style={styles.input}>
        <Label>Preço</Label>
        <InputCurrency value={value} onChange={handleChange} />
      </View>

      <View style={styles.actions}>
        <Button type="sucesso" onPress={handleSubmit}>
          Salvar
        </Button>
        <Button type="alerta" onPress={handleClose}>
          Cancelar
        </Button>
      </View>

      <Toast
        show={!!error}
        type="alerta"
        message={error}
        onClose={clearError}
      />
    </View>
  );
};
