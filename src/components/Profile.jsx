import styled from 'styled-components'
import avatar from '../images/avatar.svg'

const Profile = () => {
  return (
    <Content>
      <Hat />

      <Avatar src={avatar} />

      <div></div>
    </Content>
  )
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const Hat = styled.div`
  background: linear-gradient(to bottom, #cfe7fa 0%, #6393c1 100%);
  height: 100px;
  width: 100%;
`
const Avatar = styled.img`
  height: 100px;
  width: 100px;
  margin-top: 10px;
`
export default Profile
