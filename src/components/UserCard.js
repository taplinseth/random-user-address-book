import React, { useState, useEffect } from 'react'
import UserInfo from './UserInfo'

const UserCard = props => {
  const [user, setUser] = useState(props)
  const [isHidden, setHide] = useState(true)
  const [buttonText, setButtonText] = useState("Show Details")



  useEffect(() => {
    setUser(props);
  }, [props]);
  return (
    <div className="userCard" onClick={() => {isHidden ? setHide(false) : setHide(true)}}>
      <div>
        <img 
          src={user.picture.medium}
          alt="user thumbnail">
        </img>
        <button onClick={() => setButtonText("Hide Details")}>{buttonText}</button>
      </div>
      <div>
        <h3>{user.name.first} {user.name.last}</h3>
        {isHidden ? 
        <div></div> :
        <UserInfo {...user} />
      } 
      </div>

    </div>
  )
}

export default UserCard
