import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-width: 300px;
  max-width: 300px;
  height: 425px;
  padding: 10px;

  font-size: 18px;

  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px #0000000a;
`

export const Title = styled.span`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`

export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`

export const Tags = styled.div`
  display: flex;
  gap: 8px;

  span {
    cursor: pointer;

    padding: 4px;

    font-size: 12px;

    background-color: #eff2f3;
    border-radius: 8px;
  }
`

export const AuthorWrapper = styled.div`
  display: flex;
`

export const AuthorAvatar = styled.img`
  width: 57px;
  height: 57px;
`
