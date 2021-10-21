import React from 'react'
import styled from 'styled-components'

const TextInput = ({ text, changeText, type }) => (
  <NewPostText
    value={text}
    onChange={({ currentTarget }) => {
      changeText({
        type,
        text: currentTarget.value,
      })
    }}
  />
)

const NewPostText = styled.textarea`
  width: 100%;
`
export default TextInput
