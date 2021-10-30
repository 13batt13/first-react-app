import { useDispatch, useSelector } from 'react-redux'
import {
  authLogin,
  authLogout,
  setInputEmail,
  setInputPassword,
} from 'src/features/auth/authSlice'
import styled from 'styled-components'

import AvatarIcon from '../../assets/icons/AvatarIcon'
import { primaryCian, primaryLightGrey } from '../../theme/colors'

const Header = () => {
  const { email, password } = useSelector(({ auth }) => ({
    email: auth.inputEmail,
    password: auth.password,
  }))

  const dispatch = useDispatch()
  return (
    <Root>
      <LoginButton
        onClick={() => {
          dispatch(authLogin({ email, password }))
        }}
      >
        Login
      </LoginButton>
      <TextInput
        type="text"
        placeholder="Email"
        value={email}
        onChange={({ currentTarget }) => {
          dispatch(setInputEmail(currentTarget.value))
        }}
      />
      <TextInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={({ currentTarget }) => {
          dispatch(setInputPassword(currentTarget.value))
        }}
      />
      <LoginButton
        onClick={() => {
          dispatch(authLogout())
        }}
      >
        Logout
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
