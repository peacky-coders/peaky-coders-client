import { ModalManger } from 'features/ModalManger'
import { AppRoutes } from 'routes'
import { GlobalStyle } from 'styles/global'

export const App = () => {
  return (
    <>
      <ModalManger />
      <AppRoutes />
      <GlobalStyle />
    </>
  )
}
