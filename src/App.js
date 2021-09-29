import styled from 'styled-components'

import Header from './components/Header'
import Nav from './components/Nav'
import Profile from './components/Profile'

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Nav />
      <Profile />
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  width: 1200px;
  margin: 0px auto;
  display: grid;
  grid-template-areas:
    'h h'
    'n c';
  grid-template-rows: 60px 1fr;
  grid-template-columns: 2fr 10fr;
  grid-gap: 10px;
`
export default App
