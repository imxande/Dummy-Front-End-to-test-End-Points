import axios from "axios";
import React, {useState} from "react";

const AddUserForm = () => {
const [formState, setFormState] = useState({
  name: "",
  bio: ""
})

const handleSubmit = e => {
  e.preventDefault();

  // create a user, second param is the state in the form
  axios.post("http://localhost:3000/api/users", formState)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error)
        })
}

const handleChange = e => {
  // e.target.name => name of input that fired the event
  // e.target.value =? current value of the input that fired the event

// init new form state
const newFormState = {...formState, [e.target.name]: e.target.value}

// update state
setFormState(newFormState)
}


return (
  <div className="form-container">
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
        />
        <label htmlFor="bio">Bio: </label>
        <input
          type="text" 
          name="bio"  
          value={formState.bio} 
          onChange={handleChange} />

        <button type="submit" className="addButton">ADD USER</button>
    </form>
  </div>
 )
}

export default AddUserForm;