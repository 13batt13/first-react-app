import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import { authLogin, setIsShowLoginModal } from 'src/features/auth/authSlice'

import CloseIcon from 'src/assets/icons/CloseIcon'
import { primaryLightGrey, primaryGrey } from 'src/theme/colors'

const Login = () => {
  const loading = useSelector(({ auth }) => auth.loading)
  const dispatch = useDispatch()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = ({ email, password }) =>
    dispatch(authLogin({ email, password }))

  const handleClose = () => {
    dispatch(setIsShowLoginModal(false))
  }

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
        <InputContainer onSubmit={handleSubmit(onSubmit)}>
          <FieldWrapper>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: 'Required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Not a valid email format',
                },
              }}
              render={({ field }) => (
                <TextInput
                  type="text"
                  placeholder="Email"
                  hasError={!!errors?.email?.message}
                  {...field}
                />
              )}
            />
            {errors?.email?.message && <Error>{errors?.email?.message}</Error>}
          </FieldWrapper>
          <FieldWrapper>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: 'Required',
              }}
              render={({ field }) => (
                <TextInput
                  type="password"
                  placeholder="Password"
                  hasError={!!errors?.password?.message}
                  {...field}
                />
              )}
            />
            {errors?.password?.message && (
              <Error>{errors?.password?.message}</Error>
            )}
          </FieldWrapper>
          <LoginButton type="submit" disabled={loading}>
            Login
          </LoginButton>
        </InputContainer>
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
const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const TextInput = styled.input`
  width: 300px;
  height: 35px;
  border-radius: 10px;
  padding-left: 10px;
  border: 1px solid gray;
  border-color: ${({ hasError }) => (hasError ? 'red' : 'gray')};
  background-color: ${primaryLightGrey};
`

const LoginButton = styled.button`
  width: 100px;
  height: 35px;
  border-radius: 10px;
  border: 1px solid gray;

  background-color: ${primaryLightGrey};
`
const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 70px;
`
const Error = styled.span`
  padding-left: 10px;
  padding-top: 3px;
  color: red;
`

export default Login
