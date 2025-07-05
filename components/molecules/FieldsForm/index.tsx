import { View } from '@/styles/Themed';

import z from 'zod';
import {Control, Controller } from 'react-hook-form';
import { CATEGORIAS, schema, UNITS } from '@/constants';
import Label from '@/components/atomic/Label'
import Input from '@/components/atomic/Input';
import Select from '@/components/atomic/Select';
import InputNumber from '@/components/atomic/InputNumber';

import { styles } from './styles';

type FormData = z.input<typeof schema>;

export default function FieldsForm({control}: {control: Control<FormData>}) {
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
          <Label>Categoria</Label>
          <Controller
            control={control}
            name="categoria"
            render={({ field: { value, onChange } }) => (
              <Select onChange={onChange} value={value} options={[...CATEGORIAS]}/>
            )}
          />
        </View>
        <View>
          <Label>Unidade</Label>
          <Controller
            control={control}
            name="unidade"
            render={({ field: { value, onChange } }) => (
              <Select onChange={onChange} value={value} options={[...UNITS]}/>
            )}
          />
        </View>
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
  )
}