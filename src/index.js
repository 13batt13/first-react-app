import React from 'react'
import ReactDOM from 'react-dom'
import './reset.css'
import './index.css'
import App from './App'
import { store } from 'src/redux/state'

const rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>,
    document.getElementById('root'),
  )
}
rerenderEntireTree()

store.subscribe(rerenderEntireTree)
