import styled from 'styled-components'

import avatar from '../images/avatar.svg'
import Post from './Post'

const Profile = () => {
  return (
    <Content>
      <Hat />
      <UserInfoContainer>
        <Avatar src={avatar} />
        <UserInfo>
          <UserName>Name: Max</UserName>
          <UserBirth>Date of Birth: 13/08/1991</UserBirth>
          <UserAddress>Adress: Astrakhan, Russia</UserAddress>
        </UserInfo>
      </UserInfoContainer>
      <UserPostsContainer>
        My posts
        <UserNewPostContainer>
          <NewPostText></NewPostText>
          <PostButton></PostButton>
        </UserNewPostContainer>
        <UserPosts>
          <Post message="post1" />
          <Post message="post2" likes={10} />
        </UserPosts>
      </UserPostsContainer>
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
const UserInfoContainer = styled.div`
  margin-top: 10px;
  display: flex;
`
const Avatar = styled.img`
  height: 100px;
  width: 100px;
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
const NewPostText = styled.textarea`
  width: auto;
`
const PostButton = styled.button`
  height: 20px;
  width: 40px;
  align-self: flex-end;
`
const UserPosts = styled.div`
  display: flex;
  flex-direction: column;
`

export default Profile
