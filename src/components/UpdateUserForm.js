import React, { useState } from "react";

const UpdateUserForm = (props) => {
  const [formState, setFormState] = useState({
    newName: "",
    newBio: ""
  });
  // console.log(props);

  const handleSubmit = props.updateUser;

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
          name="newName"
          value={formState.newName}
          onChange={handleChange}
        />
        <label htmlFor="newBio" />
        <input
          type="text"
          name="newBio"
          value={formState.newBio}
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
