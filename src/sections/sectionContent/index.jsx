import styled from 'styled-components'
import { Route } from 'react-router-dom'

import Profile from 'src/sections/sectionContent/sectionProfile'
import Dialogs from 'src/sections/sectionContent/sectionDialogs'

const Content = ({ state, addPost, changePostText, changePhoneNumber }) => (
  <Root>
    <Route path="/messages">
      <Dialogs />
    </Route>
    <Route path="/profile" exact>
      <Profile
        posts={state.posts}
        addPost={addPost}
        postText={state.postText}
        changePostText={changePostText}
        changePhoneNumber={changePhoneNumber}
        phoneNumber={state.phoneNumber}
      />
    </Route>
  </Root>
)

const Root = styled.div`
  padding: 0 15px;
`
export default Content