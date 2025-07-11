import { Confirmed } from '@/DTO'
import * as controller from '@/controllers/confirmed.controller'
import {create} from 'zustand'
import { getTotalPrice } from '../controllers/confirmed.controller';

type useListConfirmedState = {
  totalPrice: number
  countConfirmed: number
  getCountConfirmed: () => Promise<void>
  getTotalPrice: () => Promise<void>
  addConfirmed: (consfirmed: Confirmed) => void
}

export const useListConfirmed = create<useListConfirmedState>((set, get)=>({
  totalPrice: 0,
  countConfirmed: 0,
  getTotalPrice: async () => {
    const total = await getTotalPrice()
    await new Promise((res) => setTimeout(res, 300));
    set({totalPrice: total})
  },
  addConfirmed: async (confirmed: Confirmed) => {
    await controller.createConfirmed(confirmed)
    await new Promise((res) => setTimeout(res, 300))
    await get().getCountConfirmed()
    await get().getTotalPrice()
  },
  getCountConfirmed: async () => {
    const count = await controller.getAllConfirmed()
    await new Promise((res) => setTimeout(res, 300));
    set({countConfirmed: count.length})
  }
}))