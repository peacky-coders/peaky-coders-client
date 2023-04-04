import * as S from './styles'

import { useModalManagerStore } from 'features/ModalManger/store'

export const AuthModal = () => {
  const closeLastModal = useModalManagerStore((state) => state.closeLastModal)

  const handleCloseModal = () => {
    closeLastModal()
  }

  const handleGitHubAuth = async () => {
    location.replace(import.meta.env.VITE_GITHUB_AUTH_URL)
  }

  const handleGitLabAuth = async () => {
    location.replace(import.meta.env.VITE_GITLAB_AUTH_URL)
  }

  return (
    <S.Modal>
      <button onClick={handleCloseModal}>X</button>
      <button onClick={handleGitHubAuth}>GitHub</button>
      <button onClick={handleGitLabAuth}>GitLab</button>

      <div>AuthModal</div>
    </S.Modal>
  )
}
