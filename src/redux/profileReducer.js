import { ACTIONS } from 'src/redux/actions'

export const profileReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_POST: {
      if (state.postText) {
        const newPost = {
          id: state.posts.length + 1,
          message: state.postText,
          likes: 0,
        }
        return { ...state, posts: [...state.posts, newPost], postText: '' }
      }
      break
    }
    case ACTIONS.CHANGE_POST_TEXT: {
      return { ...state, postText: action.text }
    }
    case ACTIONS.CHANGE_PHONE_NUMBER: {
      if (action.text.match(/^[0-9]*$/)) {
        return { ...state, phoneNumber: action.text }
      }
      break
    }
    default:
      return state
  }

  return state
}
