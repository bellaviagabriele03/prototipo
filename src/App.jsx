import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import DefaultLayout from './Layouts/DefaultLayout'
import Home from './Pages/Home'
import Viaggi from './Pages/Viaggi'
import Dettagli from './Pages/Dettagli'

function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route element={<Home />} path='/'/>
          <Route element={<Viaggi />} path='/viaggi'/>
          <Route element={<Dettagli />} path='/viaggi/:id'/>
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
