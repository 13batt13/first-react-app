export const store = {
  _callSubscriber() {},
  _state: {
    posts: [
      { id: 1, message: 'Post1', likes: 10 },
      { id: 2, message: 'Post2', likes: 1055 },
      { id: 3, message: 'Post3', likes: 3 },
      { id: 4, message: 'Post4', likes: 44 },
      { id: 5, message: 'Post5', likes: 14 },
    ],
    postText: '',
    phoneNumber: '',
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
  },
  getState() {
    return this._state
  },
  addPost() {
    const newPost = {
      id: this._state.posts.length + 1,
      message: this._state.postText,
      likes: 0,
    }
    this._state.posts.push(newPost)
    this._callSubscriber()
  },
  changePostText(text) {
    this._state.postText = text
    this._callSubscriber()
  },
  changePhoneNumber(text) {
    if (text.match(/^[0-9]*$/)) {
      this._state.phoneNumber = text
      this._callSubscriber()
    }
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
}
