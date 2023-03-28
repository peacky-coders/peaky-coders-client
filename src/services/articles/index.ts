import ky from 'ky'

import { T_GetArticleParams, T_GetArticlesParams } from './models/params'

import { I_Article } from 'models/article'

export const articlesAPI = {
  getArticles: async ({ cursor, limit }: T_GetArticlesParams): Promise<I_Article[]> => {
    const searchParams = new URLSearchParams()
    searchParams.append('cursor', String(cursor))
    searchParams.append('limit', String(limit))
    const res = await ky.get(`${import.meta.env.VITE_SERVER_API}/articles`, { searchParams })
    return res.json()
  },
  getArticle: async ({ articleId }: T_GetArticleParams): Promise<I_Article> => {
    const res = await ky.get(`${import.meta.env.VITE_SERVER_API}/articles/${articleId}`)
    return res.json()
  },
}
