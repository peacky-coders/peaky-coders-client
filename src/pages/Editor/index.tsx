import MDEditor from '@uiw/react-md-editor'
import { useState } from 'react'

import * as S from './styles'

export const Editor = () => {
  const [editorValue, setEditorValue] = useState('')

  const handleChangeEditorValue = (value: string | undefined) => {
    setEditorValue(value || '')
  }

  return (
    <>
      <S.Parent>
        <S.Title>Автор</S.Title>
        <label htmlFor='articleName'>Название</label>
        <S.Input name='articleName'></S.Input>
        <label htmlFor='imagine'>Картнка</label>
        <S.Input name='imagine'></S.Input>
      </S.Parent>
      <S.Wrapper>
        <MDEditor height={800} value={editorValue} onChange={handleChangeEditorValue} />
      </S.Wrapper>
    </>
  )
}
