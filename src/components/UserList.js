import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import AddUserForm from "./AddUserFrom";
import { UserContext } from "../contexts/UserContext";
import { Route } from "react-router-dom";
import UpdateUserForm from "./UpdateUserForm";

const UserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/users")
      .then((response) => {
        setUserList(response.data);
        // console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteUser = (id) => {
    console.log(id);

    axios
      .delete(`http://localhost:3000/api/users/${id}`)
      .then((response) => {
        // console.log(response);
        const updatedUsers = userList.filter((user) => user.id !== id);
        setUserList(updatedUsers);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <UserContext.Provider value={{ userList, setUserList }}>
      <div>
        <AddUserForm />
        {userList.map((user, index) => {
          return (
            <UserCard
              deleteUser={deleteUser}
              key={index}
              name={user.name}
              bio={user.bio}
              id={user.id}
            />
          );
        })}
        <Route
          path="/api/users/:id"
          render={(props) => (
            <UpdateUserForm {...props} setUserList={setUserList} />
          )}
        />
      </div>
    </UserContext.Provider>
  );
};

export default UserList;
