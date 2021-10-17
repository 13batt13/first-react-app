import React from 'react'
import ReactDOM from 'react-dom'
import './reset.css'
import './index.css'
import App from './App'
import {
  state,
  addPost,
  changePostText,
  changePhoneNumber,
} from 'src/redux/state'

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
