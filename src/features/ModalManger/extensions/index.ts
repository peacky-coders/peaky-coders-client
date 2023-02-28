import { FC } from 'react'

import { AuthModal } from './AuthModal'
import { LogoutModal } from './LogoutModal'

import { E_Modal } from '../models'

export const modalsComponents: Record<E_Modal, FC> = {
  auth: AuthModal,
  logout: LogoutModal,
}
