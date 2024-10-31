import { useState } from 'react'

import './App.css'
import Friend from './components/Friend'
import Addfriend from './components/Addfriend'
import Splitbill from './components/Splitbill'

function App() {

  return (
    <>
      <div className="bigContainer">
        <div className="box">
          <div className="box1">
            <Friend />
            <Addfriend />
          </div>
          <div className="box2">
            <Splitbill />
          </div>
          </div>
      </div>
    </>
  )
}

export default App
