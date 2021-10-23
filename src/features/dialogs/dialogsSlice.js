import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dialogs: [
    { id: 1, user: 'Sarah' },
    { id: 2, user: 'Jessica' },
    { id: 3, user: 'Parker' },
  ],
  messages: [
    { id: 1, message: 'Hello', from: '' },
    { id: 2, message: 'how are you?', from: '' },
    { id: 3, message: 'Fine. and you?', from: '' },
    { id: 4, message: 'Me too', from: '' },
    { id: 5, message: 'Hey! Check this! www.youtube.com', from: '' },
  ],
  messageText: '',
}

export const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
    addMessage: (state) => {
      if (state.messageText) {
        const newMessage = {
          id: state.messages.length + 1,
          message: state.messageText,
          from: 'me',
        }
        state.messages.push(newMessage)
        state.messageText = ''
      }
    },
    changeMessage: (state, action) => {
      state.messageText = action.payload
    },
  },
})

export const { addMessage, changeMessage } = dialogsSlice.actions

export default dialogsSlice.reducer
