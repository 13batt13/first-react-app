import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { usersApi } from 'src/api/api'
import { showSharedError, setSharedError } from 'src/features/sharedSlice'

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async ({ count, page }, { dispatch }) => {
    try {
      dispatch(setLoading(true))
      const response = await usersApi.getUsers(count, page)
      dispatch(setLoading(false))
      dispatch(setUsers(response.data.items))
    } catch (error) {
      dispatch(setLoading(false))
      dispatch(setSharedError(error.message))
      dispatch(showSharedError())
    }
  },
)
export const followUser = createAsyncThunk(
  'users/followUser',
  async ({ id, followed }, { dispatch }) => {
    try {
      dispatch(setFollowLoading(true))
      const response = followed
        ? await usersApi.unfollowUser(id)
        : await usersApi.followUser(id)
      dispatch(setFollowLoading(false))
      if (response.data.resultCode === 0) {
        dispatch(localFollowUser(id))
      } else {
        dispatch(setSharedError(response.data.messages[0]))
        dispatch(showSharedError())
      }
    } catch (error) {
      dispatch(setFollowLoading(false))
      dispatch(setSharedError(error.message))
      dispatch(showSharedError())
    }
  },
)

const initialState = {
  users: [],
  loading: false,
  followLoading: false,
  error: null,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users.push(...action.payload)
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    localFollowUser: (state, action) => {
      for (let i = 0; i < state.users.length; i++) {
        if (state.users[i].id === action.payload) {
          state.users[i].followed = !state.users[i].followed
        }
      }
    },
    setFollowLoading: (state, action) => {
      state.followLoading = action.payload
    },
  },
})

export const { setUsers, setLoading, localFollowUser, setFollowLoading } =
  usersSlice.actions

export default usersSlice.reducer
