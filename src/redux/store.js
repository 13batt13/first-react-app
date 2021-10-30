import { configureStore } from '@reduxjs/toolkit'
import profileReducer from 'src/features/profile/profileSlice'
import dialogsReducer from 'src/features/dialogs/dialogsSlice'
import usersReducer from 'src/features/users/usersSlice'
import sharedReducer from 'src/features/sharedSlice'
import authReducer from 'src/features/auth/authSlice'

export default configureStore({
  reducer: {
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer,
    shared: sharedReducer,
    auth: authReducer,
  },
})
