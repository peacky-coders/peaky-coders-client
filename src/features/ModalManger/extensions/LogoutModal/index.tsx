import * as S from './styles'

export const LogoutModal = () => {
  return (
    <S.Modal>
      <button>X</button>
      <div>LogoutModal</div>
      <div>Вы точно хотите выйти из аккаунта?</div>
      <button>Подтверждаю</button>
      <button>Отмена</button>
    </S.Modal>
  )
}
