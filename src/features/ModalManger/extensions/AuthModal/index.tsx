import * as S from './styles'

import { useModalManagerStore } from 'features/ModalManger/store'
import { useProfileStore } from 'store/profile'
export const AuthModal = () => {
  const closeLastModal = useModalManagerStore((state) => state.closeLastModal)
  const isLogin = useProfileStore((state) => state.login)
  const isLoginFinal = () => {
    closeLastModal()
    isLogin()
  }
  return (
    <S.Modal>
      <form>
        <label htmlFor='email'>Email</label>
        <input name='email'></input>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password'></input>
        <button onClick={closeLastModal}>Close</button>
        <button onClick={isLoginFinal}>Enter</button>
      </form>

      <div>AuthModal</div>
    </S.Modal>
  )
}
