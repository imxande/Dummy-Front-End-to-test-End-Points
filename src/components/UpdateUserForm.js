import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import UserList from "./UserList";

const UpdateUserForm = (props) => {
  const [formState, setFormState] = useState({
    name: "",
    bio: ""
  });
  console.log(props);

  const { id } = useParams();
  console.log(id);
  const { push } = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/users/${id}`)
      .then((response) => {
        console.log(response);
        setFormState(response.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3000/api/users/${id}`, formState)
      .then((response) => {
        console.log(response);
        props.setUserList(response.data);
        push(`http://localhost:3000`);
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (e) => {
    // e.target.value => value at the input name
    // e.target.name => input name

    const newFormState = {
      ...formState,
      [e.target.name]: e.target.value
    };
    setFormState(newFormState);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newName" />
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
        <label htmlFor="newBio" />
        <input
          type="text"
          name="bio"
          value={formState.bio}
          onChange={handleChange}
        />

        <button type="submit" className="buttonBlock">
          UPDATE USER
        </button>
      </form>
    </div>
  );
};

export default UpdateUserForm;
