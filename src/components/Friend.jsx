import React from 'react'
import './Friend.css'

function Friend({ friends, setSelectedFriend }) {
    return (
        <>
            <div className="friendDiv">
                {
                    friends.map((frnd, index) => (
                        <Friendy key={index} detail={frnd} setSelectedFriend={setSelectedFriend} />
                    ))
                }
            </div>

        </>
    )
}

export default Friend

const Friendy = ({ detail, setSelectedFriend, billValue }) => {
    const selectHandler = () => {

        setSelectedFriend(detail)
    }
    return (
        <div className="friendDivChildren" >
            <div className="friendDivImg">
                <img src={detail.img} alt="" /> </div>
            <div className="friendDivCenter">
                <p className='friendDivName'>{detail.name}</p>
                <p className='youOwn'>{detail.name} need to pay {billValue}</p>
            </div>
            <button type="button" onClick={selectHandler} className='friendDivButton'>Select</button>
        </div>


    )
}