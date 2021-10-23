import React from 'react'
import styled from 'styled-components'

const TextInput = ({ text, dispatch, actionOnChange, actionOnEnter }) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      dispatch(actionOnEnter())
    }
  }
  return (
    <StyledTextArea
      value={text}
      onChange={({ currentTarget }) => {
        dispatch(actionOnChange(currentTarget.value))
      }}
      onKeyPress={handleKeyPress}
    />
  )
}

const StyledTextArea = styled.textarea`
  width: 100%;
`
export default TextInput
