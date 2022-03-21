import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'

const ListUsers = () => {

const [users, setUsers] = useState([])

useEffect(() => {
  fetch('https://randomuser.me/api?results=25')
  .then((res) => res.json())
  .then((users) => setUsers(users.results))
}, [])

  return (
    <ol>
      {users.sort((a, b) => {
        return(
          a.name.first > b.name.first
        )
      })
      .map((user) => {
        return (
          <li key={user.id.value}>
            <UserCard {...user} />
          </li>
        )})}
    </ol>
  )
}

export default ListUsers