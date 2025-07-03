import { View } from 'react-native'
import { useForm, Controller } from 'react-hook-form';
import Label from '@/components/atomic/Label'
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from '@/constants/scheme';
import Input from '@/components/atomic/Input';
import Select from '@/components/atomic/Select';
import InputNumber from '@/components/atomic/InputNumber';
import { styles } from './fieldsForm.styles';

export default function FieldsForm() {
  const {control} = useForm({resolver: zodResolver(schema)})
  return (
    <View>
      <Label>Nome</Label>
      <Controller
        control={control}
        name="nome"
        render={({ field: { onChange, value } }) => (
          <Input value={value} onChange={onChange} />
        )}
      />
      <View style={styles.qntUnit}>
        <View>
          <Label>Unidade</Label>
          <Controller
            control={control}
            name="unidade"
            render={({ field: { value, onChange } }) => (
              <Select onChange={onChange} value={value} />
            )}
          />
        </View>
        <View>
          <Label>Quantidade</Label>
          <Controller
            control={control}
            name="quantidade"
            render={({ field: { onChange, value } }) => (
              <InputNumber onChange={onChange} value={value}/>
            )}
          />
        </View>
      </View>
    </View>
  )
}