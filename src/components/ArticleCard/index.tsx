import { Link } from 'react-router-dom'

import * as S from './styles'

import { I_Article } from 'models/article'

interface I_ArticleCardProps {
  article: I_Article
}

export const ArticleCard = ({ article }: I_ArticleCardProps) => (
  <S.Card key={article.id}>
    <S.Title>{article.title}</S.Title>
    <S.ArticleText>
      {article.content.length >= 300 ? article.content.substring(0, 300) + '...' : article.content}
    </S.ArticleText>
    <Link to={`article/${article.id}`}>перейти</Link>
  </S.Card>
)
