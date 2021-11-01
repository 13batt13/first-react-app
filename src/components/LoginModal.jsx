import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import {
  authLogin,
  setInputEmail,
  setInputPassword,
  setIsShowLoginModal,
} from 'src/features/auth/authSlice'

import CloseIcon from 'src/assets/icons/CloseIcon'
import { primaryLightGrey, primaryGrey } from 'src/theme/colors'

const Login = () => {
  const { email, password, loading } = useSelector(({ auth }) => ({
    email: auth.inputEmail,
    password: auth.inputPassword,
    loading: auth.loading,
  }))
  const handleAuth = () => {
    dispatch(authLogin({ email, password }))
  }
  const handleClose = () => {
    dispatch(setIsShowLoginModal(false))
  }
  const dispatch = useDispatch()
  return (
    <Root onClick={handleClose}>
      <LoginContainer
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <CloseBtn onClick={handleClose}>
          <CloseIcon />
        </CloseBtn>
        <InputContainer>
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
        </InputContainer>
        <LoginButton disabled={loading} onClick={handleAuth}>
          Login
        </LoginButton>
      </LoginContainer>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
`
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 300px;
  width: 400px;
  border-radius: 30px;
  background-color: ${primaryGrey};
  box-shadow: 0 0 30px gray;
`
const CloseBtn = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
`
const TextInput = styled.input`
  width: 300px;
  height: 35px;
  border-radius: 10px;
  padding-left: 10px;
  border: 1px solid gray;
  :not(:last-child) {
    margin-bottom: 30px;
  }
  background-color: ${primaryLightGrey};
`

const LoginButton = styled.button`
  width: 100px;
  height: 35px;
  border-radius: 10px;
  border: 1px solid gray;

  background-color: ${primaryLightGrey};
`

export default Login
