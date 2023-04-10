import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import * as S from './styles'

import { ArticleCard } from 'components/ArticleCard'
import { articlesAPI } from 'services'

const articlesLimit = 12

export const Home = () => {
  const { ref, inView } = useInView()

  const { isFetchingNextPage, data, fetchNextPage, status, hasNextPage } = useInfiniteQuery({
    queryFn: ({ pageParam = '' }) =>
      articlesAPI.getArticles({ limit: articlesLimit, cursor: pageParam }),
    queryKey: ['articles', 'infinite'],
    getNextPageParam: (lastPage) => lastPage.at(-1)?.id ?? false,
  })

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [fetchNextPage, hasNextPage, inView])

  return (
    <div>
      {status === 'loading' && <div>Загрузка...</div>}
      {status === 'error' && <div>Ошибка</div>}
      {status === 'success' && (
        <>
          <S.Container>
            {data.pages.flat().map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}

            {isFetchingNextPage && <div>Догрузка...</div>}
          </S.Container>
          <div ref={ref} />
        </>
      )}
    </div>
  )
}
