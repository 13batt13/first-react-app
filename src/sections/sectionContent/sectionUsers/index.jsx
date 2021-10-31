import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { followUser, fetchUsers } from 'src/features/users/usersSlice'
import { NavLink } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'

import UserAva from 'src/components/UserAva'
import { secondaryGrey } from 'src/theme/colors'
import { text1_16 } from 'src/theme/fonts'

const Users = () => {
  const users = useSelector(({ users }) => users.users)
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)

  useEffect(() => {
    dispatch(fetchUsers({ count: 20, page }))
  }, [dispatch, page])

  const fetchMoreUsers = () => {
    setPage(page + 1)
  }

  const usersArray = users?.map((user) => (
    <User key={user.id}>
      <NavLink to={`/user/${user.id}`}>
        <UserAva avaUrl={user.photos?.small} />
      </NavLink>
      <Info>
        <UserName>{user.name}</UserName>
        <FollowBtn
          onClick={() => {
            dispatch(followUser(user.id))
          }}
        >
          {user.followed ? 'Unfollow' : 'Follow'}
        </FollowBtn>
      </Info>
    </User>
  ))
  return (
    <Root>
      <UsersList id="scrollContent">
        <InfiniteScroll
          dataLength={usersArray.length}
          next={fetchMoreUsers}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollContent"
          scrollThreshold={0.9}
        >
          {usersArray}
        </InfiniteScroll>
      </UsersList>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 85vh;
  padding-top: 10px;
`
const UsersList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  ${text1_16};
  color: ${secondaryGrey};
`
const User = styled.div`
  display: flex;
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`
const UserName = styled.div``
const FollowBtn = styled.button`
  width: 100px;
`

export default Users
