import { Link, Route, Routes } from 'react-router-dom'

import { E_Routes } from 'models/routes'
import * as Page from 'pages'

export const AppRoutes = () => {
  return (
    <>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/profile'>Profile</Link>
      </div>
      <Routes>
        <Route path={E_Routes.article} element={<Page.Article />} />
        <Route path={E_Routes.home} element={<Page.Home />} />
        <Route path={E_Routes.profile} element={<Page.Profile />} />
      </Routes>
    </>
  )
}
