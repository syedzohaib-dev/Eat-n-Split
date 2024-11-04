import React from 'react'
import "./Splitbill.css"

function Splitbill() {
  return (
    <div className='splitBillMain'>
      <span className='splitHeading'>Split a bill with Sarah</span>
      <div className="splitFriendName"><span>Bill value:</span> <input type="text" name="" id="" /></div>
      <div className="splitFriendName"><span>Your expence:</span> <input type="text" name="" id="" /></div>
      <div className="splitFriendName"><span>Sarah expence:</span> </div>
      <div className="splitFriendName"><span>Who is paying the bill ?</span> <select className='splitSelect' name="" id=""><option value="you">you</option></select></div>
      <div className="splitBill"><button type="button">Split Bill</button></div>

    </div>
  )
}

export default Splitbill