import { Route, Routes } from 'react-router-dom'

import { ProtectedRoute } from './ProtectedRoute'

import { Header } from 'features/Header'
import { E_Routes } from 'models/routes'
import * as Page from 'pages'

export const AppRoutes = () => {
  return (
    <>
      <Header />
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
