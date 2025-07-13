import * as repository from '@/repository/confirmedRepository'
import { Confirmed } from '@/DTO'

export const getAllConfirmed = async (): Promise<Confirmed[]> => {
  console.log('controller getAll Confirmed')
  return await repository.getAllConfirmed()}

export const createConfirmed = async (confirmed: Confirmed) => {
  console.log('controller create Confirmed')
  const list = await getAllConfirmed()
  const productConfirmed = list.find((item) => item.id === confirmed.id)
  if (productConfirmed)  return
  await repository.createConfirmed(confirmed)
}

export const getConfirmedById = async (id:  string): Promise<Confirmed | null> => {
  console.log('controller get Confirmed')
  return await repository.getConfirmedById(id)}


export const deleteConfirmed = async (id:  string): Promise<void> => {
  console.log('controller delete Confirmed')
  const productConfirmed = await getConfirmedById(id)
  if (!productConfirmed) return
  await repository.deleteConfirmed(id)
}

export const deleteAll = async (): Promise<void> => {
  console.log('controller delete All Confirmed')
  return await repository.deleteAllConfirmed()}

export const getTotalPrice = async (): Promise<number> => {
  console.log('controller getTotalPrice')
  return await repository.getTotalPrice()}