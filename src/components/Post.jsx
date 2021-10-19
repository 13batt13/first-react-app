import styled from 'styled-components'

const Post = ({ message, likes }) => (
  <Root>
    <PostText>{message}</PostText>
    <LikesCounter>{likes}</LikesCounter>
  </Root>
)

const Root = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;
`
const PostText = styled.span``
const LikesCounter = styled.span``

export default Post
