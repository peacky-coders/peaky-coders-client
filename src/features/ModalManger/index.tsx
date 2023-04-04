import { useCallback, useEffect } from 'react'

import { modalsComponents } from './extensions'
import { useModalManagerStore } from './store'
import * as S from './styles'

export const ModalManger = () => {
  const modals = useModalManagerStore((state) => state.modals)

  const closeLastModal = useModalManagerStore((state) => state.closeLastModal)

  const handleCloseModal = () => {
    closeLastModal()
  }

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLastModal()
      }
    },
    [closeLastModal],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <>
      {Boolean(modals.length) && (
        <S.Wrapper>
          {modals.map((modal) => {
            const ModalComponent = modalsComponents[modal]
            return (
              <S.Inner key={modal}>
                <S.Overlay onClick={handleCloseModal} />
                <ModalComponent />
              </S.Inner>
            )
          })}
        </S.Wrapper>
      )}
    </>
  )
}
