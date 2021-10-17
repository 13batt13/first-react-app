import React from 'react'
import styled from 'styled-components'

const TextInput = ({ text, changeText }) => (
    <NewPostText
      value={text}
      onChange={({ currentTarget }) => {
        changeText(currentTarget.value)
      }}
    />
  )

const NewPostText = styled.textarea`
  width: 100%;
`
export default TextInput
