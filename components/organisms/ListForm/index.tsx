import { useForm } from 'react-hook-form';
import { Snackbar } from 'react-native-paper'
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
export default function ListForm() {
  const {onClose} = useModal()
  const [snackError, setSnackError] = useState('')
  const {
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(schema)
  });
  const onSubmit = handleSubmit(
    (data) => {
    console.log(data)
  },
    (errors) => {
      const message = Object.values(errors)[0]?.message
      if(message) setSnackError(message)
    });
  const onCancel = () => {
    reset()
    setSnackError('')
    onClose()
  }
  return (
    <View style={styles.container}>
      <FormHeader>Item de Compra</FormHeader>
      <FieldsForm />
      <FormActions onSubmit={onSubmit} onCancel={onCancel} />
      <Toast show={!!snackError} onClose={() => setSnackError('')} type='alerta' message={snackError} />
    </View>
  )
}