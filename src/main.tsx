import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { Provider } from 'react-redux'
import { store } from './store/store/index.ts'
import { UserContextProvider } from './context/UserContext.tsx'
import MerlinApp from './MerlinApp.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserContextProvider>
      <Provider store={store}>
        <MerlinApp />
      </Provider>
    </UserContextProvider>
  </React.StrictMode>,
)
