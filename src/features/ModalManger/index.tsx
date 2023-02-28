import { modalsComponents } from './extensions'
import { useModalManagerStore } from './store'
import * as S from './styles'

export const ModalManger = () => {
  const modals = useModalManagerStore((state) => state.modals)

  return (
    <>
      {Boolean(modals.length) && (
        <S.Wrapper>
          {modals.map((modal) => {
            const ModalComponent = modalsComponents[modal]
            return (
              <S.Inner key={modal}>
                <S.Overlay />
                <ModalComponent />
              </S.Inner>
            )
          })}
        </S.Wrapper>
      )}
    </>
  )
}
