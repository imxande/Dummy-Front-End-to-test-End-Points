import React from "react";
import { useHistory } from "react-router-dom";

const Button = (props) => {
  // console.log(props.id);
  const { push } = useHistory();

  return (
    <div>
      <button onClick={() => push(`/update/${props.id}`)}>EDIT</button>
      <button onClick={() => props.deleteUser(props.id)}>DELETE</button>
    </div>
  );
};

export default Button;
