import styled from 'styled-components'

export const Container = styled.div`
  background-color: grey;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

export const Title = styled.span`
  font-weight: 500;
  font-size: 40px;
  color: white;
  text-align: center;
`

export const Avatar = styled.img`
  width: 20px;
`

export const ArticleText = styled.span`
  font-weight: 300;
  font-size: 14px;
  color: #000;
`

export const Parent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
