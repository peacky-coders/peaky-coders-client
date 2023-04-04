import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 48px;
  padding: 8px 16px;

  background-color: ${({ theme }) => theme.colors.onyx};
`
