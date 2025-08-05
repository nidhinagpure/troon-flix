import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './views/Home'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
     <Route path="/" element={<Home/>}/>
  </Routes>
  </BrowserRouter>
)
