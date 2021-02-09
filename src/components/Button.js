import React from "react";

const Button = (props) => {
  // console.log(props, "Button")

  return (
    <div>
      <button onClick={() => props.updateUser(props.id)}>EDIT</button>
      <button onClick={() => props.deleteUser(props.id)}>DELETE</button>
    </div>
  );
};

export default Button;
