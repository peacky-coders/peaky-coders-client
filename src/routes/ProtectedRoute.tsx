import { Outlet, Navigate } from 'react-router-dom'

import { useProfileStore } from 'store/profile'

export const ProtectedRoute = () => {
  const isAuth = useProfileStore((state) => state.isAuth)

  if (isAuth) {
    return <Outlet />
  }

  return <Navigate to='/' />
}
