import React from 'react'
import TextInput from 'src/components/textInput/TextInput'

const TextInputContainer = ({
  text,
  dispatch,
  actionOnChange,
  actionOnEnter,
}) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      dispatch(actionOnEnter())
    }
  }
  const handleChange = ({ currentTarget }) => {
    dispatch(actionOnChange(currentTarget.value))
  }
  return (
    <TextInput
      value={text}
      handleChange={handleChange}
      handleKeyPress={handleKeyPress}
    />
  )
}

export default TextInputContainer
