import styled from 'styled-components'

import Header from './components/Header'
import Nav from './components/Nav'
import Profile from './components/Profile'

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <MainContainer>
        <Nav />
        <Profile />
      </MainContainer>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 150px;
  height: 100vh;
`
const MainContainer = styled.div`
  display: flex;
  height: 100%;
`
export default App
