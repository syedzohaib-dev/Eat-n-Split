import './App.css'
import Friend from './components/Friend'
import Addfriend from './components/Addfriend'
import Splitbill from './components/Splitbill'
import { useState } from 'react'

function App() {

  const [selectedFriend, setSelectedFriend] = useState(null)
  const [friends, setFriends] = useState([
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8EijPK7ZtYrlNue8jazOOofZQrtJGSl3DrA&s",
      name: "Michel Desenta",
      payment: 20,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc2e8Avgi6lwQTPQ4B8e5phT9ntN9cmzSgCw&s",
      name: "Franklin Clinton",
      payment: 30,
    },
    {
      img: "https://i.pinimg.com/736x/c3/f0/03/c3f003a1844f94f818bd4a8986f4b639.jpg",
      name: "Trevor Philips",
      payment: 50,
    },

  ])


  return (
    <>
      <div className="bigContainer">
        <div className="box">
          <div className="box1">
            <Friend friends={friends} setSelectedFriend={setSelectedFriend} />
            <Addfriend friends={friends} setFriends={setFriends} />
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
