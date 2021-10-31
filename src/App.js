import styled from 'styled-components'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { authMe } from 'src/features/auth/authSlice'

import Content from 'src/sections/sectionContent'
import Header from 'src/sections/sectionHeader'
import Menu from 'src/sections/sectionNavigation'
import ErrorAlert from 'src/components/ErrorAlert'
import spinner from 'src/assets/Spinner.gif'
import { primaryGrey } from 'src/theme/colors'

const App = () => {
  const { isShowSharedError, isInitialized } = useSelector(
    ({ shared, auth }) => ({
      isShowSharedError: shared.isShowSharedError,
      isInitialized: auth.initialized,
    }),
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(authMe())
  }, [dispatch])

  if (!isInitialized) {
    return (
      <SpinnerContainer>
        <img src={spinner} alt="Spinner" />
      </SpinnerContainer>
    )
  }
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
  padding-top: 24px;
  height: 100%;
  width: 100vw;
`
const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`
export default App
