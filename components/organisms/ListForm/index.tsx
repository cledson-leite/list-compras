import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { View } from '@/styles/Themed';
import { styles } from './listForm.styles';
import FormHeader from '@/components/atomic/FormHeader';
import FormActions from '@/components/molecules/FormActions';
import { useState } from 'react';
import { useModal } from '@/stores/useModal';
import { schema } from '@/constants/scheme';
import FieldsForm from '@/components/molecules/FieldsForm';
import Toast from '@/components/atomic/Toast';
import { LISTA } from '@/utils/lista';
import { Categoria, CATEGORIAS } from '../../../constants/categorias';
import z from 'zod';
import {UNITS, Units } from '@/constants/units';

type FormData = z.input<typeof schema>
export default function ListForm() {
  const {onClose, sendId, hasId} = useModal()
  const [snackError, setSnackError] = useState('')
  const product = hasId ? LISTA.filter((item) => item.id === hasId)[0] : undefined
  const {
    control,
    handleSubmit,
    reset,
  } = useForm<FormData>({
    //@ts-ignore
    resolver: zodResolver(schema),
    defaultValues: {
      nome: product?.nome || '',
      categoria: product?.categoria && CATEGORIAS.includes(product.categoria as Categoria)
      ? product.categoria as Categoria
      : 'Hortifruti',
      unidade:  product?.unidade && UNITS.includes(product.unidade as Units)
      ? product.unidade as Units
      : 'unidade',
      quantidade: `${product?.quantidade || '1'}`
    }
  });
  const onSubmit = handleSubmit(
    (data) => {
    console.log('datas >>> ',data)
  },
    (errors) => {
      const message = Object.values(errors)[0]?.message
      if(message) setSnackError(message)
    });
  const onCancel = () => {
    reset()
    setSnackError('')
    sendId('')
    onClose()
  }
  return (
    <View style={styles.container}>
      <FormHeader>Item de Compra</FormHeader>
      <FieldsForm control={control} />
      <FormActions onSubmit={onSubmit} onCancel={onCancel} />
      <Toast show={!!snackError} onClose={() => setSnackError('')} type='alerta' message={snackError} />
    </View>
  )
}