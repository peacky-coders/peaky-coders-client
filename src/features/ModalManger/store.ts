import { create } from 'zustand'

import { E_Modal } from './models'

interface I_ModalManagerStore {
  modals: E_Modal[]

  openModal: (modal: E_Modal) => void
  closeLastModal: () => void
}

export const useModalManagerStore = create<I_ModalManagerStore>((set) => ({
  modals: [],

  openModal: (modal: E_Modal) => set((state) => ({ modals: [...state.modals, modal] })),

  closeLastModal: () =>
    set((state) => ({
      modals: state.modals.filter((_item, index) => index !== state.modals.length - 1),
    })),
}))
