import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [
    {
      name: 'Shubert',
      id: 'jfkj<nfkj<nfkj<njnjnnjfjgjgjgjs<opopop',
      photos: {
        small: null,
        large: null,
      },
      status: null,
      followed: true,
    },
    {
      name: 'Stephen',
      id: 2,
      photos: {
        small: null,
        large: null,
      },
      status: null,
      followed: false,
    },
    {
      name: 'Stephen',
      id: 3,
      photos: {
        small: null,
        large: null,
      },
      status: null,
      followed: false,
    },
    {
      name: 'Stephen',
      id: 4,
      photos: {
        small: null,
        large: null,
      },
      status: null,
      followed: false,
    },
  ],
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
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

export const { setUsers, followUser } = usersSlice.actions

export default usersSlice.reducer
