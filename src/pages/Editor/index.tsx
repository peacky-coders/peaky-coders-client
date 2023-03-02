import MDEditor from '@uiw/react-md-editor'
import { useState } from 'react'

import * as S from './styles'

export const Editor = () => {
  const [editorValue, setEditorValue] = useState('')

  const handleChangeEditorValue = (value: string | undefined) => {
    setEditorValue(value || '')
  }

  return (
    <S.Wrapper>
      <MDEditor height={800} value={editorValue} onChange={handleChangeEditorValue} />
    </S.Wrapper>
  )
}
