import styled from 'styled-components'
import { Link } from 'react-router-dom'

import messagesicon from '../../assets/icons/messages.svg'
import newsicon from '../../assets/icons/news.svg'
import settingsicon from '../../assets/icons/settings.svg'
import { secondaryGrey } from '../../theme/colors'
import { text1_16 } from '../../theme/fonts'
import Home from '../../assets/icons/Home'

const Navigation = () => {
  const i18n = {
    profile: 'Profile',
    messages: 'Messages',
    news: 'News',
    settings: 'Settings',
  }

  return (
    <MenuContainer>
      <MenuItem>
        <Home />
        <MenuLink to="/profile">{i18n.profile}</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuIcon src={messagesicon} />
        <MenuLink to="/messages">{i18n.messages}</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuIcon src={newsicon} />
        <MenuLink to="/news">{i18n.news}</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuIcon src={settingsicon} />
        <MenuLink to="/settings">{i18n.settings}</MenuLink>
      </MenuItem>
    </MenuContainer>
  )
}

const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  width: 272px;
  height: 100%;
`
const MenuItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding-left: 15px;
  :last-child {
    margin-bottom: 0;
  }
`
const MenuIcon = styled.img``
const MenuLink = styled(Link)`
  margin-left: 20px;
  text-decoration: none;
  ${text1_16};
  color: ${secondaryGrey};
  :hover {
    color: darkgray;
  }
`

export default Navigation
