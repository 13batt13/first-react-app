import styled from 'styled-components'

import Navigation from 'src/sections/sectionNavigation/Navigation'
import MainLogo from 'src/components/MainLogo'
import { primaryLightGrey } from 'src/theme/colors'

const Menu = () => (
  <Root>
    <MainLogo />
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
  padding: 0 15px;
`

export default Menu
