import React from 'react'
import './App.css'
import {
  BrowserRouter as MainRouter,
  Route,
  Routes
 } from "react-router-dom"
import Home from './Screens/Home/Home'
import Header from './components/Headder/Header'

const App = () => {
  return (
    <MainRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Skills' element={<h1>skills</h1> }/>
        <Route path='projects' element={<Home />} />
      </Routes>
    </MainRouter>
  )
}

export default App