import * as Crypto from 'expo-crypto'
import * as repository from '@/repository/pendingsRepository'
import { Product } from "@/DTO"

export const getAllPendings = async (): Promise<Product[]> => {
  console.log('controller getAll Pending')
  return await repository.getAllPendings()}

export const getPendingById = async (id:  string): Promise<Product | undefined> => {
  console.log('controller get Pending')
  const result = await repository.getPendingById(id)
  console.log('controller get Pending')
  if(!result) return
  return result 
}
export const createProduct = async (product: Omit<Product, 'id'>) => {
  console.log('controller create Pending')
  const list = await getAllPendings()
  const productExists = list.find((item) => item.nome === product.nome)
  if (productExists)  return
  const id = Crypto.randomUUID()
  const newproduct  = {...product, id}
  await repository.createPending(newproduct)
}

export const uptadePending = async (product: Product, id:  string) => {
  console.log('controller uptade Pending')
  const productExisted = await getPendingById(id)
  if (!productExisted) return
  await repository.updatePending(product)
}

export const deletePending = async (id:  string): Promise<void> => {
  console.log('controller delete Pending')
  const productExisted = await getPendingById(id)
  if (!productExisted) return
  await repository.deletePending(id)
}