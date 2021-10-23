import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { addMessage, changeMessage } from 'src/features/dialogs/dialogsSlice'

import TextInput from 'src/components/TextInput'
import { secondaryGrey } from 'src/theme/colors'
import { text1_16 } from 'src/theme/fonts'

const Dialogs = () => {
  const { messages, messageText } = useSelector(({ dialogs }) => ({
    messages: dialogs.messages,
    messageText: dialogs.messageText,
  }))
  const dispatch = useDispatch()

  const messagesArray = messages?.map((item) => (
    <Message key={item.id}>{item.message}</Message>
  ))
  return (
    <Root>
      <DialogsList>Dialogs</DialogsList>
      <MessagesContainer>
        <MessagesList>
          Messages
          {messagesArray}
        </MessagesList>
        <TextInput
          dispatch={dispatch}
          text={messageText}
          actionOnEnter={addMessage}
          actionOnChange={changeMessage}
        />
      </MessagesContainer>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  width: 100%;
  height: 85vh;
`
const DialogsList = styled.div`
  display: flex;
  flex-direction: column;
  width: 318px;
  ${text1_16};
  color: ${secondaryGrey};
`
const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex: 1;
`
const MessagesList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${text1_16};
  color: ${secondaryGrey};
`
const Message = styled.div``

export default Dialogs
