import React from 'react'
import './App.css'
import {
  BrowserRouter as MainRouter,
  Route,
  Routes
 } from "react-router-dom"
import Home from './Screens/Home/Home'
import Header from './components/Headder/Header'
import Skills from './Screens/Skills/Skills'

const App = () => {
  return (
    <MainRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Skills' element={<Skills />}/>
        <Route path='projects' element={<Home />} />
      </Routes>
    </MainRouter>
  )
}

export default App