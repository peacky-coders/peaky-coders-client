import { Link, Route, Routes } from 'react-router-dom'

import { ProtectedRoute } from './ProtectedRoute'

import { E_Modal } from 'features/ModalManger/models'
import { useModalManagerStore } from 'features/ModalManger/store'
import { E_Routes } from 'models/routes'
import * as Page from 'pages'
import { useProfileStore } from 'store/profile'

export const AppRoutes = () => {
  const isAuth = useProfileStore((state) => state.isAuth)
  const openModal = useModalManagerStore((state) => state.openModal)

  const handleOpenAuthModal = () => {
    openModal(E_Modal.auth)
  }

  const handleOpenLogoutModal = () => {
    openModal(E_Modal.logout)
  }

  return (
    <>
      <div>
        <Link to='/'>Home</Link>
        {isAuth ? (
          <>
            <Link to='/profile'>Profile</Link>
            <button onClick={handleOpenLogoutModal}>Logout</button>
          </>
        ) : (
          <button onClick={handleOpenAuthModal}>Login</button>
        )}
      </div>
      <Routes>
        <Route path={E_Routes.article} element={<Page.Article />} />
        <Route path={E_Routes.home} element={<Page.Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path={E_Routes.editor} element={<Page.Editor />} />
          <Route path={E_Routes.profile} element={<Page.Profile />} />
        </Route>
      </Routes>
    </>
  )
}
