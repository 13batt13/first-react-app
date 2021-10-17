import styled from 'styled-components'

import NavigationLink from './NavigationLink'
import ProfileIcon from '../../assets/icons/ProfileIcon'
import MessagesIcon from '../../assets/icons/MessagesIcon'
import NewsIcon from '../../assets/icons/NewsIcon'
import SettingsIcon from '../../assets/icons/SettingsIcon'

const Navigation = () => {
  const i18n = {
    profile: 'Profile',
    messages: 'Messages',
    news: 'News',
    settings: 'Settings',
    logout: 'Logout',
  }

  return (
    <Root>
      <NavigationLink Icon={ProfileIcon} path="/profile" title={i18n.profile} />
      <NavigationLink
        Icon={MessagesIcon}
        path="/messages"
        title={i18n.messages}
      />
      <NavigationLink Icon={NewsIcon} path="/news" title={i18n.news} />
      <NavigationLink
        Icon={SettingsIcon}
        path="/settings"
        title={i18n.settings}
      />
    </Root>
  )
}

const Root = styled.nav`
  display: flex;
  flex-direction: column;
  width: 272px;
`

export default Navigation
