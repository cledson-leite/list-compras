import { Confirmed } from '@/DTO'
import * as controller from '@/controllers/confirmed.controller'
import {create} from 'zustand'
import { getTotalPrice} from '../controllers/confirmed.controller';

type useListConfirmedState = {
  loading: boolean
  totalPrice: number
  countConfirmed: number
  confirmeds: Confirmed[]
  getAllConfirmed: () => Promise<void>
  getConfirmedById: (id: string) => Promise<Confirmed>
  getCountConfirmed: () => Promise<void>
  getTotalPrice: () => Promise<void>
  addConfirmed: (consfirmed: Confirmed) => void
  deleteConfirmed: (id: string) => void
  deleteAllConfirmed: () => void
}

export const useListConfirmed = create<useListConfirmedState>((set, get)=>({
  loading: false,
  totalPrice: 0,
  countConfirmed: 0,
  confirmeds: [] as Confirmed[],
  getAllConfirmed: async () => {
    console.log('getAllConfirmed')
    set({loading: true})
    const confirmeds = await controller.getAllConfirmed()
    set({confirmeds: [...confirmeds], loading: false})
  },
  getConfirmedById: async (id: string): Promise<Confirmed> => {
    console.log('getConfirmedById')
    set({loading: true})
    const confirmed = await controller.getConfirmedById(id)
    set({loading: false})
    return confirmed!
  },
  getTotalPrice: async () => {
    console.log('getTotalPrice')
    set({loading: true})
    const total = await getTotalPrice()
    set({totalPrice: total, loading: false})
  },
  addConfirmed: async (confirmed: Confirmed) => {
    console.log('addConfirmed')
    set({loading: true})
    await controller.createConfirmed(confirmed)
    await get().getAllConfirmed()
    await get().getCountConfirmed()
    await get().getTotalPrice()
    set({loading: false})
  },
  getCountConfirmed: async () => {
    console.log('getCountConfirmed')
    set({loading: true})
    const count = await controller.getAllConfirmed()
    set({countConfirmed: count.length, loading: false})
  },
  deleteConfirmed: async (id: string) => {
    set({loading: true})
    await controller.deleteConfirmed(id)
    console.log('deleteConfirmed')
      await get().getAllConfirmed()
      set({loading: false})
    },
  deleteAllConfirmed: async () => {
    console.log('deleteAllConfirmed')
      set({loading: true})
      await controller.deleteAll()
      await get().getAllConfirmed()
      set({loading: false})
    },
}))