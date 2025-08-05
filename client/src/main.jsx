import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './views/Home'
import './style.css'

createRoot(document.getElementById('root')).render(
  <div className='bg-gray-100'>
  <BrowserRouter>
  <Routes>
     <Route path="/" element={<Home/>}/>
  </Routes>
  </BrowserRouter>
  </div>
)
