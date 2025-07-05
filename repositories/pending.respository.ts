import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel"
import { convexClient } from "@/database"

export interface Product {
  _id?: Id<'pendings'>
  nome: string,
  categoria: string,
  unidade: string,
  quantidade: number
}

export const getAll = async (): Promise<(Product & { _id: Id<'pendings'>})[]> =>{
  const result  = await convexClient.query(api.pending.getAllPendings, {})
  
  return result
}

export const getById = async (_id: Id<'pendings'>): Promise<(Product & { _id: Id<'pendings'>}) | null> => {
  return await convexClient.query(api.pending.getPendingById, {_id})
}

export const create = async (product: Product) => {
  return await convexClient.mutation(api.pending.createPending, product)
}

export const uptade = async (product: Product & { _id: Id<'pendings'>}) => {
  return await convexClient.mutation(api.pending.uptadePending, product)
}

export const deletePending = async(_id: Id<'pendings'>) => {
  return await convexClient.mutation(api.pending.deletePending, {_id})
}