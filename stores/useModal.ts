import {create} from 'zustand'

type ModalState = {
  isOpen: boolean
  isOpenConfirm: boolean
  hasId: string
  sendId: (id: string) => void
  onOpen: () => void
  onClose: () => void
  onOpenConfirm: () => void
  onCloseConfirm: () => void
  
}

export const useModal = create<ModalState>((set) => ({
  hasId: '',
  sendId: (id: string) => set({hasId: id}),
  isOpen: false,
  isOpenConfirm: false,
  onOpen: () => set({isOpen: true}),
  onClose: () => set({isOpen: false}),
  onOpenConfirm: () => set({isOpenConfirm: true}),
  onCloseConfirm: () => set({isOpenConfirm: false}),
}))