import styled from 'styled-components'
import AvatarIcon from 'src/assets/icons/AvatarIcon'

const UserAva = ({ avaUrl }) => (
  <AvaContainer>
    {avaUrl ? (
      <Avatar src={avaUrl} alt="User Avatar" />
    ) : (
      <AvatarIcon height="64" width="64" />
    )}
  </AvaContainer>
)

const AvaContainer = styled.div``
const Avatar = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  object-fit: cover;
`

export default UserAva
