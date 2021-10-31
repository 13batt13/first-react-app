import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { profileApi } from 'src/api/api'
import { setSharedError, showSharedError } from 'src/features/sharedSlice'

export const getProfile = createAsyncThunk(
  'profile/getProfile',
  async (id, { dispatch }) => {
    try {
      const response = await profileApi.getProfile(id)
      if (response.data?.resultCode === 1) {
        dispatch(setSharedError(response.data.messages[0]))
        dispatch(showSharedError())
      }
      return response.data
    } catch (error) {
      dispatch(setLoading(false))
      dispatch(setSharedError(error.message))
      dispatch(showSharedError())
    }
  },
)

const initialState = {
  posts: [],
  postText: '',
  phoneNumber: '',
  profileData: {
    userId: null,
    lookingForAJob: false,
    lookingForAJobDescription: '',
    fullName: '',
    contacts: {
      github: '',
      vk: '',
      facebook: '',
      instagram: '',
      twitter: '',
      website: '',
      youtube: '',
      mainLink: '',
    },
    photos: {
      small: null,
      large: null,
    },
  },
  loading: false,
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
    setLoading: (state, action) => {
      state.loading = action.payload
    },
  },
  extraReducers: {
    [getProfile.pending]: (state) => {
      state.loading = true
    },
    [getProfile.fulfilled]: (state, action) => {
      state.loading = false
      state.profileData = action.payload
    },
  },
})

export const { addPost, changePostText, changePhoneNumber, setLoading } =
  profileSlice.actions

export default profileSlice.reducer
