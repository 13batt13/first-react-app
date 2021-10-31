import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  addPost,
  changePostText,
  changePhoneNumber,
  getProfile,
} from 'src/features/profile/profileSlice'

import AvatarIcon from 'src/assets/icons/AvatarIcon'
import Post from 'src/components/Post'
import TextInput from 'src/components/textInput'

const Profile = () => {
  const { userId } = useParams()

  const { posts, postText, phoneNumber, profileData, loading, authUserID } =
    useSelector(({ profile, auth }) => ({
      posts: profile.posts,
      postText: profile.postText,
      phoneNumber: profile.phoneNumber,
      profileData: profile.profileData,
      loading: profile.loading,
      authUserID: auth.data.id,
    }))

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfile(userId ? userId : authUserID))
  }, [dispatch, userId, authUserID])

  if (loading) {
    return <div>Loading...</div>
  }

  const postsArray = posts?.map((item) => (
    <Post message={item.message} likes={item.likes} key={item.id} />
  ))

  return (
    <Root>
      <UserInfoContainer>
        <AvatarIcon />
        <UserInfo>
          <UserName>{profileData?.fullName}</UserName>
          <UserBirth>Date of Birth: 13/08/1991</UserBirth>
          <UserAddress>Adress: Astrakhan, Russia</UserAddress>
          <TextInput
            text={phoneNumber}
            dispatch={dispatch}
            actionOnChange={changePhoneNumber}
          />
        </UserInfo>
      </UserInfoContainer>
      <UserPostsContainer>
        My posts
        <UserNewPostContainer>
          <TextInput
            text={postText}
            dispatch={dispatch}
            actionOnEnter={addPost}
            actionOnChange={changePostText}
          />
          <PostButton
            onClick={() => {
              dispatch(addPost())
            }}
          >
            Add Post
          </PostButton>
        </UserNewPostContainer>
        <UserPosts>{postsArray}</UserPosts>
      </UserPostsContainer>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
  height: 85vh;
`
const UserInfoContainer = styled.div`
  margin-top: 10px;
  display: flex;
  height: 200px;
`
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
const UserName = styled.div``
const UserBirth = styled.div``
const UserAddress = styled.div``
const UserPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
const UserNewPostContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const PostButton = styled.button`
  height: 30px;
  width: 150px;
  align-self: flex-end;
`
const UserPosts = styled.div`
  display: flex;
  flex-direction: column-reverse;
`

export default Profile
