import styled from 'styled-components'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { authMe } from 'src/features/auth/authSlice'

import Content from 'src/sections/sectionContent'
import Header from 'src/sections/sectionHeader'
import Menu from 'src/sections/sectionNavigation'
import ErrorAlert from 'src/components/ErrorAlert'
import { primaryGrey } from 'src/theme/colors'

const App = () => {
  const isShowSharedError = useSelector(
    ({ shared }) => shared.isShowSharedError,
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(authMe())
  }, [])

  return (
    <Router>
      <Switch>
        <AppWrapper>
          {isShowSharedError && <ErrorAlert />}
          <Menu />
          <MainContainer>
            <Header />
            <Content />
          </MainContainer>
        </AppWrapper>
      </Switch>
    </Router>
  )
}

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
