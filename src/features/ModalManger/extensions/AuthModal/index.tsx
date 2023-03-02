import * as S from './styles'

import { useModalManagerStore } from 'features/ModalManger/store'
import { useProfileStore } from 'store/profile'

export const AuthModal = () => {
  const closeLastModal = useModalManagerStore((state) => state.closeLastModal)
  const login = useProfileStore((state) => state.login)

  const handleCloseModal = () => {
    closeLastModal()
  }

  const handleLogin = () => {
    login()
    closeLastModal()
  }

  return (
    <S.Modal>
      <button onClick={handleCloseModal}>X</button>
      <form>
        <label htmlFor='email'>Email</label>
        <input name='email'></input>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password'></input>
        <button onClick={handleCloseModal}>Close</button>
        <button onClick={handleLogin}>Enter</button>
      </form>

      <div>AuthModal</div>
    </S.Modal>
  )
}
