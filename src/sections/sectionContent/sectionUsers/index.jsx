import { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { followUser, fetchUsers } from 'src/features/users/usersSlice'

import { secondaryGrey } from 'src/theme/colors'
import { text1_16 } from 'src/theme/fonts'

const Users = () => {
  const { users, loading, error } = useSelector(({ users }) => users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>{error}</div>
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

export default Users
