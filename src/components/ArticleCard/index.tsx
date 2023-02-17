import { Link } from 'react-router-dom'

import { ArticleText, Avatar, Container, Parent, Title } from './styles'

import { I_Article } from 'models/article'

export const UserArticle = ({ articles }: { articles: I_Article[] }) => {
  console.log(articles)
  return (
    <Parent>
      {articles.map((article) => (
        <Container key={article.id}>
          <Avatar src={article.image} alt='article' />
          <Title>{article.title}</Title>
          <ArticleText>{article.text}</ArticleText>
          <Link to={`article/${article.id}`}>перейти</Link>
        </Container>
      ))}
    </Parent>
  )
}
