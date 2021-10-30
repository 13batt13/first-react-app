import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as axios from 'axios'
import { showSharedError, setSharedError } from 'src/features/sharedSlice'

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { dispatch }) => {
    try {
      dispatch(setLoading(true))
      const response = await axios.get(
        'https://social-network.samuraijs.com/api/1.0/users',
      )
      dispatch(setLoading(false))
      dispatch(setUsers(response.data.items))
    } catch (error) {
      dispatch(setLoading(false))
      dispatch(setSharedError(error.message))
      dispatch(showSharedError())
    }
  },
)

const initialState = {
  users: [],
  loading: false,
  error: null,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    followUser: (state, action) => {
      for (let i = 0; i < state.users.length; i++) {
        if (state.users[i].id === action.payload) {
          state.users[i].followed = !state.users[i].followed
          break
        }
      }
    },
  },
})

export const { setUsers, followUser, setLoading } = usersSlice.actions

export default usersSlice.reducer
