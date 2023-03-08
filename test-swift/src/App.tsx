import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LayOut from './scene/LayOut/Layout'
import NavigationBar from './scene/NavigationBar/NavigationBar'
import TestOne from './scene/TestOne/TestOne'
import TestThree from './scene/TestThree/TestThree'
import TestTwo from './scene/TestTwo/TestTwo'


const App: React.FC = () => {
  return (
    <div className='app-container'>
      <NavigationBar/>
        <Routes>
          <Route path='/' element={<LayOut/>}/>
          <Route path='testone' element={<TestOne/>}/>
          <Route path='testtwo' element={<TestTwo/>}/>
          <Route path='testthree' element={<TestThree/>}/>
      </Routes>
    </div>
  )
}

export default App
