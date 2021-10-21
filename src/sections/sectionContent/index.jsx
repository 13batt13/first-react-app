import styled from 'styled-components'
import { Route } from 'react-router-dom'

import Profile from 'src/sections/sectionContent/sectionProfile'
import Dialogs from 'src/sections/sectionContent/sectionDialogs'

const Content = ({ state, dispatch }) => (
  <Root>
    <Route path="/messages">
      <Dialogs />
    </Route>
    <Route path="/profile" exact>
      <Profile
        posts={state.posts}
        dispatch={dispatch}
        postText={state.postText}
        phoneNumber={state.phoneNumber}
      />
    </Route>
  </Root>
)

const Root = styled.div`
  padding-left: 15px;
`
export default Content
