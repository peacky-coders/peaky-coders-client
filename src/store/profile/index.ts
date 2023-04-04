import jwt_decode from 'jwt-decode'

import { create } from 'zustand'

import { T_ClientTokenData } from 'models/shared/tokens'
import { Cookies } from 'utils/helpers/cookies'

interface I_ProfileStore {
  isAuth: boolean
  username: string
  avatar: string
  email: string

  login: () => void
  logout: () => void
}

const profileInstance = {
  isAuth: false,
  username: '',
  avatar: '',
  email: '',
}

export const useProfileStore = create<I_ProfileStore>((set) => ({
  ...profileInstance,

  login: () =>
    set(() => {
      const accessToken = Cookies.getAccessToken()
      // Если токен не найден
      if (!accessToken) return profileInstance

      const decoded = jwt_decode<T_ClientTokenData>(accessToken)
      // Если декод ничего не вернул
      if (!decoded) return profileInstance

      return {
        isAuth: true,
        avatar: decoded.avatar,
        email: decoded.email,
        username: decoded.username,
      }
    }),
  logout: () =>
    set(() => {
      Cookies.removeAccessToken()
      Cookies.removeRefreshToken()
      Cookies.removeFrom()
      return profileInstance
    }),
}))
