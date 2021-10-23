import styled from 'styled-components'
import { Route } from 'react-router-dom'

import Profile from 'src/sections/sectionContent/sectionProfile'
import Dialogs from 'src/sections/sectionContent/sectionDialogs'

const Content = () => (
  <Root>
    <Route path="/messages">
      <Dialogs />
    </Route>
    <Route path="/profile" exact>
      <Profile />
    </Route>
  </Root>
)

const Root = styled.div`
  padding-left: 15px;
`
export default Content
