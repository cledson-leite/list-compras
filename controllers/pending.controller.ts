import { Id } from "@/convex/_generated/dataModel";
import { Product } from "@/repositories/pending.respository"
import * as repository from '@/repositories/pending.respository';

export const getAllPendings = async (): Promise<Product[]> => {
  const result = await repository.getAll()
  
  return result
}

export const createProduct = async (product: Omit<Product, 'id'>) => {
  const list = await getAllPendings()
  const productExists = list.find((item) => item.nome === product.nome)
  if (productExists)  return
  const result =await repository.create(product)
  if(!result) return
}

export const getPendingById = async (id:  Id<'pendings'>): Promise<Product | undefined> => {
  const result =await repository.getById(id)
  if(!result) return
  return result
}

export const uptadePending = async (product: Product, id:  Id<'pendings'>) => {
  const productExisted = await getPendingById(id)
  if (!productExisted) return
  await repository.uptade({...product, _id: id})
}

export const deletePneding = async (id:  Id<'pendings'>): Promise<void> => {
  const productExisted = await getPendingById(id)
  if (!productExisted) return
  await repository.deletePending(id)
}