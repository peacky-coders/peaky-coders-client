import styled from 'styled-components'

export const Parent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;

  min-width: 800px;
  max-width: 800px;
  height: 600px;
  margin: auto;
  padding: 10px;

  background-color: rgba(0, 100, 0, 50%);
  border-radius: 10px;
`
export const ProfileInf = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 300px;
`
export const Article = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 450px;
`

export const Child = styled.div`
  margin: 20px;
  padding: 10px;
`
