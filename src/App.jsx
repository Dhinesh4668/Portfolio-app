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
import Projects from './Screens/Projects/Projects'

const App = () => {
  return (
    <MainRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Skill' element={<Skills />}/>
        <Route path='project' element={<Projects />} />
      </Routes>
    </MainRouter>
  )
}

export default App