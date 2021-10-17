import React from 'react'
import styled from 'styled-components'

import AvatarIcon from 'src/assets/icons/AvatarIcon'
import Post from 'src/components/Post'
import TextInput from 'src/sections/sectionContent/sectionProfile/TextInput'

const Profile = ({
  posts,
  addPost,
  postText,
  changePostText,
  phoneNumber,
  changePhoneNumber,
}) => {
  const postsArray = posts?.map((item) => (
    <Post message={item.message} likes={item.likes} key={item.id} />
  ))

  return (
    <Root>
      <UserInfoContainer>
        <AvatarIcon />
        <UserInfo>
          <UserName>Name: Max</UserName>
          <UserBirth>Date of Birth: 13/08/1991</UserBirth>
          <UserAddress>Adress: Astrakhan, Russia</UserAddress>
          <TextInput text={phoneNumber} changeText={changePhoneNumber} />
        </UserInfo>
      </UserInfoContainer>
      <UserPostsContainer>
        My posts
        <UserNewPostContainer>
          <TextInput text={postText} changeText={changePostText} />
          <PostButton
            onClick={() => {
              addPost()
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
`
const UserInfoContainer = styled.div`
  margin-top: 10px;
  display: flex;
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
