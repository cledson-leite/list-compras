import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel"
import { convexClient } from "@/database"
import { Product } from "@/DTO"

export const getAllPendings = async (): Promise<Product[]> => {
  const result  = await convexClient.query(api.pending.getAllPendings, {})
  const list: Product[] = result.map((item) => ({...item, id: item._id}))
  return list
}

export const createProduct = async (product: Omit<Product, 'id'>) => {
  const list = await getAllPendings()
  const productExists = list.find((item) => item.nome === product.nome)
  if (productExists)  return
  const result =await convexClient.mutation(api.pending.createPending, product)
  if(!result) return
}

export const getPendingById = async (id:  string): Promise<Product | undefined> => {
  const _id = id as Id<'pendings'>
  const result = await convexClient.query(api.pending.getPendingById, {_id})
  return result ? {
    id: result._id,
    nome: result.nome,
    categoria: result.categoria,
    unidade: result.unidade,
    quantidade: result.quantidade
  } : undefined
}

export const uptadePending = async (product: Product, id:  string) => {
  const productExisted = await getPendingById(id)
  console.log(productExisted)
  if (!productExisted) return
  const newProduct = {
    _id: id as Id<'pendings'>,
    nome: product.nome,
    categoria: product.categoria,
    unidade: product.unidade,
    quantidade: product.quantidade
  }
  await convexClient.mutation(api.pending.uptadePending, newProduct)
}

export const deletePneding = async (id:  string): Promise<void> => {
  const productExisted = await getPendingById(id)
  if (!productExisted) return
  const _id = id as Id<'pendings'>
  await convexClient.mutation(api.pending.deletePending, {_id})
}