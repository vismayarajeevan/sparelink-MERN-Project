import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import productStore from './Redux/ProductStore.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter> 
    <Provider store={productStore}>
      <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
