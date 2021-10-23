import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { followUser, setUsers } from 'src/features/users/usersSlice'
import * as axios from 'axios'

import { secondaryGrey } from 'src/theme/colors'
import { text1_16 } from 'src/theme/fonts'

const Users = () => {
  const users = useSelector(({ users }) => users.users)
  const dispatch = useDispatch()

  const handleGetUsers = () => {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        if (response.status === 200) {
          dispatch(setUsers(response.data.items))
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const usersArray = users?.map((user) => (
    <User key={user.id}>
      <UserName>{user.name}</UserName>
      <FollowBtn
        onClick={() => {
          dispatch(followUser(user.id))
        }}
      >
        {user.followed ? 'Unfollow' : 'Follow'}
      </FollowBtn>
    </User>
  ))
  return (
    <Root>
      <GetUsersBtn onClick={handleGetUsers}>Get Users</GetUsersBtn>
      <UsersList>{usersArray}</UsersList>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 85vh;
`
const UsersList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${text1_16};
  color: ${secondaryGrey};
`
const User = styled.div`
  display: flex;
  flex-direction: column;
`
const UserName = styled.div``
const FollowBtn = styled.button`
  width: 100px;
`
const GetUsersBtn = styled.button`
  width: 100px;
`

export default Users
