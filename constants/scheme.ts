import z from "zod";
import { CATEGORIAS } from "./categorias";
import { UNITS } from "./units";

export const schema = z.object({
  nome: z.string({ required_error: 'Campo obrigatório' }).min(1, 'Nome obrigatório'),
  categoria: z.enum(CATEGORIAS, { required_error: 'Catgoria obrigatória' }),
  unidade: z.enum(UNITS, { required_error: 'Unidade obrigatória' }),
  quantidade: z
    .string({ required_error: 'Quantidade obrigatória' })
    .min(1, 'Quantidade deve ser maior que 0')
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val), { message: 'Quantidade inválida' }),
})