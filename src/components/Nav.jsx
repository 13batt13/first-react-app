import styled from 'styled-components'

const Nav = () => {
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
  grid-area: n;
  background-color: rgba(116, 171, 253, 0.301);
`
const MenuItem = styled.div``
const MenuLink = styled.a``
export default Nav
