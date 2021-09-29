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
  grid-area: c;
`
const Hat = styled.div`
  background: linear-gradient(to bottom, #cfe7fa 0%, #6393c1 100%);
  height: 100px;
`
const Avatar = styled.img`
  height: 100px;
  width: 100%;
`
export default Profile
