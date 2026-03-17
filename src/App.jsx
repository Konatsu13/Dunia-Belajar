import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './pages/login'
import Dashboard from "./pages/dashboard"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => (

  <Routes>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      
    </Routes>
)

export default App
