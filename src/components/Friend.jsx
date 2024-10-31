import React from 'react'
import './Friend.css'

function Friend({ friends, setSelectedFriend }) {

    return (
        <>
            {
                friends.map((frnd) => (
                    <Friends />
                ))
            }

            <div className="friendDiv">

            </div>

        </>
    )
}

export default Friend

