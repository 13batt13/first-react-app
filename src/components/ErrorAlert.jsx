import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { closeSharedError } from 'src/features/sharedSlice'

const ErrorAlert = () => {
  const errorText = useSelector(({ shared }) => shared.sharedError)
  const dispatch = useDispatch()

  return (
    <MainContainer>
      <ErrorModal>
        <ErrorTextContainer>
          <ErrorText>{errorText}</ErrorText>
        </ErrorTextContainer>
        <CloseBtn
          onClick={() => {
            dispatch(closeSharedError())
          }}
        >
          Close
        </CloseBtn>
      </ErrorModal>
    </MainContainer>
  )
}
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
`
const ErrorModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 300px;
  border-radius: 20px;
  background-color: #fff;
`
const ErrorTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`
const ErrorText = styled.div``
const CloseBtn = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 5px;
  background-color: #fff;
`

export default ErrorAlert
