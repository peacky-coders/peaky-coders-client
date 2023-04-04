import { Link } from 'react-router-dom'

import * as S from './styles'

import { E_Modal } from 'features/ModalManger/models'
import { useModalManagerStore } from 'features/ModalManger/store'
import { useProfileStore } from 'store/profile'

export const Header = () => {
  const { isAuth, avatar, email } = useProfileStore((state) => ({
    isAuth: state.isAuth,
    email: state.email,
    avatar: state.avatar,
  }))
  const openModal = useModalManagerStore((state) => state.openModal)

  const handleOpenAuthModal = () => {
    openModal(E_Modal.auth)
  }

  const handleOpenLogoutModal = () => {
    openModal(E_Modal.logout)
  }

  return (
    <S.HeaderWrapper>
      <Link to='/'>Peaky Coders</Link>
      {isAuth ? (
        <>
          <Link to='/profile'>Profile</Link>
          <button onClick={handleOpenLogoutModal}>Logout</button>
          <span>{email}</span>
          <img src={avatar} width={50} height={50} alt='avatar' />
        </>
      ) : (
        <button onClick={handleOpenAuthModal}>Login</button>
      )}
    </S.HeaderWrapper>
  )
}
