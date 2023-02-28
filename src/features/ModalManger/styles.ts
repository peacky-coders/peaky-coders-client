import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

export const Inner = styled.div`
  position: absolute;
  z-index: 10;

  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 50%);
`
