import z from "zod";

export const schema = z.object({
  nome: z.string({ required_error: 'Campo obrigatório' }).min(1, 'Nome obrigatório'),
  unidade: z.enum(['unidade', 'quilo'], { required_error: 'Unidade obrigatória' }),
  quantidade: z
    .string({ required_error: 'Quantidade obrigatória' })
    .min(1, 'Quantidade deve ser maior que 0')
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val), { message: 'Quantidade inválida' }),
})