import {create} from 'zustand'
import * as controller from '@/controllers/pending.controller'
import { Product } from '@/repositories/pending.respository'
import { Id } from '@/convex/_generated/dataModel'

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
    set({loading: true})
    const list = await controller.getAllPendings()
    const count = list.length
    set({list: [...list], countList: count, loading: false})
  },
  addProduct: async (product: Omit<Product, '_id'>) => {
    set({loading: true})
    await controller.createProduct(product)
    await new Promise((res) => setTimeout(res, 300));
    await get().loadList()
    set({ loading: false})
  },
  getPending: async (id: string) => {
    set({ loading: true})
    if (!id) {
      set({product: undefined, loading: false})
      return
    }
    const product = await controller.getPendingById(id as Id<'pendings'>)
    if (!product) {
      set({product: undefined, loading: false})
      return
    }
    set({product, loading: false})
  },
  uptadePending: async (product: Product) => {
    set({loading: true})
    if (!product._id) {
      set({loading: false})
      return
    }
    await controller.uptadePending(product, product._id as Id<'pendings'>)
    await new Promise((res) => setTimeout(res, 300));
    await get().loadList()
    set({loading: false})
  },
  deletePending: async (id: string) => {
    set({loading: true})
    await controller.deletePneding(id as Id<'pendings'>)
    await new Promise((res) => setTimeout(res, 300));
    await get().loadList()
    set({loading: false})
  }
}))