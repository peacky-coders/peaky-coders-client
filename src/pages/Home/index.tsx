import { useMutation } from '@tanstack/react-query'
import { useLayoutEffect, useState, useEffect, useCallback } from 'react'

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

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return
    }

    mutate({ limit: articlesLimit, page: articlesPage })
  }, [articlesPage, mutate])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useLayoutEffect(() => {
    mutate({ page: 1, limit: articlesLimit })
    return () => {
      setArticles([])
      setArticlesPage(1)
    }
  }, [mutate])

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
            {/* <button disabled={isLoading} onClick={handleLoadMore}>
              Догрузить
            </button> */}
          </S.Container>
        </div>
      ) : (
        <div>Ошибка</div>
      )}
    </div>
  )
}
