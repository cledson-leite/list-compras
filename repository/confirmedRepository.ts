import { openDB } from '@/database'
import { Confirmed } from '@/DTO'

export const getAllConfirmed = async (): Promise<Confirmed[]> => {
  console.log('repository getAllConfirmed')
  const db = await openDB()
  return db.getAllSync<Confirmed>('SELECT * FROM confirmed')
}

export const getConfirmedById = async (id: string): Promise<Confirmed | null> => {
  console.log('repository getConfirmedById')
  const db = await openDB()
  return db.getFirstSync<Confirmed>('SELECT * FROM confirmed WHERE id = ?', [id])
}

export const createConfirmed = async (confirmed: Confirmed): Promise<void> => {
  console.log('repository createConfirmed')
  const db = await openDB()
  const exists = await getConfirmedById(confirmed.id)
  console.log('repository createConfirmed')
  if (exists) return
  db.runSync(
    'INSERT INTO confirmed (id, nome, categoria, unidade, quantidade, price) VALUES (?, ?, ?, ?, ?, ?)',
    [confirmed.id, confirmed.nome, confirmed.categoria, confirmed.unidade, confirmed.quantidade, confirmed.price]
  )
}

export const deleteConfirmed = async (id: string): Promise<void> => {
  console.log('repository deleteConfirmed')
  const db = await openDB()
  db.runSync('DELETE FROM confirmed WHERE id = ?', [id])
}

export const deleteAllConfirmed = async (): Promise<void> => {
  console.log('repository deleteAllConfirmed')
  const db = await openDB()
  db.runSync('DELETE FROM confirmed')
}

export const getTotalPrice = async (): Promise<number> => {
  console.log('repository getTotalPrice')
  const list = await getAllConfirmed()
  return list.reduce((acc, item) => acc + (item.price * item.quantidade), 0)
}
