import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import { t } from 'languages'
import { T_Params } from 'models/routes'
import { articlesAPI } from 'services'

export const Article = () => {
  const { articleId } = useParams() as T_Params

  const { data, isFetching } = useQuery(articlesAPI.getArticle({ articleId }))

  return (
    <div>
      {t('page.article.title')}

      <div>{isFetching ? 'Загрузка...' : JSON.stringify(data, null, 2)}</div>
    </div>
  )
}
