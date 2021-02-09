import React, { useState } from "react";

const UpdateUserForm = (props) => {
  const [formState, setFormState] = useState({
    name: "",
    bio: ""
  });
  console.log(props);

  return (
    <div>
      <form>
        <label htmlFor="newName" />
        <input
          type="text"
          name="newName"
          value={formState.name}
          // onChange={}
        />
        <label htmlFor="newBio" />
        <input
          type="text"
          name="newBio"
          value={formState.bio}
          // onChange={}
        />

        <button type="submit" className="buttonBlock">
          UPDATE USER
        </button>
      </form>
    </div>
  );
};

export default UpdateUserForm;
