import styled from 'styled-components'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import Content from './sections/sectionContent'
import Header from './sections/sectionHeader'
import Menu from './sections/sectionNavigation'
import { primaryGrey } from './theme/colors'

const App = ({ store }) => (
  <Router>
    <Switch>
      <AppWrapper>
        <Menu />
        <MainContainer>
          <Header />
          <Content
            state={store.getState()}
            dispatch={store.dispatch.bind(store)}
          />
        </MainContainer>
      </AppWrapper>
    </Switch>
  </Router>
)

const AppWrapper = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${primaryGrey};
  min-width: 990px;
`
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100vw;
`

export default App
