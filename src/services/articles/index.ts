import ky from 'ky'

import { T_GetArticleParams, T_GetArticlesParams } from './models/params'

import { I_Article } from 'models/article'

export const articlesAPI = {
  getArticles: async ({ page, limit }: T_GetArticlesParams): Promise<I_Article[]> => {
    const res = await ky.get(
      `https://63e24fb9ad0093bf29ccec4d.mockapi.io/articles?page=${page}&limit=${limit}`,
    )
    return res.json()
  },
  getArticle: async ({ articleId }: T_GetArticleParams): Promise<I_Article> => {
    const res = await ky.get(`https://63e24fb9ad0093bf29ccec4d.mockapi.io/articles/${articleId}`)
    return res.json()
  },
}
