import React from 'react'
import "./Addfriend.css"


function Addfriend() {
  return (
    <div className='addFriendMain'>
      <div className="addFriendChild">
        <div className="friendName"><span>Friend Name:</span> <input type="text" name="" id="" /></div>
        <div className="friendName"><span>Image URL:</span> <input type="url" name="" id="" /></div>
        <div className="addFriendBtn"><button type="button">Add</button></div>
      </div>
    </div>
  )
}

export default Addfriend