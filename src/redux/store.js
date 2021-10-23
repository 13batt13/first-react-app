import { configureStore } from '@reduxjs/toolkit'
import profileReducer from 'src/features/profile/profileSlice'
import dialogsReducer from 'src/features/dialogs/dialogsSlice'
import usersReducer from 'src/features/users/usersSlice'

export default configureStore({
  reducer: {
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer,
  },
})
