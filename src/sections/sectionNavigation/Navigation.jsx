import styled from 'styled-components'
import { useSelector } from 'react-redux'

import NavigationLink from 'src/sections/sectionNavigation/NavigationLink'
import ProfileIcon from 'src/assets/icons/ProfileIcon'
import MessagesIcon from 'src/assets/icons/MessagesIcon'
import UsersIcon from 'src/assets/icons/UsersIcon'
import NewsIcon from 'src/assets/icons/NewsIcon'
import SettingsIcon from 'src/assets/icons/SettingsIcon'

const Navigation = () => {
  const i18n = {
    profile: 'Profile',
    messages: 'Messages',
    news: 'News',
    users: 'Users',
    settings: 'Settings',
    logout: 'Logout',
  }
  const isAuth = useSelector(({ auth }) => Boolean(auth.data.id))
  return (
    <Root>
      {isAuth && (
        <NavigationLink
          Icon={ProfileIcon}
          path="/profile"
          title={i18n.profile}
        />
      )}
      <NavigationLink
        Icon={MessagesIcon}
        path="/messages"
        title={i18n.messages}
      />
      <NavigationLink Icon={NewsIcon} path="/news" title={i18n.news} />
      <NavigationLink Icon={UsersIcon} path="/users" title={i18n.users} />
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
