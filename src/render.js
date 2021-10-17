import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

export const rerenderEntireTree = (
  state,
  addPost,
  changePostText,
  changePhoneNumber,
) =>
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        changePostText={changePostText}
        changePhoneNumber={changePhoneNumber}
      />
    </React.StrictMode>,
    document.getElementById('root'),
  )
