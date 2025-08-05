import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import "./index.css"
import Home from "./views/Home"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Routes>
    <Route path='/home' element={<Home/>}/>
   </Routes>
  </BrowserRouter>
)
