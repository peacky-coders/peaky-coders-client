import { create } from 'zustand'

interface I_ProfileStore {
  isAuth: boolean

  login: () => void
  logout: () => void
}

export const useProfileStore = create<I_ProfileStore>((set) => ({
  isAuth: false,

  login: () => set(() => ({ isAuth: true })),
  logout: () => set(() => ({ isAuth: false })),
}))
