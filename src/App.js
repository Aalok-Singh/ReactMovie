import React from 'react'
import "./App.css";
import Home from './Home'
import {Routes,Route} from 'react-router-dom'
import SingleMoveis from './SingleMoveis'
import Error from './Error'
import { AppProvider } from './contex'
const App = () => {
  return (
    <>
  
    <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/movie/:id' element={<SingleMoveis/>}> </Route>
      <Route path='*' element={<Error/>}></Route>
    </Routes>
    
    </>
  )
}

export default App