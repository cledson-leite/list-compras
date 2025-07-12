import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel"
import { convexClient } from "@/database"
import { Confirmed } from "@/DTO"

export const getAllConfirmed = async (): Promise<Confirmed[]> => {
  const result  = await convexClient.query(api.confirmed.getAllCofirmed, {})
  const list: Confirmed[] = result.map((item) => ({...item}))
  return list
}

export const createConfirmed = async (confirmed: Confirmed) => {
  const list = await getAllConfirmed()
  const productConfirmed = list.find((item) => item.id === confirmed.id)
  if (productConfirmed)  return
  const newConfirmed = {
    id: confirmed.id as Id<'pendings'>,
    nome: confirmed.nome,
    categoria: confirmed.categoria,
    unidade: confirmed.unidade,
    quantidade: confirmed.quantidade,
    price: confirmed.price
  }
  const result =await convexClient.mutation(api.confirmed.createConfirmed, newConfirmed)
  if(!result) return
}

export const getConfirmedById = async (id:  string): Promise<Confirmed | undefined> => {
  const result = await convexClient.query(api.confirmed.getConfirmedById, {id: id as Id<'pendings'>})
  return result ? {...result} : undefined
}


export const deleteConfirmed = async (id:  string): Promise<void> => {
  const productConfirmed = await getConfirmedById(id)
  if (!productConfirmed) return
  await convexClient.mutation(api.confirmed.deleteConfirmed, {id: id as Id<'pendings'>})
}

export const getTotalPrice = async (): Promise<number> => {
  const list = await getAllConfirmed()
  const total = list.reduce((acc, item) => acc + (item.price * item.quantidade), 0)
  return total
}