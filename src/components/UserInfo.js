import React, { useState, useEffect } from 'react'

const UserInfo = (props) => {
  const [user, setUser] = useState(props)
  console.log(user)

  useEffect(() => {
    setUser(props);
  }, [props]);

  return (
    <div className="userInfo">
      <p>Cell Phone: {user.cell}</p>
      <p>Home Phone: {user.phone}</p>
      <p>Email: {user.email}</p>
      <p>Birthday: {user.dob.date.substring(5, 10)}-{user.dob.date.substring(0, 4)}</p>

    </div>
  )
}

export default UserInfo