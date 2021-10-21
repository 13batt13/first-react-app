import { ACTIONS } from 'src/redux/actions'
import { dialogsReducer } from 'src/redux/dialogsReducer'
import { profileReducer } from 'src/redux/profileReducer'

export const store = {
  _callSubscriber() {},
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Post1', likes: 10 },
        { id: 2, message: 'Post2', likes: 1055 },
        { id: 3, message: 'Post3', likes: 3 },
        { id: 4, message: 'Post4', likes: 44 },
        { id: 5, message: 'Post5', likes: 14 },
      ],
      postText: '',
      phoneNumber: '',
    },
    dialogsPage: {
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
    },
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._callSubscriber()
  },
}
