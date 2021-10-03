import styled from 'styled-components'

import logo from '../../images/logo.svg'
import { primaryLightGrey } from '../../theme/colors'
import Navigation from './Navigation'

const Menu = () => (
  <Root>
    <LogoContainer>
      <Logo src={logo} />
    </LogoContainer>
    <Navigation />
  </Root>
)

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 304px;
  height: 100%;
  background-color: ${primaryLightGrey};
  padding: 15px;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
`
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 126px;
`
const Logo = styled.img`
  width: 58px;
`
export default Menu
