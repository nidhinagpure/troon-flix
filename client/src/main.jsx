import { createRoot } from 'react-dom/client'
import Home from "./views/Home"
import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>
  </BrowserRouter>,
)
