import styled from 'styled-components'
import { Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Profile from 'src/sections/sectionContent/sectionProfile'
import Dialogs from 'src/sections/sectionContent/sectionDialogs'
import Users from 'src/sections/sectionContent/sectionUsers'

const Content = () => {
  const isAuth = useSelector(({ auth }) => Boolean(auth.data.id))
  return (
    <Root>
      {isAuth && (
        <Route path="/profile" exact>
          <Profile />
        </Route>
      )}
      <Route path="/user/:userId" exact>
        <Profile />
      </Route>
      <Route path="/messages">
        <Dialogs />
      </Route>
      <Route path="/users" exact>
        <Users />
      </Route>
    </Root>
  )
}

const Root = styled.div`
  padding-left: 15px;
`
export default Content
