import * as S from './styles'

import { useModalManagerStore } from 'features/ModalManger/store'
import { useProfileStore } from 'store/profile'
export const LogoutModal = () => {
  const closeLastModal = useModalManagerStore((state) => state.closeLastModal)
  const logout = useProfileStore((state) => state.logout)

  const handleCloseModal = () => {
    closeLastModal()
  }

  const handleLogout = () => {
    handleCloseModal()
    logout()
  }

  return (
    <S.Modal>
      <button onClick={handleCloseModal}>X</button>
      <div>LogoutModal</div>
      <div>Вы точно хотите выйти из аккаунта?</div>
      <button onClick={handleLogout}>Подтверждаю</button>
      <button onClick={handleCloseModal}>Отмена</button>
    </S.Modal>
  )
}
