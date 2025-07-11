import { View } from "@/styles/Themed";

import { Product } from "@/repositories/pending.respository";
import FormHeader from "@/components/atomic/FormHeader";
import Toast from "@/components/atomic/Toast";

import { styles } from "./styles";
import Typograph from "@/components/atomic/Typograph";
import { FormatUnit } from "@/utils/formatUnit";
import Label from "@/components/atomic/Label";
import { useState } from "react";
import Button from "@/components/atomic/Button";
import { Colors } from "@/constants";
import { useColorScheme } from "react-native";
import InputCurrency from "@/components/atomic/InputCurrency";
import { useModal } from "@/stores";

type ProductFormContainerProps = {
  product?: Product;
}

export const ConfirmFormContainer = ({ product }: ProductFormContainerProps) => {
  const { onCloseConfirm} = useModal()
  const colorScheme = useColorScheme()
const [value, setValue] = useState('');
const [snackError, setSnackError] = useState('');
const onChange = (value: string) => {
  setValue(value)
}
const onSubmit = () => {
  if (value === '') {
    setSnackError('Preço obrigatório')
    return
  }
  const confirmProduct = {
    ...product,
    preco: Number(value)
  }
  console.log(confirmProduct)
  setSnackError('')
  onCloseConfirm()
}
const onCancel = () => {
  setSnackError('')
  onCloseConfirm()
}
console.log(product)
  return (
    <View style={styles.container}>
      <FormHeader>Confirmar Produto</FormHeader>
      <Typograph variant='title' style={{color: Colors[colorScheme ?? 'light'].secundarioBorda}}>{product?.nome}</Typograph>
      <View style={styles.subtitle}>
        <Typograph variant='subtitle'>{product?.categoria}</Typograph>
        <Typograph variant='subtitle'>{FormatUnit(product?.unidade!, product?.quantidade!)}</Typograph>
      </View>
      <View style={styles.input}>
        <Label>Preço</Label>
        <InputCurrency onChange={onChange} value={value}/>
      </View>
      <View style={styles.actions}>
        <Button type='sucesso' onPress={onSubmit}>Salvar</Button>
        <Button type='alerta' onPress={onCancel}>Cancelar</Button>
      </View>
      <Toast show={!!snackError} onClose={() => setSnackError('')} type='alerta' message={snackError} />
    </View>
  );
};