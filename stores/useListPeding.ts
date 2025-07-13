import {create} from 'zustand'
import * as controller from '@/controllers/pending.controller'
import { Product } from '@/DTO'

type ListPendingState = {
  list: Product[]
  countList: number
  product: Product | undefined
  loadList: () => Promise<void>
  loading: boolean
  addProduct: (product: Product) => void
  getPending: (id: string) => Promise<void>
  uptadePending: (product: Product) => void
  deletePending: (id: string) => void
}

export const useListPending = create<ListPendingState>((set, get)=>({
  loading: false,
  countList: 0,
  list: [] as Product[],
  product: undefined,
  loadList: async () => {
    console.log('loadList')
    set({loading: true})
    const list = await controller.getAllPendings()
    const count = list.length
    set({list: [...list], countList: count, loading: false})
  },
  addProduct: async (product: Omit<Product, 'id'>) => {
    console.log('addProduct')
    set({loading: true})
    await controller.createProduct(product)
    await get().loadList()
    set({ loading: false})
  },
  getPending: async (id: string) => {
    console.log('getPending')
    set({ loading: true})
    if (!id) {
      set({product: undefined, loading: false})
      return
    }
    
    const product = await controller.getPendingById(id)
    if (!product) {
      set({product: undefined, loading: false})
      return
    }
    set({product, loading: false})
  },
  uptadePending: async (product: Product) => {
    console.log('uptadePending')
    set({loading: true})
    if (!product.id) {
      set({loading: false})
      return
    }
    await controller.uptadePending(product, product.id )
    // await new Promise((res) => setTimeout(res, 300));
    await get().loadList()
    set({loading: false})
  },
  deletePending: async (id: string) => {
    console.log('getAllConfirmed')
    set({loading: true})
    await controller.deletePending(id )
    await get().loadList()
    set({loading: false})
  }
}))