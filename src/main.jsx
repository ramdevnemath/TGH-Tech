import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ToastProvider } from 'react-toast-notifications'
import { Provider } from 'react-redux'
import store from './Redux/Store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <ToastProvider>
      <App />
    </ToastProvider>
  </Provider>
  // </React.StrictMode>,
)
