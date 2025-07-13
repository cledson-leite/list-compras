import { openDB } from '@/database'
import { Product } from '@/DTO'

export const getAllPendings = async (): Promise<Product[]> => {
  const db = await openDB()
  return await db.getAllAsync<Product>('SELECT * FROM pendings')
}

export const getPendingById = async (id: string): Promise<Product | null> => {
  const db = await openDB()
  return await db.getFirstAsync<Product>('SELECT * FROM pendings WHERE id = ?', [id])
}

export const createPending = async (product: Product): Promise<void> => {
  const db = await openDB()
  const exists = await getPendingById(product.id!)
  if (exists) return
  await db.runAsync(
    'INSERT INTO pendings (id, nome, categoria, unidade, quantidade) VALUES (?, ?, ?, ?, ?)',
    [product.id!, product.nome, product.categoria, product.unidade, product.quantidade]
  )
}

export const updatePending = async (product: Product): Promise<void> => {
  const db = await openDB()
  await db.runAsync(
    'UPDATE pendings SET nome = ?, categoria = ?, unidade = ?, quantidade = ? WHERE id = ?',
    [product.nome, product.categoria, product.unidade, product.quantidade, product.id!]
  )
}

export const deletePending = async (id: string): Promise<void> => {
  const db = await openDB()
  await db.runAsync('DELETE FROM pendings WHERE id = ?', [id])
}
