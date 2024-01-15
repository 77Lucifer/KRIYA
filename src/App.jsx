import React from 'react'
import { BrowserRouter, Routes, Router, Route, } from 'react-router-dom'
import Home from './Components/Home'
import Terms from './Components/Terms'
import Policy from './Components/Policy'
import Complain from './Components/Complain'
import Refund from './Components/Refund'
import Nav from './Components/Nav'
import Collab from './Components/Collab'
import Creator from './Components/Creator'
import Contact from './Components/Contact'
import Creatorcard from './Components/Creatorcard'

function App() {
  
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Terms' element={<Terms/>}></Route>
      <Route path='/Policy' element={<Policy/>}></Route>
      <Route path='/Complain' element={<Complain/>}></Route>
      <Route path='/Refund' element={<Refund/>}></Route>
      <Route path='/Nav' element={<Nav/>}></Route>
      <Route path='/Collab' element={<Collab/>}></Route>
      <Route path='/Creator' element={<Creator/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Creatorcard' element={<Creatorcard/>}></Route>
    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
