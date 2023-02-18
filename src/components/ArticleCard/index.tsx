import { Link } from 'react-router-dom'

import * as S from './styles'

import { I_Article } from 'models/article'

interface I_ArticleCardProps {
  article: I_Article
}

export const ArticleCard = ({ article }: I_ArticleCardProps) => (
  <S.Card key={article.id}>
    <S.Avatar src={article.image} alt='article' />
    <S.Title>{article.title}</S.Title>
    <S.ArticleText>
      {article.text.length >= 300 ? article.text.substring(0, 300) + '...' : article.text}
    </S.ArticleText>
    <Link to={`article/${article.id}`}>перейти</Link>
  </S.Card>
)
