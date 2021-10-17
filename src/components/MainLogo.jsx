import styled from 'styled-components'

import LogoIcon from '../assets/icons/LogoIcon'
import { primaryCian } from '../theme/colors'
import { text1_36 } from '../theme/fonts'

const MainLogo = () => {
  const siteName = 'Social Network'
  return (
    <Root>
      <LogoIcon />
      <SiteName>{siteName}</SiteName>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 112px;
  width: 100%;
  padding: 24px 15px;
`
const SiteName = styled.div`
  margin-left: 3px;
  width: 100px;
  ${text1_36};
  color: ${primaryCian};
  user-select: none;
`

export default MainLogo
