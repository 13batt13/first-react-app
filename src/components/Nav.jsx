import styled from 'styled-components'

const Nav = () => {
  const i18n = {
    profile: 'Profile',
    messages: 'Messages',
    news: 'News',
    music: 'Music',
    settings: 'Settings',
  }

  return (
    <MenuContainer>
      <MenuItem>
        <MenuLink href="/profile">Profile</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink href="/messages">Messages</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink href="/news">News</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink href="/music">Music</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink href="/settings">Settings</MenuLink>
      </MenuItem>
    </MenuContainer>
  )
}

const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  width: 15%;
  min-width: 100px;
  height: 100%;
  background-color: rgba(116, 171, 253, 0.301);
  padding: 15px;
`
const MenuItem = styled.div`
  margin-bottom: 15px;
  :last-child {
    margin-bottom: 0;
  }
`
const MenuLink = styled.a`
  text-decoration: none;
  color: black;
  :hover {
    color: darkgray;
  }
`
export default Nav
