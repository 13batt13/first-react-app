import styled from 'styled-components'

import AvatarIcon from '../../assets/icons/AvatarIcon'
import { primaryCian, primaryLightGrey } from '../../theme/colors'

const Header = () => (
  <Root>
    <AvatarIcon width="40" height="40" fill={primaryLightGrey} />
  </Root>
)
const Root = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 12px;
  margin: 24px 0 10px 0;
  height: 64px;
  width: 100%;
  background-color: ${primaryCian};
`
export default Header
