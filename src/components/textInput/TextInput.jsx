import React from 'react'
import styled from 'styled-components'

const TextInput = ({ value, handleChange, handleKeyPress }) => {
  return (
    <StyledTextArea
      value={value}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
    />
  )
}

const StyledTextArea = styled.textarea`
  width: 100%;
`
export default TextInput
