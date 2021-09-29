import styled from 'styled-components'
import logo from '../images/logo.svg'

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} />
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  background-color: rgba(70, 161, 236, 0.377);
`
const Logo = styled.img`
  width: 58px;
`

export default Header
