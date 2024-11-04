import React from 'react'
import './Friend.css'

function Friend({ friends, setSelectedFriend }) {

    const selectHandler = (friends) => {
        setSelectedFriend(friends)
    }

    return (
        <>

            <div className="friendDiv">
                {
                    friends.map((frnd, index) => (
                        <div className="friendDivChildren" key={index}>
                            <div className="friendDivImg">
                                <img src={frnd.img} alt="" /> </div>
                            <div className="friendDivCenter">
                                <p className='friendDivName'>{frnd.name}</p>
                                <p className='youOwn'>{frnd.payment}</p>
                            </div>
                            <button type="button" onClick={selectHandler(setSelectedFriend(frnd))} className='friendDivButton'>Select</button>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default Friend

