import {create} from 'zustand'

type ModalState = {
  isOpen: boolean
  hasId: string
  sendId: (id: string) => void
  onOpen: () => void
  onClose: () => void
}

export const useModal = create<ModalState>((set) => ({
  hasId: '',
  sendId: (id: string) => set({hasId: id}),
  isOpen: false,
  onOpen: () => set({isOpen: true}),
  onClose: () => set({isOpen: false}),
}))