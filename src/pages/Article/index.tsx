import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import { t } from 'languages'
import { T_Params } from 'models/routes'
import { articlesAPI } from 'services'

export const Article = () => {
  const { articleId } = useParams() as T_Params

  const { data, isLoading } = useQuery(articlesAPI.getArticle({ articleId }))

  console.log(data)

  return (
    <div>
      {t('page.article.title')}

      <div>{isLoading ? 'Загрузка...' : JSON.stringify(data, null, 2)}</div>
    </div>
  )
}
