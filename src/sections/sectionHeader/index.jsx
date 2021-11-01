import { useDispatch, useSelector } from 'react-redux'
import { setIsShowLoginModal, authLogout } from 'src/features/auth/authSlice'
import styled from 'styled-components'

import AvatarIcon from '../../assets/icons/AvatarIcon'
import { primaryCian, primaryLightGrey } from '../../theme/colors'

const Header = () => {
  const { loading, isAuth } = useSelector(({ auth }) => ({
    loading: auth.loading,
    isAuth: !!auth.data.id,
  }))
  const handleAuth = () => {
    dispatch(isAuth ? authLogout() : setIsShowLoginModal(true))
  }
  const dispatch = useDispatch()
  return (
    <Root>
      <LoginButton disabled={loading} onClick={handleAuth}>
        {isAuth ? 'Logout' : 'Login'}
      </LoginButton>
      <AvatarIcon width="40" height="40" fill={primaryLightGrey} />
    </Root>
  )
}
const Root = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 12px;
  height: 64px;
  width: 100%;
  background-color: ${primaryCian};
`
const LoginButton = styled.button`
  margin-right: 10px;
`
const TextInput = styled.input`
  margin-right: 10px;
  width: 100px;
`
export default Header
