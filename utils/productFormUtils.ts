import z from "zod";
import { Product } from "@/repositories/pending.respository";
import { Categoria, CATEGORIAS, schema, Units, UNITS } from "@/constants";

type FormData = z.input<typeof schema>;

export const getProductFormDefaultValues = (product?: Product): FormData => {
  return {
    nome: product?.nome || '',
    categoria: product?.categoria && CATEGORIAS.includes(product.categoria as Categoria)
      ? product.categoria as Categoria
      : 'Hortifruti',
    unidade: product?.unidade && UNITS.includes(product.unidade as Units)
      ? product.unidade as Units
      : 'unidade',
    quantidade: `${product?.quantidade || '1'}`
  };
};

/**
 * Mapeia os dados do formulário para o formato do objeto Product.
 */
export const mapFormDataToProduct = (formData: FormData, existingProduct?: Product): Product => {
  return {
    _id: existingProduct?._id || undefined, // Mantém o _id se for uma edição
    nome: formData.nome,
    categoria: formData.categoria,
    unidade: formData.unidade,
    quantidade: Number(formData.quantidade)
  } as Product;
};