import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sharedError: '',
  isShowSharedError: false,
}

export const sharedSlice = createSlice({
  name: 'shared',
  initialState,
  reducers: {
    setSharedError: (state, action) => {
      state.sharedError = action.payload
    },
    showSharedError: (state) => {
      state.isShowSharedError = true
    },
    closeSharedError: (state) => {
      state.isShowSharedError = false
      state.sharedError = ''
    },
  },
})

export const { setSharedError, showSharedError, closeSharedError } =
  sharedSlice.actions

export default sharedSlice.reducer
