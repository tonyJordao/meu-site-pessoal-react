import React, { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route, } from "react-router-dom"
import Home from './components/Home/Home'
import Projetos from './components/Projetos/Projetos'
import Contato from './components/Contato/Contato'

function App () {
return( 
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/projetos" element={<Projetos />}/>
    <Route path="/contato" element={<Contato />}/>
      
    </Routes>
  </BrowserRouter>
  
)
}

export default App
