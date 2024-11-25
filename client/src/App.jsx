import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/admin/Dashboard'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/"element={<Home/>}/>
        <Route exact path="/sign-up"element={<Signup/>}/>
        <Route exact path="/login"element={<Login/>}/>
        <Route exact path="/dashboard"element={<Dashboard/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App