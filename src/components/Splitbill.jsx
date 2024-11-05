import React, { useState } from 'react'
import "./Splitbill.css"

function Splitbill({ friends, selectedFriend }) {

  const [billValue, setBillValue] = useState(0)
  const [myExpense, setMyExpence] = useState(0)
  const [otherExpence, setOtherExpence] = useState(0)
  const [billPaidBy, setBillPaidBy] = useState("You")

  const splitHandler = () => {
    console.log(friends.filter((frnd) => frnd.name === selectedFriend.name))
    console.log(billValue);
    console.log(myExpense);
    console.log(otherExpence);
    console.log(billPaidBy);

  }

  return (
    <div className='splitBillMain'>
      <span className='splitHeading'>Split a bill with {selectedFriend.name}</span>
      <div className="splitFriendName">
        <span>Bill value:</span> <input onChange={(e) => setBillValue(e.target.value)} type="text" name="" id="" />
      </div>
      <div className="splitFriendName">
        <span>Your expence:</span> <input onChange={(e) => setMyExpence(e.target.value)} type="text" name="" id="" />
      </div>
      <div className="splitFriendName">
        <span>{selectedFriend.name} expence:</span> <input onChange={(e) => setOtherExpence(e.target.value)} type="text" />
      </div>
      <div className="splitFriendName">
        <span>Who is paying the bill ?</span>
        <select onChange={(e) => setBillPaidBy(e.target.value)} className='splitSelect' name="" id="">
          {/* <option value="you">you</option> */}
          <option value="you">{selectedFriend.name}</option>
        </select></div>
      <div className="splitBill"><button onClick={splitHandler} type="button">Split Bill</button></div>

    </div>
  )
}

export default Splitbill