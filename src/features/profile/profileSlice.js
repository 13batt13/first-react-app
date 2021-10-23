import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: [
    { id: 1, message: 'Post1', likes: 10 },
    { id: 2, message: 'Post2', likes: 1055 },
    { id: 3, message: 'Post3', likes: 3 },
    { id: 4, message: 'Post4', likes: 44 },
    { id: 5, message: 'Post5', likes: 14 },
  ],
  postText: '',
  phoneNumber: '',
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addPost: (state) => {
      if (state.postText) {
        const newPost = {
          id: state.posts.length + 1,
          message: state.postText,
          likes: 0,
        }
        state.posts.push(newPost)
        state.postText = ''
      }
    },
    changePostText: (state, action) => {
      state.postText = action.payload
    },
    changePhoneNumber: (state, action) => {
      if (action.payload.match(/^[0-9]*$/)) {
        state.phoneNumber = action.payload
      }
    },
  },
})

export const { addPost, changePostText, changePhoneNumber } =
  profileSlice.actions

export default profileSlice.reducer
