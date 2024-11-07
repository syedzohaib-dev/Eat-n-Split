import React, { useState } from 'react'
import "./Splitbill.css"
// import { Prev } from 'react-bootstrap/esm/PageItem'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

function Splitbill({ friends, selectedFriend, setValue }) {

  const [billValue, setBillValue] = useState(0)
  const [myExpence, setMyExpence] = useState(0)
  const [otherExpence, setOtherExpence] = useState(0)
  const [billPaidBy, setBillPaidBy] = useState("You")

  const splitHandler = () => {
    if (!billValue || !myExpence) {
      return (
        Toastify({
          text: "Plz Fill Out This Field",
          duration: 2000,
          // newWindow: true,
          // close: true,
          gravity: "top", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "#ff9e3f",
            color: "black",
            fontWeight: "bold"
          },
        }).showToast())

    }
    const friendExpence = (billValue - myExpence)
    setValue(prev => ({
      ...prev,
      [selectedFriend.name]: friendExpence
    }))
    console.log(friends.filter((frnd) => frnd.name === selectedFriend.name))
    console.log(billValue);
    console.log(myExpence);
    console.log(otherExpence);
    console.log(billPaidBy);
    (Toastify({
      text: "Update",
      duration: 2000,
      // newWindow: true,
      // close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "#ff9e3f",
        color: "black",
        fontWeight: "bold"
      },
    }).showToast())
    setBillValue('')
    setMyExpence('')
  }

  // setBillValue('')
  // setMyExpence('')


  return (
    <div className='splitBillMain'>
      <span className='splitHeading'>Split a bill with {selectedFriend.name}</span>
      <div className="splitFriendName">
        <span>Bill value:</span> <input value={billValue} onChange={(e) => setBillValue(e.target.value)} type="text" name="" id="" />
      </div>
      <div className="splitFriendName">
        <span>Your expence:</span> <input value={myExpence} onChange={(e) => setMyExpence(e.target.value)} type="text" name="" id="" />
      </div>
      <div className="splitFriendName">
        <span>{selectedFriend.name} expence:</span> <input value={billValue - myExpence} onChange={(e) => setOtherExpence(e.target.value)} type="text" />
      </div>
      <div className="splitFriendName">
        <span>Who is paying the bill ?</span>
        <select onChange={(e) => setBillPaidBy(e.target.value)} className='splitSelect' name="" id="">
          {/* <option value="you">you</option> */}
          <option value={selectedFriend.name}>{selectedFriend.name}</option>
        </select></div>
      <div className="splitBill"><button onClick={splitHandler} type="button">Split Bill</button></div>

    </div>
  )
}

export default Splitbill