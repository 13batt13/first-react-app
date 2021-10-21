import { ACTIONS } from 'src/redux/actions'

export const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_MESSAGE: {
      if (state.messageText) {
        const newMessage = {
          id: state.messages.length + 1,
          message: state.messageText,
          from: 'me',
        }
        return {
          ...state,
          messages: [...state.messages, newMessage],
          messageText: '',
        }
      }
      break
    }
    case ACTIONS.CHANGE_MESSAGE: {
      return { ...state, messageText: action.text }
    }
    default:
      return state
  }

  return state
}
