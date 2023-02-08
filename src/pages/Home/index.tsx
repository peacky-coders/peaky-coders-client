import { useQuery } from '@tanstack/react-query'

import { t } from 'languages'

export const Home = () => {
  const {} = useQuery()

  return <div>{t('page.home.title')}</div>
}
