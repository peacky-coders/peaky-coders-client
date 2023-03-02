import { Link, Outlet } from 'react-router-dom'

import * as S from './styles'

import { t } from 'languages'
export const Profile = () => {
  return (
    <>
      <Outlet />
      <div>{t('page.profile.title')}</div>
      <S.Parent>
        <S.ProfileInf>
          <S.Child>Аватар</S.Child>
          <S.Child>Никнейм</S.Child>
          <S.Child>Специальность</S.Child>
          <S.Child>Количество статей</S.Child>
        </S.ProfileInf>
        <S.Article>
          <Link to='/profile/editor'>
            <S.Child>Написать статью</S.Child>
          </Link>

          <S.Child>Хуй с горы</S.Child>
        </S.Article>
      </S.Parent>
    </>
  )
}
