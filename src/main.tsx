import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { Provider } from 'react-redux'
import { store } from './store/store/index'
import { UserContextProvider } from './context/UserContext'
import MerlinApp from './MerlinApp'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserContextProvider>
      <Provider store={store}>
        <MerlinApp />
      </Provider>
    </UserContextProvider>
  </React.StrictMode>,
)
