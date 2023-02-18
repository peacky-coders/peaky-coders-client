import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  min-width: 556px;
  max-width: 556px;
  height: 380px;
  padding: 10px;

  background-color: grey;
  border-radius: 10px;
`

export const Title = styled.span`
  font-size: 40px;
  font-weight: 500;
  color: white;
  text-align: center;
`

export const Avatar = styled.img`
  width: 20px;
`

export const ArticleText = styled.span`
  font-size: 14px;
  font-weight: 300;
  color: #000;
`
