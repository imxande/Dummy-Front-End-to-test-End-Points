import React, {useState, useEffect} from "react";
import axios from "axios";
import UserCard from "./UserCard";

const UserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/users")
      .then(response => {
        setUserList(response.data)
        // console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const deleteUser = (id) => {
   
    axios.delete(`http://localhost:3000/api/users/${id}`)
    .then(response => {
      console.log(response)
      const updatedUsers = userList.filter(user => user.id !== id);
      setUserList(updatedUsers)
    })
    .catch(error=> {
      console.log(error)
    })
    // console.log(id)
  }

  return (
    <div>
      {userList.map((user, index)=> {
        return <UserCard deleteUser={deleteUser} key={index} name={user.name} bio={user.bio} id={user.id}/>
      })}
    </div>
  )
}

export default UserList