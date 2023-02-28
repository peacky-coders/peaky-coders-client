import * as S from './styles'

import { useModalManagerStore } from 'features/ModalManger/store'
import { useProfileStore } from 'store/profile'
export const LogoutModal = () => {
  const closeLastModal = useModalManagerStore((state) => state.closeLastModal)
  const isLogout = useProfileStore((state) => state.logout)
  const isLogoutFinal = () => {
    closeLastModal()
    isLogout()
  }
  return (
    <S.Modal>
      <button>X</button>
      <div>LogoutModal</div>
      <div>Вы точно хотите выйти из аккаунта?</div>
      <button onClick={isLogoutFinal}>Подтверждаю</button>
      <button onClick={closeLastModal}>Отмена</button>
    </S.Modal>
  )
}
