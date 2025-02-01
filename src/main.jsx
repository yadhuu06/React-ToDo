import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Head.jsx'
import Footer from './Foot.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
    <Header/>
    <Footer/>
  </StrictMode>,
)
