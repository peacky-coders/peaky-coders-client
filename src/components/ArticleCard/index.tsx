import { Link } from 'react-router-dom'

import avatarMedia from './avatar.png'
import placeholderMedia from './placeholder.png'
import * as S from './styles'

import { I_Article } from 'models/article'

interface I_ArticleCardProps {
  article: I_Article
}

export const ArticleCard = ({ article }: I_ArticleCardProps) => (
  <S.Card key={article.id}>
    <Link to={`article/${article.id}`}>
      <S.Image alt='article' src={placeholderMedia} />
    </Link>

    <Link to={`article/${article.id}`}>
      <S.Title>{article.title}</S.Title>
    </Link>
    <S.Tags>
      <span>React</span>
      <span>Styled Components</span>
      <span>TypeScript</span>
    </S.Tags>
    <S.AuthorWrapper>
      <S.AuthorAvatar src={avatarMedia} />
      <div>
        <div>Yaroslav Webowich</div>
        <div>11.03.2022</div>
      </div>
    </S.AuthorWrapper>
    <div>
      <button>Быстрый просмотр</button>
      <button>Читать позже</button>
      <button>В избранное</button>
    </div>
  </S.Card>
)
