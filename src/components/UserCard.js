import React from "react";
import Button from "./Button";

const UserCard = (props) => {
  // console.log(props, "Users")

  return (
    <div>
      <p>
        <strong>Name: </strong>
        {props.name}
      </p>
      <p>
        <strong>Bio: </strong>
        {props.bio}
      </p>
      <Button deleteUser={props.deleteUser} id={props.id} />
    </div>
  );
};

export default UserCard;
