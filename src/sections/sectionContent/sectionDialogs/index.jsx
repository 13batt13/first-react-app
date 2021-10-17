import styled from 'styled-components'

import {secondaryGrey,} from 'src/theme/colors'
import { text1_16 } from 'src/theme/fonts'

const Dialogs = () => {
  return (
  <Root>
    <DialogsList>Dialogs</DialogsList>
    <MessagesList>Messages</MessagesList>
  </Root>
  )
}

const Root = styled.div`
  display: flex;
  width: 100%;
`
const DialogsList = styled.div`
  display: flex;
  flex-direction: column;
  width: 318px;
  ${ text1_16 };
  color: ${secondaryGrey};
`
const MessagesList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${ text1_16 };
  color: ${secondaryGrey};
`

export default Dialogs
