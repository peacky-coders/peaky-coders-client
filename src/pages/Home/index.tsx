import { useMutation } from '@tanstack/react-query'
import { useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
          {articles.map((article) => (
            <div key={article.id}>
              <img src={article.image} alt='article' />
              <span>{article.title}</span>
              <span>{article.text}</span>
              <Link to={`article/${article.id}`}>перейти</Link>
            </div>
          ))}
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
