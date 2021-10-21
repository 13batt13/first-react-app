import React from 'react'
import styled from 'styled-components'

const TextInput = ({ text, dispatch, typeOnChange, typeOnEnter }) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      dispatch({ type: typeOnEnter })
    }
  }
  return (
    <StyledTextArea
      value={text}
      onChange={({ currentTarget }) => {
        dispatch({
          type: typeOnChange,
          text: currentTarget.value,
        })
      }}
      onKeyPress={handleKeyPress}
    />
  )
}

const StyledTextArea = styled.textarea`
  width: 100%;
`
export default TextInput
