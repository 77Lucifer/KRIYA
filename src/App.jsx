import React from 'react'
import { BrowserRouter, Routes, Router, Route, } from 'react-router-dom'
import Home from './Components/Home'
import Terms from './Components/termsandconditions'
import Policy from './Components/privacypolicy'
import Complain from './Components/riskandcompliance'
import Refund from './Components/refundpolicy'
import Nav from './Components/Nav'
import Collab from './Components/Collab'
import Creator from './Components/Creator'
import Contact from './Components/Contact'
import Creatorcard from './Components/Creatorcard'
import Admin from './Components/Admin'
import Dashboard from './Components/dashboard'

function App() {
  
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/termsandconditions' element={<Terms/>}></Route>
      <Route path='/privacypolicy' element={<Policy/>}></Route>
      <Route path='/riskandcompliance' element={<Complain/>}></Route>
      <Route path='/refundpolicy' element={<Refund/>}></Route>
      <Route path='/Nav' element={<Nav/>}></Route>
      <Route path='/Collab' element={<Collab/>}></Route>
      <Route path='/Creator' element={<Creator/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Creatorcard' element={<Creatorcard/>}></Route>
      <Route path='/Admin' element={<Admin/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
