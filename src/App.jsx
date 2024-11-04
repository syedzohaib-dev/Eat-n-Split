import './App.css'
import Friend from './components/Friend'
import Addfriend from './components/Addfriend'
import Splitbill from './components/Splitbill'
import { useState } from 'react'

function App() {

  const [selectedFriend, setSelectedFriend] = useState(null)
  const [friends, setFriends] = useState([
    {
      img: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png",
      name: "John",
      payment: 20,
    },
    {
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmwlMjBwcm9maWxlfGVufDB8fDB8fHww",
      name: "Sarah",
      payment: 30,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOyweUERP_PkAHflHnp-jMxGTx_D-DD638A&s",
      name: "Peter",
      payment: 50,
    },

  ])


  return (
    <>
      <div className="bigContainer">
        <div className="box">
          <div className="box1">
            <Friend friends={friends} setSelectedFriend={setSelectedFriend} />
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
