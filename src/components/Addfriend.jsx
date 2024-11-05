import React, { useState } from 'react'
import "./Addfriend.css"
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"



function Addfriend({ friends, setFriends }) {
  const [name, setName] = useState("")
  const [img, setImg] = useState("")

  const addHandler = () => {
    if (!name || !img) {
      return (Toastify({
        text: "All Fields Are Required",
        duration: 2000,
        // newWindow: true,
        // close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#ff9e3f",
          color: "black"
        },
      }).showToast())
    }
    console.log(name, img)
    const friendCopy = [...friends];
    friendCopy.push({
      name: name,
      img: img,
      payment: 0,
    })
    setFriends(friendCopy)
    setName("")
    setImg("")
  }




  return (
    <div className='addFriendMain'>
      <div className="addFriendChild">
        <div className="friendName"><span>Friend Name:</span> <input onChange={(e) => setName(e.target.value)} value={name} type="text" name="" id="" /></div>
        <div className="friendName"><span>Image URL:</span> <input onChange={(e) => setImg(e.target.value)} value={img} type="text" name="" id="" /></div>
        <div className="addFriendBtn"><button type="button" onClick={addHandler}>Add</button></div>
      </div>
    </div>
  )
}

export default Addfriend