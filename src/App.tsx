import { useLayoutEffect } from 'react'

import { ModalManger } from 'features/ModalManger'
import { AppRoutes } from 'routes'
import { useProfileStore } from 'store/profile'
import { GlobalStyles } from 'styles/global'

export const App = () => {
  const login = useProfileStore((state) => state.login)

  useLayoutEffect(() => {
    login()
  }, [login])

  return (
    <>
      <ModalManger />
      <AppRoutes />
      <GlobalStyles />
    </>
  )
}
