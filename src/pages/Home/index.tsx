import { useMutation } from '@tanstack/react-query'
import { useLayoutEffect, useState } from 'react'

import * as S from './styles'

import { ArticleCard } from 'components/ArticleCard'
import { t } from 'languages'
import { I_Article } from 'models/article'
import { articlesAPI } from 'services'

const articlesLimit = 10

export const Home = () => {
  const [articles, setArticles] = useState<I_Article[]>([])
  const [articlesPage, setArticlesPage] = useState(1)

  const handleMutationGetArticlesSuccess = (data: I_Article[]) => {
    setArticles((prev) => [...prev, ...data])
    setArticlesPage((prev) => prev + 1)
  }

  const { isLoading, mutate } = useMutation({
    mutationFn: articlesAPI.getArticles,
    onSuccess: handleMutationGetArticlesSuccess,
    mutationKey: ['articles'],
  })

  useLayoutEffect(() => {
    mutate({ page: 1, limit: articlesLimit })
    return () => {
      setArticles([])
      setArticlesPage(1)
    }
  }, [mutate])

  const handleLoadMore = () => {
    mutate({ limit: articlesLimit, page: articlesPage + 1 })
  }

  return (
    <div>
      {t('page.home.title')}
      {isLoading && !articles.length ? (
        <div>Загрузка...</div>
      ) : articles.length ? (
        <div>
          <S.Container>
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
            <button disabled={isLoading} onClick={handleLoadMore}>
              Догрузить
            </button>
          </S.Container>
        </div>
      ) : (
        <div>Ошибка</div>
      )}
    </div>
  )
}
