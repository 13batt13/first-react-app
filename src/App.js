import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Menu from './sections/sectionNavigation'
import Profile from './components/Profile'
import Dialogs from './components/Dialogs'
import { primaryGrey } from './theme/colors'

const App = () => (
  <Router>
    <Switch>
      <AppWrapper>
        <Menu />
        <MainContainer>
          <Header />
          <Route path="/messages">
            <Dialogs />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </MainContainer>
      </AppWrapper>
    </Switch>
  </Router>
)

const AppWrapper = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${primaryGrey};
`
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
export default App
