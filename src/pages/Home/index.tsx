import { useMutation } from '@tanstack/react-query'
import { useLayoutEffect, useState } from 'react'



import { UserArticle } from 'components/ArticleCard'

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
    ...articlesAPI.getArticles(),
    onSuccess: handleMutationGetArticlesSuccess,
  })

  useLayoutEffect(() => {
    mutate({ page: 1, limit: articlesLimit })
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
          <UserArticle articles={articles} />
          <button disabled={isLoading} onClick={handleLoadMore}>
            Догрузить
          </button>
        </div>
      ) : (
        <div>Ошибка</div>
      )}
    </div>
  )
}
