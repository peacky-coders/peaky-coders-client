import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import * as S from '../../components/ArticleCard/styles'

import { t } from 'languages'
import { T_Params } from 'models/routes'
import { articlesAPI } from 'services'

export const Article = () => {
  const { articleId } = useParams() as T_Params

  const { data, isLoading } = useQuery({
    queryFn: () => articlesAPI.getArticle({ articleId }),
    queryKey: ['article', articleId],
  })

  return (
    <div>
      {t('page.article.title')}

      <div>
        {isLoading ? (
          'Загрузка...'
        ) : data ? (
          <S.Card key={data.id}>
            <S.Title>{data.title}</S.Title>
            <S.ArticleText>{data.content}</S.ArticleText>
          </S.Card>
        ) : (
          <p>Ошибка</p>
        )}
      </div>
    </div>
  )
}

// JSON.stringify(data, null, 2)
