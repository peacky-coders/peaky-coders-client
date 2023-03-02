import { useInfiniteQuery } from '@tanstack/react-query'
import { useState, useEffect, useCallback } from 'react'

import * as S from './styles'

import { ArticleCard } from 'components/ArticleCard'
import { t } from 'languages'
import { articlesAPI } from 'services'

const articlesLimit = 10

export const Home = () => {
  const [articlesPage, setArticlesPage] = useState(1)

  const { isFetchingNextPage, data, fetchNextPage, status } = useInfiniteQuery({
    queryFn: ({ pageParam = 1 }) =>
      articlesAPI.getArticles({ limit: articlesLimit, page: pageParam }),
    queryKey: ['articles', 'infinite'],
  })

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return
    }
    setArticlesPage((prev) => ++prev)
    fetchNextPage({ pageParam: articlesPage + 1 })
  }, [articlesPage, fetchNextPage])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  console.log('articlesPage', articlesPage)

  return (
    <div>
      {t('page.home.title')}

      {status === 'loading' && <div>Загрузка...</div>}
      {status === 'error' && <div>Ошибка</div>}
      {status === 'success' && (
        <div>
          <S.Container>
            {data.pages.flat().map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}

            {isFetchingNextPage && <div>Догрузка...</div>}
          </S.Container>
        </div>
      )}
    </div>
  )
}
